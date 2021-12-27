<style lang="scss" scoped>
.wrapper {
  padding-top: 70px;
  opacity: 0;
  transition: opacity 0.5s;
}
</style>

<template>
  <div>
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
import { useRoute } from "#imports";
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
