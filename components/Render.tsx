import React from "react";
import { VariableSizeListProps } from "react-window";
import VirtualizedListContext from "./VirtualizedListContext";
import Item from "./ListItem";

const Render: VariableSizeListProps["children"] = function Render(...args) {
  const { index, style } = args[0];

  const { itemsRefs, variableSizeListRef, rootProps } = React.useContext(
    VirtualizedListContext
  );

  const children = rootProps?.children;

  if (!children) return null;

  return (
    <Item
      style={style}
      ref={(e) => {
        if (!itemsRefs) return;
        itemsRefs.current && (itemsRefs.current[index] = e);
      }}
      onChangeHeight={(value) => {
        variableSizeListRef?.current?.resetAfterIndex(index);
      }}
    >
      {React.createElement(children, ...args)}
    </Item>
  );
};

export default Render;
