<template>
  <section class="contact">
    <SectionTitle :data="sectionTitle" />
    <CardList :data="cardList" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SectionTitleData, CardListData } from "@/utils/types";

import SectionTitle from "@/components/atoms/SectionTitle.vue";
import CardList from "@/components/organisms/CardList.vue";

@Component({
  name: "Contact",
  components: { SectionTitle, CardList }
})
export default class Contact extends Vue {
  sectionTitle: SectionTitleData = {
    text: "Contact",
    icon: ["fas", "phone"]
  };
  cardList: CardListData = {
    firstDirection: "right",
    lineColor: "#fff",
    cards: [
      {
        title: {
          text: "Twitter",
          icon: ["fab", "twitter"]
        },
        content: {
          texts: "@programmer_shun"
        }
      },
      {
        title: {
          text: "GitHub",
          icon: ["fab", "github"]
        },
        content: {
          texts: "@shun-shobon"
        }
      },
      {
        title: {
          text: "Email",
          icon: ["fas", "envelope"]
        },
        content: {
          texts: "shun.shobon@gmail.com"
        }
      }
    ]
  };
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100vw;
  color: white;
  background-color: black;
}
</style>
