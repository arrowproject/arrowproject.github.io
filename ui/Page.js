// @flow

import * as React from "react";
import { colors } from "./theme";
import Head from "next/head";

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

function Page(props: { children?: React.Node }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style global jsx>{`
        html,
        body {
          margin: 0;
          background-color: ${colors.bg};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        .content p {
          margin-bottom: 2em;
        }

        a {
          color: ${colors.textTitle};
          text-decoration: none;
        }
        a:hover {
          background: ${colors.textTitle};
          color: ${colors.bg};
          text-decoration: none;
        }
        .wrapper {
          margin: 100px auto;
					padding: 1em;
        }
        @media (min-width: 800px) {
          .wrapper {
            width: 600px;
						padding: 0em;
          }
        }
      `}</style>
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}

export default Page;
