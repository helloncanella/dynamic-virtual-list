import React from "react";
import { VariableSizeList } from "react-window";
import { ItemAPI, VirtualizedListProps } from "./@types";

export default React.createContext<IVirtualizedListContext>(
  {} as IVirtualizedListContext
);
interface IVirtualizedListContext {
  itemsRefs: React.RefObject<(ItemAPI | null)[] | undefined> | null;
  variableSizeListRef: React.RefObject<VariableSizeList | undefined> | null;
  rootProps: VirtualizedListProps | null;
}
