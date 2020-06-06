<template>
  <div id="app">
    <Title />
    <AboutMe />
    <Skills />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Title from "@/components/Title.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";

@Component({
  name: "App",
  components: { Title, AboutMe, Skills }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~destyle.css";

body {
  background-color: black;
}
</style>
