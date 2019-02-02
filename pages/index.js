// @flow

import * as React from "react";
import Page from "../ui/Page";
import Logo from "../ui/Logo";
import { colors } from "../ui/theme";

function Header({ children }) {
  let style = {
    color: colors.textTitle,
    textTransform: "uppercase",
    fontSize: "18pt",
    fontWeight: "900"
  };
  return <div style={style}>{children}</div>;
}

function Section({ title, children }) {
  let style = {};
  let styleBody = {
    fontSize: "15pt",
    fontWeight: "400",
    marginTop: 20
  };
  return (
    <div style={style}>
      <Header>{title}</Header>
      <div style={styleBody}>{children}</div>
    </div>
  );
}

const whatWeDo = `

`;

function Index() {
  return (
    <Page>
      <Logo style={{ margin: "100px auto" }} />
      <Section title="Who we are"></Section>
      <Section title="Technology"></Section>
      <Section title="Projects"></Section>
      <Section title="Team"></Section>
    </Page>
  );
}

export default Index;
