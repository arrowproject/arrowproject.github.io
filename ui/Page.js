// @flow

import * as React from "react";
import { colors } from "./theme";
import Head from "next/head";
import Logo from "./Logo";
import Link from "next/link";

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

function Page(props: { children?: React.Node }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Arrow</title>
      </Head>
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          background-color: ${colors.bg};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        .content p {
          color: ${colors.textTitle};
          font-size: 14pt;
          font-weight: 500;
          margin-bottom: 2em;
        }
        .content h2,
        .content h3,
        .content h4,
        .content h5 {
          font-weight: 900;
          color: ${colors.textTitle};
          text-transform: uppercase;
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
            width: 800px;
            padding: 0em;
          }
        }
      `}</style>
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}

function Content(props: { style?: Object, children?: React.Node }) {
  return (
    <div className="content" style={props.style}>
      {props.children}
    </div>
  );
}

function ContentPage(props: { style?: Object, children?: React.Node }) {
  return (
    <Page>
      <div className="header">
        <style jsx>{`
          .header {
            margin-bottom: 5em;
          }
        `}</style>
        <Link href="/">
          <a>
            <Logo width={120} />
          </a>
        </Link>
      </div>
      <Content>{props.children}</Content>
      <div className="back-container">
        <style jsx>{`
          .back-container {
						margin-top: 3em;
					}
          .back {
            text-transform: uppercase;
						color: ${colors.textTitle};
						font-weight: 900;
						font-size: 12pt;
          }
          .back:hover {
            text-transform: uppercase;
						background: ${colors.textTitle};
						color: ${colors.bg};
						font-weight: 900;
						font-size: 12pt;
          }
        `}</style>
        <Link href="/">
          <a className="back">
            ← Go back
          </a>
        </Link>
      </div>
    </Page>
  );
}

export { Page, ContentPage, Content };
