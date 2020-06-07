<template>
  <section id="contact">
    <h1 class="title">
      <fa-icon icon="phone" />
      Contact
    </h1>

    <div class="contents">
      <div class="content content-right">
        <h3>
          <fa-icon :icon="['fab', 'twitter']" />
          Twitter
        </h3>
        <p>
          <a
            href="https://twitter.com/programmer_shun"
            target="_blank"
            rel="noopener"
          >
            @programmer_shun
          </a>
        </p>
      </div>

      <div class="content content-left">
        <h3>
          <fa-icon :icon="['fab', 'github']" />
          GitHub
        </h3>
        <p>
          <a
            href="https://github.com/shun-shobon"
            target="_blank"
            rel="noopener"
          >
            @shun-shobon
          </a>
        </p>
      </div>

      <div class="content content-right">
        <h3>
          <fa-icon icon="envelope" />
          Email
        </h3>
        <p>
          <a href="mailto:shun.shobon@gmail.com" target="_blank" rel="noopener">
            shun.shobon@gmail.com
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Contact"
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
#contact {
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
