import React from "react";
import useComponentSize from "@rehooks/component-size";
import { ItemAPI } from "../@types";

export default React.forwardRef(function ListItem(
  props: {
    children: React.ReactChild;
    onChangeHeight: (value: number) => any;
    style: React.CSSProperties;
  },
  ref: React.Ref<ItemAPI>
) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const size = useComponentSize(divRef);

  React.useImperativeHandle(
    ref,
    () => {
      return { height: size.height };
    },
    [size.height]
  );

  React.useEffect(() => {
    props.onChangeHeight(size.height);
  }, [size.height]);

  return (
    <div style={props.style}>
      <div ref={divRef} className="child-wrapper">
        {props.children}
      </div>
    </div>
  );
});
