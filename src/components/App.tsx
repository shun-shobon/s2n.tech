import { h, Fragment } from "preact";
import type { FunctionComponent } from "preact";

import Hero from "./Hero";
import Header from "./Header";
import HeaderItem from "./HeaderItem";
import Layout from "./Layout";
import Section from "./Section";
import Footer from "./Footer";

const App: FunctionComponent = () => {
  return (
    <>
      <Hero>SHUN</Hero>
      <Header>
        <HeaderItem link={"#profile"}>Profile</HeaderItem>
        <HeaderItem link={"#skills"}>Skills</HeaderItem>
        <HeaderItem link={"#histories"}>Histories</HeaderItem>
        <HeaderItem link={"#contacts"}>Contacts</HeaderItem>
      </Header>
      <Layout>
        <Section title="Profile" id="profile">
          <div class="h-screen" />
        </Section>
        <Section title="Skills" id="skills">
          <div class="h-screen" />
        </Section>
      </Layout>
      <Footer>Copyright©2021 Shuntaro Nishizawa</Footer>
    </>
  );
};

export default App;
