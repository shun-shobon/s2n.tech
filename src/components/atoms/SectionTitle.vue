<template>
  <h1 class="section-title">
    <fa-icon class="section-title__icon" :icon="data.icon" />
    <span class="section-title__text">{{ data.text }}</span>
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SectionTitleData } from "@/utils/types";

@Component({
  name: "SectionTitle"
})
export default class SectionTitle extends Vue {
  @Prop({ required: true })
  data!: SectionTitleData;
}
</script>

<style lang="scss">
.section-title {
  text-align: center;
  font-size: 3rem;

  &__text {
    margin-left: 1rem;
  }
}
</style>
