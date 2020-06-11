<template>
  <section class="works">
    <SectionTitle :data="sectionTitle" />
    <CardList :data="cardList" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SectionTitleData, CardListData } from "@/utils/types";

import SectionTitle from "@/components/atoms/SectionTitle.vue";
import CardList from "@/components/organisms/CardList.vue";

import ApproversImage from "@/assets/images/approvers.jpg";
import AtCoderNotifyImage from "@/assets/images/atcoder-notify.jpg";
import TwogateDevcampImage from "@/assets/images/twogate-devcamp.jpg";

@Component({
  name: "Works",
  components: { SectionTitle, CardList }
})
export default class Works extends Vue {
  sectionTitle: SectionTitleData = {
    text: "Works",
    icon: ["fas", "project-diagram"]
  };
  cardList: CardListData = {
    firstDirection: "left",
    cards: [
      {
        title: {
          text: "限界開発鯖公式サイト"
        },
        content: {
          texts: "限界開発鯖 / Approversの公式サイト"
        },
        image: {
          src: ApproversImage,
          badges: [
            {
              href: "https://approvers.dev/",
              text: "Site"
            },
            {
              href: "https://github.com/approvers/approvers.github.io",
              text: "Code"
            }
          ]
        }
      },
      {
        title: {
          text: "AtCoder Notify"
        },
        content: {
          texts: "AtCoderのコンテスト日程をLINEでお知らせするサービス"
        },
        image: {
          src: AtCoderNotifyImage,
          badges: [
            {
              href: "https://atcoder-bot.firebaseapp.com/",
              text: "Site"
            },
            {
              href: "https://github.com/shun-shobon/atcoder-notice-bot",
              text: "Code"
            }
          ]
        }
      },
      {
        title: {
          text: "TwoGate Dev Camp 2020"
        },
        content: {
          texts: "3日間のオンラインハッカソン"
        },
        image: {
          src: TwogateDevcampImage,
          badges: [
            {
              href: "https://devcamp2020.twogate.com/",
              text: "Site"
            }
          ]
        }
      }
    ]
  };
}
</script>

<style lang="scss" scoped>
.works {
  width: 100vw;
  color: black;
  background-color: white;
}
</style>
