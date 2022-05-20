import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import mergeRefs from "./util/mergeRefs";
import VirtualizedListContext from "./components/VirtualizedListContext";
import Render from "./components/Render";
import { VirtualizedListProps, ItemAPI } from "./@types";

export default React.forwardRef(DynamicVirtualList);

function DynamicVirtualList(
  props: VirtualizedListProps,
  externalRef: React.ForwardedRef<VariableSizeList | null>
) {
  const variableSizeListRef = React.useRef<VariableSizeList | null>(null);
  const itemsRefs = React.useRef<ItemAPI[]>([]);

  const ref = mergeRefs([externalRef, variableSizeListRef]);

  const providerValue = React.useMemo(
    () => ({
      itemsRefs,
      variableSizeListRef,
      rootProps: props,
    }),
    [itemsRefs, variableSizeListRef, ...Object.values(props)]
  );

  const itemSize = React.useCallback(
    (index: number) => {
      if (props.itemSize) {
        return props.itemSize(index);
      }

      return itemsRefs.current[index]?.height || 0;
    },
    [props.itemSize]
  );

  if (typeof props.itemCount !== "number") return null;

  return (
    <VirtualizedListContext.Provider value={providerValue}>
      <AutoSizer className="dynamic-virtual-list">
        {(autoSizerProps: { height: number; width: number }) => {
          return (
            <VariableSizeList
              {...props}
              itemSize={itemSize}
              height={autoSizerProps.height}
              width="100%"
              ref={ref}
            >
              {Render}
            </VariableSizeList>
          );
        }}
      </AutoSizer>
    </VirtualizedListContext.Provider>
  );
}
