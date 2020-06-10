<template>
  <a class="badge" :href="data.href" target="_blank" rel="noopener">
    {{ data.text }}
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { BadgeData } from "@/utils/types";

@Component({
  name: "Badge"
})
export default class Badge extends Vue {
  @Prop({ required: true })
  data!: BadgeData;
}
</script>

<style lang="scss">
.badge {
  position: relative;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 1rem;
}
</style>
