<template>
  <section id="skills">
    <h1 class="title">
      <fa-icon icon="code" />
      Skills
    </h1>

    <div class="contents">
      <div class="content content-right">
        <h3>
          <fa-icon icon="atom" />
          Frontend
        </h3>
        <p>
          HTML5 / Pug /<br />
          CSS / SCSS / PostCSS /<br />
          JavaScript / TypeScript /<br />
          Babel / Webpack / Gulp.js /<br />
          Vue.js / Nuxt.js /<br />
          React / Next.js / Gatsby /<br />
          Angular / Ionic
        </p>
      </div>

      <div class="content content-left">
        <h3>
          <fa-icon icon="server" />
          Backend
        </h3>
        <p>
          Python / Haskell / Node.js /<br />
          MySQL / Sequelize / SQLAlchemy
        </p>
      </div>

      <div class="content content-right">
        <h3>
          <fa-icon icon="cubes" />
          Infrastructure
        </h3>
        <p>
          Linux / CentOS / Alpine /<br />
          GCP / Firebase / Heroku /<br />
          Docker / Docker Compose
        </p>
      </div>

      <div class="content content-left">
        <h3>
          <fa-icon icon="user-secret" />
          Hacking
        </h3>
        <p>
          KaliLinux / Tails /<br />
          Web / SQLInjection / <br />
          Crypto
        </p>
      </div>

      <div class="content content-right">
        <h3>
          <fa-icon icon="archive" />
          Misc
        </h3>
        <p>
          Git / GitHub /<br />
          GitHub Actions / Travis CI / Circle CI /<br />
          ESLint / Prettier / CommitLint / StyleLint /<br />
          Vim / NeoVim / VSCode / JetBrains
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Skills"
})
export default class Skills extends Vue {}
</script>

<style lang="scss" scoped>
#skills {
  width: 100vw;
  color: white;
  padding: 3rem 0;
  .title {
    text-align: center;
    font-size: 3rem;
  }
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .content {
    h3 {
      font-size: 1.3rem;
    }
  }
  .content-left {
    transform: translateX(calc(-50% - 1rem));
    text-align: right;
  }
  .content-right {
    transform: translateX(calc(50% + 1rem));
    text-align: left;
  }
}
</style>
