<template>
  <section id="about_me">
    <h1 class="title">
      <fa-icon icon="address-card" />
      About Me
    </h1>

    <div class="contents">
      <div class="content content-right">
        <h3>
          <fa-icon icon="birthday-cake" />
          誕生日
        </h3>
        <p>2003/04/22</p>
      </div>

      <div class="content content-left">
        <h3>
          <fa-icon icon="school" />
          学校
        </h3>
        <p>国立長野工業高等専門学校</p>
      </div>

      <div class="content content-right">
        <h3>
          <fa-icon icon="graduation-cap" />
          学科
        </h3>
        <p>電子情報学科</p>
      </div>

      <div class="content content-left">
        <h3>
          <fa-icon icon="comment-dots" />
          部活
        </h3>
        <p>情報技術研究部</p>
      </div>
    </div>

    <div class="detail">
      <p>
        何処にでもいる高専2年生です。プログラミングとハッキングが趣味で、Webアプリケーション制作やAtCoder、CTFなどをやっています。時々BlenderやAdobeを使用して映像作品などを作っています。
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "AboutMe"
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss" scoped>
#about_me {
  width: 100vw;
  background-color: white;
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
      font-weight: 600;
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

  .detail {
    width: 80%;
    margin: 1rem auto 0;
    p {
      text-align: center;
    }
  }
}
</style>
