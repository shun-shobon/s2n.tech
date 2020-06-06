<template>
  <div id="app">
    <Title />
    <AboutMe />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Title from "@/components/Title.vue";
import AboutMe from "@/components/AboutMe.vue";

@Component({
  name: "App",
  components: { Title, AboutMe }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~destyle.css";

body {
  background-color: black;
}
</style>
