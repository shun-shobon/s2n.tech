<template>
  <div id="app">
    <Title />
    <Partition top-color="#000" bottom-color="#fff" up-direction="right" />
    <AboutMe />
    <Partition top-color="#fff" bottom-color="#000" up-direction="left" />
    <Skills />
    <Partition top-color="#000" bottom-color="#fff" up-direction="left" />
    <Works />
    <Partition top-color="#fff" bottom-color="#000" up-direction="right" />
    <Contact />
    <Partition top-color="#000" bottom-color="#fff" up-direction="left" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Title from "@/components/Title.vue";
import AboutMe from "@/components/templates/AboutMe.vue";
import Skills from "@/components/templates/Skills.vue";
import Works from "@/components/templates/Works.vue";
import Contact from "@/components/templates/Contact.vue";
import Footer from "@/components/Footer.vue";

import Partition from "@/components/atoms/Partition.vue";

@Component({
  name: "App",
  components: {
    Title,
    AboutMe,
    Skills,
    Works,
    Contact,
    Footer,
    Partition
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~destyle.css";
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;500&display=swap");

body {
  background-color: black;
  font-family: "M PLUS 1p", sans-serif;
  font-weight: 300;
}
</style>
