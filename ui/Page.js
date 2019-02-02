// @flow

import * as React from "react";
import { colors } from "./theme";

function Wrapper({ children }) {
  let style = {
    margin: "100px auto",
    width: 600
  };
  return <div style={style}>{children}</div>;
}

function Page(props: { children?: React.Node }) {
  return (
    <div>
      <style global jsx>{`
        html,
        body {
          margin: 0;
          background-color: ${colors.bg};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
      `}</style>
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}

export default Page;
