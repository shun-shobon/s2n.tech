<template>
  <div class="card-list">
    <template v-for="(card, index) in data.cards">
      <Card
        :key="index"
        :data="{ ...card, direction: decideDirection(index) }"
      />
    </template>
    <div class="card-list__line" :style="{ backgroundColor: data.lineColor }" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CardListData } from "@/utils/types";

import Card from "@/components/molecules/Card.vue";

@Component({
  name: "CardList",
  components: { Card }
})
export default class CardList extends Vue {
  @Prop({ required: true })
  data!: CardListData;

  decideDirection(index: number): "left" | "right" {
    const isEven = index % 2;
    if (this.data.firstDirection === "left") {
      return isEven ? "right" : "left";
    }
    return isEven ? "left" : "right";
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/media-queries";

.card-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;

  &__line {
    display: none;
    position: absolute;
    height: 100%;
    width: 3px;
    border-radius: 1.5px;
    @include mq() {
      display: block;
    }
  }
}
</style>
