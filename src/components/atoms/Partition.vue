<template>
  <div class="up-right-partition" :style="{ ...borderColors }" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Partition"
})
export default class Partition extends Vue {
  @Prop({ required: true })
  topColor!: string;

  @Prop({ required: true })
  bottomColor!: string;

  @Prop({ required: true })
  upDirection!: "left" | "right";

  get borderColors() {
    return {
      borderTopColor: this.topColor,
      borderLeftColor:
        this.upDirection === "left" ? this.bottomColor : this.topColor,
      borderBottomColor: this.bottomColor,
      borderRightColor:
        this.upDirection === "left" ? this.topColor : this.bottomColor
    };
  }
}
</script>

<style lang="scss">
.up-right-partition {
  border-top: 3rem solid;
  border-right: 50vw solid;
  border-bottom: 3rem solid;
  border-left: 50vw solid;
}
</style>
