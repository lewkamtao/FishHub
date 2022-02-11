<style lang="scss" scoped>
.wrapper {
  padding-top: 70px;
  opacity: 0;
  transition: opacity 0.5s;
}

@media (max-width: 992px) {
  .wrapper {
    padding-top: 50px;
  }
}
</style>

<template>
  <div class="geek">
    <Html>
      <Head>
        <Title>摸鱼办</Title>
        <Meta
          name="description"
          :content="`即使生活一地鸡毛，也要偶尔抬头仰望星空。`"
        />
        <Link
          data-n-head="ssr"
          rel="icon"
          type="image/x-icon"
          href="https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/public/icon/fish.ico"
        />
      </Head>
    </Html>
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
  <base-geek-avatar-edit
    v-if="route.path == '/user/edit'"
  ></base-geek-avatar-edit>
  <base-modal></base-modal>
</template>

<script setup>
// your setup script
import { watch, onMounted, ref } from "vue";
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



  Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});
});
</script>
