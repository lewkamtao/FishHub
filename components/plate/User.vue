<style lang="scss" scoped>
.user {
  .login-btn {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 50px;
    margin: 0 auto;
    color: #fff;
    background: #754b9d;
    border: 1px #eee solid;
    font-size: 14px;
    background: -moz-linear-gradient(top, #973cb2, #754b9d);
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(#973cb2),
      to(#754b9d)
    );
    img {
      width: 24px;
      filter: invert(100%);
      margin-right: 5px;
    }
  }
  p {
    color: #999;
    font-size: 14px;
    span {
      color: var(--primary);
      margin: 0px 3px;
    }
  }
}
</style>

<template>
  <div class="paper user" id="userPlate">
    <!-- <button
      href="https://github.com/rhyneav/papercss"
      target="_blank"
      class="paper-btn login-btn"
    >
      <img
        class="icon no-responsive no-border"
        src="@sicons/ionicons5/LogoGithub.svg"
      />
      使用 Github 登录
    </button> -->
    <div class="row flex-spaces child-borders">
      <nuxt-link to="/login" class="paper-btn margin" >注册登录</nuxt-link>
    </div>

    <p>
      摸鱼办是一个<span>分享生活</span>和<span>释放压力</span>的地方，大胆表达💛可以让你释放压力。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
