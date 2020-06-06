<template>
  <div id="app">
    <Title />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Title from "@/components/Title.vue";

@Component({
  name: "App",
  components: { Title }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~destyle.css";

body {
  background-color: black;
}
</style>
