<template>
  <footer class="footer">
    <p class="footer__copyright">
      Copyright©2020 Shuntaro Nishizawa
    </p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Footer"
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  background-color: white;
  padding-bottom: 1rem;
  &__copyright {
    text-align: center;
    color: dimgray;
  }
}
</style>
