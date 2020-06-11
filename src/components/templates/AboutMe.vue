<template>
  <section class="about-me">
    <SectionTitle :data="sectionTitle" />
    <CardList :data="cardList" />

    <div class="about-me__detail">
      <p>
        何処にでもいる高専2年生です。プログラミングとハッキングが趣味で、Webアプリケーション制作やAtCoder、CTFなどをやっています。時々BlenderやAdobeを使用して映像作品などを作っています。
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SectionTitleData, CardListData } from "@/utils/types";

import SectionTitle from "@/components/atoms/SectionTitle.vue";
import CardList from "@/components/organisms/CardList.vue";

@Component({
  name: "AboutMe",
  components: { SectionTitle, CardList }
})
export default class AboutMe extends Vue {
  sectionTitle: SectionTitleData = {
    text: "About Me",
    icon: ["fas", "address-card"]
  };
  cardList: CardListData = {
    cards: [
      {
        title: {
          icon: ["fas", "birthday-cake"],
          text: "誕生日"
        },
        content: {
          texts: "2003/04/22"
        }
      },
      {
        title: {
          icon: ["fas", "school"],
          text: "学校"
        },
        content: {
          texts: "国立長野工業高等専門学校"
        }
      },
      {
        title: {
          icon: ["fas", "graduation-cap"],
          text: "学科"
        },
        content: {
          texts: "電子情報学科"
        }
      },
      {
        title: {
          icon: ["fas", "comment-dots"],
          text: "部活"
        },
        content: {
          texts: "情報技術研究部"
        }
      }
    ],
    firstDirection: "right"
  };
}
</script>

<style lang="scss" scoped>
.about-me {
  width: 100vw;
  color: black;
  background-color: white;

  &__detail {
    width: 80%;
    margin: 1rem auto 0;
    p {
      text-align: center;
    }
  }
}
</style>
