// @flow

import * as React from "react";
import Link from "next/link";
import { Page, Content } from "../ui/Page";
import Logo from "../ui/Logo";
import { colors } from "../ui/theme";
import WhoWeAre from "../content/WhoWeAre.mdx";
import Technology from "../content/Technology.mdx";

function More(props) {
  let style = {
    display: "inline",
    fontWeight: "900",
    color: colors.textTitle,
    textTransform: "uppercase",
    textAlign: "right",
    fontSize: "10pt"
  };
  let title = (props.title || "learn more") + " →";
  return (
    <div style={style}>
      <Link href={props.href}><a>{title}</a></Link>
    </div>
  );
}

function Header({ children, href, title }) {
  let style = {};
  let styleText = {
    display: "inline",
    fontSize: "28pt",
    textTransform: "uppercase",
    color: colors.textTitle,
    fontWeight: "900"
  };
  return (
    <div style={style}>
      <div style={styleText}>{children}</div>
    </div>
  );
}

function Section({ title, children, href, hrefTitle }) {
  let style = {
    marginBottom: "4em",
    padding: 10
  };
  let styleBody = {
    fontSize: "16pt",
    fontWeight: "500",
    color: colors.textTitle,
    marginTop: 20
  };
  return (
    <div style={style}>
      <Header href={href} title={hrefTitle}>
        {title}
      </Header>
      <Content style={styleBody}>{children}</Content>
      {href && <More href={href} title={hrefTitle} />}
    </div>
  );
}

function Index() {
  return (
    <Page>
      <Logo style={{ margin: "100px auto" }} />
      <Section href="about" title="Who we are" hrefTitle="Learn more about us">
        <WhoWeAre />
      </Section>
      <Section
        href="tech"
        title="Technology"
        hrefTitle="read about details behind our technology choice"
      >
        <Technology />
      </Section>
      <Section
        title="Projects"
        href="projects"
        hrefTitle="See the full list of what we are working on"
      >
        <p>TODO</p>
      </Section>
      <Section title="Team" href="people" hrefTitle="Meet the faces">
        <p>TODO</p>
      </Section>
    </Page>
  );
}

export default Index;
