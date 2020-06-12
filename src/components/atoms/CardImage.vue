<template>
  <div class="card-list__card__image">
    <img
      class="card-list__card__image__image"
      :src="data.src"
      :alt="data.alt"
    />
    <div class="card-list__card__image__mask" v-if="data.badges">
      <p class="card-list__card__image__mask__badge-wrapper">
        <template v-for="(badge, index) in data.badges">
          <Badge :key="index" :data="badge" />
        </template>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CardImageData } from "@/utils/types";

import Badge from "@/components/atoms/Badge.vue";

@Component({
  name: "CardImage",
  components: { Badge }
})
export default class CardImage extends Vue {
  @Prop({ required: true })
  data!: CardImageData;
}
</script>

<style lang="scss">
.card-list__card__image {
  position: relative;
  width: 20rem;
  &__image {
    width: 100%;
  }

  &__mask {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 1;
    }

    &__badge-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
