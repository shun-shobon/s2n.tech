<template>
  <h3 class="card__title">
    <fa-icon class="card__title__icon" v-if="data.icon" :icon="data.icon" />
    <span class="card__title__text">{{ data.text }}</span>
  </h3>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CardTitleData } from "@/utils/types";

@Component({
  name: "CardTitle"
})
export default class CardTitle extends Vue {
  @Prop({ required: true })
  data!: CardTitleData;
}
</script>

<style lang="scss">
.card__title {
  font-size: 1.3rem;
  font-weight: 600;

  &__icon {
    margin-right: 0.5rem;
  }
}
</style>
