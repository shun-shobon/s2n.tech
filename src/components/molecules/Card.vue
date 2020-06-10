<template>
  <div
    class="card"
    :class="{ 'card--left': !data.right, 'card--right': data.right }"
  >
    <CardImage v-if="data.image" :data="data.image" />
    <CardTitle :data="data.title" />
    <CardContent :data="data.content" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CardData } from "@/utils/types";

import CardTitle from "@/components/atoms/CardTitle.vue";
import CardContent from "@/components/atoms/CardContent.vue";
import CardImage from "@/components/atoms/CardImage.vue";

@Component({
  name: "Card",
  components: { CardTitle, CardContent, CardImage }
})
export default class Card extends Vue {
  @Prop({ required: true })
  data!: CardData;
}
</script>

<style lang="scss">
.card {
  &--left {
    transform: translateX(calc(-50% - 1rem));
    text-align: right;
  }

  &--right {
    transform: translateX(calc(50% + 1rem));
    text-align: left;
  }
}
</style>
