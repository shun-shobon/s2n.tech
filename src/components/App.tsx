import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { gql, request } from "graphql-request";
import type { FunctionComponent } from "preact";

import { GQL_API_URL } from "../config";
import type { ProfileQuery } from "../generated/graphqlQueries";

import Hero from "./Hero";
import Header from "./Header";
import HeaderItem from "./HeaderItem";
import Layout from "./Layout";
import Section from "./Section";
import SubSection from "./SubSection";
import SkillProgress from "./SkillProgress";
import Footer from "./Footer";

const query = gql`
  query Profile {
    basic {
      aka
      birthday
      school
      department
    }
    skills {
      name
      skills {
        name
      }
    }
    histories {
      date
      title
      links {
        name
        url
      }
    }
    contacts {
      name
      uri
    }
  }
`;

const App: FunctionComponent = () => {
  const [data, setData] = useState<ProfileQuery | null>(null);

  useEffect(() => {
    request<ProfileQuery>(GQL_API_URL, query)
      .then(setData)
      .catch(console.error);
  }, [setData]);

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
          <SubSection title="Frontend">
            <SkillProgress name="TypeScript" completed={95} />
            <SkillProgress name="HTML5 / CSS3" completed={80} />
            <SkillProgress name="Google Cloud Platform" completed={30} />
          </SubSection>
          <SubSection title="Birthday">
            これはテストです。これはテストです。これはテストです。これはテストです。
          </SubSection>
          <SubSection title="Birthday">
            これはテストです。これはテストです。これはテストです。これはテストです。
          </SubSection>
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
