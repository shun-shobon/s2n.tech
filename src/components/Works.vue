<template>
  <section id="works">
    <h1 class="title">
      <fa-icon icon="project-diagram" />
      Works
    </h1>

    <div class="contents">
      <div class="content content-left">
        <div class="image">
          <img
            src="../assets/images/approvers.jpg"
            alt="限界開発鯖公式サイトのホーム"
          />
          <p>
            <a href="https://approvers.dev/" target="_blank" rel="noopener">
              サイト
            </a>
            <a
              href="https://github.com/approvers/approvers.github.io"
              target="_blank"
              rel="noopener"
            >
              コード
            </a>
          </p>
        </div>
        <h3>限界開発鯖公式サイト</h3>
        <p>限界開発鯖 / Approversの公式サイト</p>
      </div>

      <div class="content content-right">
        <div class="image">
          <img
            src="../assets/images/atcoder-notify.jpg"
            alt="AtCoder Notifyの通知"
          />
          <p>
            <a
              href="https://atcoder-bot.firebaseapp.com/"
              target="_blank"
              rel="noopener"
            >
              サイト
            </a>
            <a
              href="https://github.com/shun-shobon/atcoder-notice-bot"
              target="_blank"
              rel="noopener"
            >
              コード
            </a>
          </p>
        </div>
        <h3>AtCoder Notify</h3>
        <p>AtCoderのコンテスト日程をLINEでお知らせするサービス</p>
      </div>

      <div class="content content-left">
        <div class="image">
          <img
            src="../assets/images/twogate-devcamp.jpg"
            alt="TwoGate Dev Camp 2020の公式サイト"
          />
          <p>
            <a
              href="https://devcamp2020.twogate.com/"
              target="_blank"
              rel="noopener"
            >
              サイト
            </a>
          </p>
        </div>
        <h3>TwoGate Dev Camp 2020</h3>
        <p>3日間のオンラインハッカソン</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Works"
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
#works {
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
    .image {
      position: relative;
      img {
        height: 15rem;
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 15rem;
        width: 100%;
        transition: all 0.5s ease;
        opacity: 0;
        &:hover {
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
        }
        a {
          position: relative;
          display: inline-block;
          margin: 0 0.5rem;
          padding: 0.25rem 0.5rem;
          line-height: initial;
          text-decoration: none;
          color: white;
          background-color: black;
          border-radius: 1rem;
        }
      }
    }
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
}
</style>
