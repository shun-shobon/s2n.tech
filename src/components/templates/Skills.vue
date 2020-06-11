<template>
  <section class="skills">
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
  name: "skills",
  components: { SectionTitle, CardList }
})
export default class Skills extends Vue {
  sectionTitle: SectionTitleData = {
    text: "Skills",
    icon: ["fas", "code"]
  };
  cardList: CardListData = {
    firstDirection: "right",
    cards: [
      {
        title: {
          text: "Frontend",
          icon: ["fas", "atom"]
        },
        content: {
          texts: [
            "HTML5 / Pug /",
            "CSS / SCSS / PostCSS /",
            "JavaScript / TypeScript /",
            "Babel / Webpack / Gulp.js /",
            "Vue.js / Nuxt.js /",
            "React / Next.js / Gatsby /",
            "Angular / Ionic"
          ]
        }
      },
      {
        title: {
          text: "Backend",
          icon: ["fas", "server"]
        },
        content: {
          texts: [
            "Python / Node.js / Haskell /",
            "MySQL / Squelize / SQLAlchemy"
          ]
        }
      },
      {
        title: {
          text: "Infrastructure",
          icon: ["fas", "cubes"]
        },
        content: {
          texts: [
            "Linux / CentOS / Alpine",
            "GCP / Firebase / Heroku",
            "Docker / Docker Compose"
          ]
        }
      },
      {
        title: {
          text: "Hacking",
          icon: ["fas", "user-secret"]
        },
        content: {
          texts: [
            "KaliLinux / Tails /",
            "Web / SQLInjection /",
            "Crypto / PkCrack"
          ]
        }
      },
      {
        title: {
          text: "Misc",
          icon: ["fas", "archive"]
        },
        content: {
          texts: [
            "Git / GitHub /",
            "GitHub Actions / Travis CI / Circle CI /",
            "ESLint / Prettier / CommitLint / StyleLint /",
            "Vim / NeoVim / VSCode / JetBrains"
          ]
        }
      }
    ]
  };
}
</script>

<style scoped>
.skills {
  width: 100vw;
  color: white;
  background-color: black;
}
</style>
