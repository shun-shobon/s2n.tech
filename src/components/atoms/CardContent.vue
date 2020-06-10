<template>
  <div class="card-list__card__content">
    <template v-if="typeof data.texts === 'string'">
      {{ data.texts }}
    </template>
    <template v-else v-for="(text, index) in data.texts">
      <p :key="index">{{ text }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CardContentData } from "@/utils/types";

@Component({
  name: "CardContent"
})
export default class CardContent extends Vue {
  @Prop({ required: true })
  data!: CardContentData;
}
</script>
