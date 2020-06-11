<template>
  <div id="app">
    <Title />
    <AboutMe />
    <Skills />
    <Works />
    <Contact />
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

@Component({
  name: "App",
  components: { Title, AboutMe, Skills, Works, Contact, Footer }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~destyle.css";

body {
  background-color: black;
}
</style>
