<template>
  <header class="header">
    <Brand />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Brand from "@/components/atoms/brand.vue";

@Component({
  name: "Header",
  components: { Brand }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
