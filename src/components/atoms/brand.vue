<template>
  <div class="brand">
    <h1 class="brand__title">
      SHUN
    </h1>
    <h2 class="brand__subtitle">
      Shuntaro Nishizawa
    </h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Brand"
})
export default class Brand extends Vue {}
</script>

<style lang="scss">
@font-face {
  font-family: "Quantum";
  font-style: normal;
  font-weight: 600;
  src: url("~@/assets/fonts/QuantumSubset.woff2") format("woff2");
}

.brand {
  margin: 0 auto;
  font-family: Quantum, sans-serif;
  color: white;
  &__title {
    text-align: center;
    font-size: 20vmin;
  }
  &__subtitle {
    text-align: center;
    font-size: 6vmin;
  }
}
</style>
