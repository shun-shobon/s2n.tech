import { h, Fragment } from "preact";
import type { FunctionComponent } from "preact";

import Hero from "./Hero";
import Header from "./Header";
import HeaderItem from "./HeaderItem";
import Layout from "./Layout";

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
        <div class="h-screen" />
        <div class="h-screen" />
      </Layout>
    </>
  );
};

export default App;
