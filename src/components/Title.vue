<template>
  <div id="title">
    <div class="title">
      <h1>SHUN</h1>
      <h2>Shuntaro Nishizawa</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Title"
})
export default class Title extends Vue {}
</script>

<style lang="scss" scoped>
#title {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    color: white;
    h1,
    h2 {
      text-align: center;
    }
    h1 {
      font-size: 10rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
}
</style>
