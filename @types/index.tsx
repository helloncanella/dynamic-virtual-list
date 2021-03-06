import { VariableSizeListProps } from "react-window";

export type VirtualizedListProps = Omit<
  VariableSizeListProps,
  "height" | "width" | "itemSize"
> & {
  itemSize?: VariableSizeListProps["itemSize"];
};

export type ItemAPI = { height: number };
