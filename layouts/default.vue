<style lang="scss" scoped>
.wrapper {
  padding-top: 70px;
  opacity: 0;
  transition: opacity 0.5s;
}

@media (max-width: 992px) {
  .geek::before {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "移动端尚未适配，请移步PC端。";
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
  .geek {
    header,
    div {
      opacity: 0;
    }
  }
}
</style>

<template>
  <div class="geek">
    <div id="geek-message-box"></div>
    <the-header></the-header>
    <base-geek-handle></base-geek-handle>
    <div class="wrapper row margin-none" id="geekWrapper">
      <div class="sm-12 md-8 col padding-bottom-none">
        <slot />
        <the-footer></the-footer>
      </div>
      <the-sidebar></the-sidebar>
    </div>
  </div>
</template>

<script setup>
// your setup script
import { watch, onMounted } from "vue";
import util from "~~/util";
const route = useRoute();
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0);
  }
);
onMounted(() => {
  util.initDomStyle();
  window.onresize = function () {
    util.initDomStyle();
  };
});
</script>
