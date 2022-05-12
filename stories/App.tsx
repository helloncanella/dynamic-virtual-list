import React, { useEffect, useMemo, useState } from "react";
import DynamicVirtualList from "../src/DynamicVirtualList/DynamicVirtualList";

import { loremIpsum } from "lorem-ipsum";

export function App() {
  const ref = React.useRef(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <div className="app" style={{ height: "100%" }}>
      <div
        style={{
          height: window.outerHeight / 2,
          width: window.innerWidth / 3,
        }}
      ></div>
      <DynamicVirtualList
        itemCount={300000}
        overscanCount={50}
        estimatedItemSize={70}
        ref={ref}
      >
        {Oi}
      </DynamicVirtualList>
    </div>
  );
}

function Oi(props: { index: number }) {
  const [content, setContent] = React.useState(loremIpsum());

  useEffect(() => {
    if (props.index % 100 == 0) {
      setTimeout(() => {
        setContent(loremIpsum());
      }, Math.ceil(Math.random() * 3) * 1000);
    }
  }, []);

  return (
    <div style={{ padding: 8, borderTop: "2px solid red" }} className="oi">
      <>
        <b>{props.index} - </b> <span>{content}</span>
      </>
    </div>
  );

  // return null;
}
