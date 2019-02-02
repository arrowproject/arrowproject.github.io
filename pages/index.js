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
      <Link href={props.href}>
        <a>{title}</a>
      </Link>
    </div>
  );
}

function Header({ className, style, children, href, title }) {
  style = {
    fontSize: "28pt",
    textTransform: "uppercase",
    color: colors.textTitle,
    fontWeight: "900",
    ...style
  };
  return (
    <div className={className} style={style}>
      {children}
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
    <div className="section" style={style}>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
        }

        .header {
        }

        @media (min-width: 800px) {
          .section {
            flex-direction: row;
          }
          .header {
            display: flex;
            flex-direction: row-reverse;
            flex-shrink: 0;
            width: 300px;
            padding: 15px 25px;
          }
        }
      `}</style>
      <div className="header">
        <Header>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </Header>
      </div>
      <div>
        <Content style={styleBody}>{children}</Content>
        {href && <More href={href} title={hrefTitle} />}
      </div>
    </div>
  );
}

function ProjectInfo({ title, children }) {
  let style = {
    marginBottom: "1em"
  };
  let styleTitle = {
    marginBottom: "0.5em",
    fontSize: "18pt",
    textTransform: "uppercase",
    color: colors.textTitle,
    fontWeight: "900"
  };
  let styleBody = {
    fontSize: "14pt",
    color: colors.textTitle,
    fontWeight: "500"
  };
  return (
    <div style={style}>
      <div style={styleTitle}>{title}</div>
      <div style={styleBody}>{children}</div>
    </div>
  );
}

function Projects() {
  let style = {
    marginBottom: "2em"
  };
  return (
    <div style={style}>
      <ProjectInfo title="fastpack">
        fastpack is a javascript bundler designed for speed. It's implemented in
        native ReasonML code.
      </ProjectInfo>
    </div>
  );
}

function Index() {
  return (
    <Page>
      <Logo style={{ margin: "100px auto" }} />
      <Section href="about" title="About Us" hrefTitle="Learn more about us">
        <WhoWeAre />
      </Section>
      <Section href="tech" title="Technology" hrefTitle="Read more about this">
        <Technology />
      </Section>
      <Section
        title="Projects"
        href="projects"
        hrefTitle="See the full list of projects"
      >
        <Projects />
      </Section>
      <Section
        title="People"
        href="people"
        hrefTitle="Meet the faces behind arrow"
      >
      </Section>
    </Page>
  );
}

export default Index;
