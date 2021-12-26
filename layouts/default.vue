<style lang="scss" scoped>
.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  opacity: 0.2;
  position: fixed;
  top: 300px;
  z-index: 99;
  left: 1em;
  transition: opacity 0.2s;
  transform: translateX(-100%);
  .paper-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 0px;
    padding: 0px;
    border-top-left-radius: 185px 160px;
    border-top-right-radius: 200px 195px;
    border-bottom-right-radius: 160px 195px;
    border-bottom-left-radius: 185px 190px;
    img {
      width: 26px;
    }
  }
}
.handle:hover {
  opacity: 1;
}
</style>

<template>
  <div>
    <div id="geek-message-box"></div>
    <the-header></the-header>
    <div class="wrapper row margin-none" id="wrapper">
      <div class="sm-12 md-8 col">
        <slot />
        <hr class="padding" />
      </div>
      <the-sidebar></the-sidebar>
    </div>
    <div :style="handleStyle" v-show="handleStyle" class="handle">
      <a href="#top" class="paper-btn" popover-right="返回">
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/ChevronBack.svg"
        />
      </a>
      <a href="#top" class="paper-btn" popover-right="搜索">
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/Search.svg"
        />
      </a>
      <a href="#top" class="paper-btn" popover-right="创建话题">
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/AddCircleOutline.svg"
        />
      </a>
      <div class="paper-btn" popover-right="个人中心">
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/PersonOutline.svg"
        />
      </div>

      <a href="#top" class="paper-btn" popover-right="回到顶部">
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/ArrowUp.svg"
        />
      </a>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script setup>
// your setup script
import { watch, onMounted } from "vue";
import { useRoute } from "#imports";
const route = useRoute();
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0);
  }
);
const handleStyle = ref("");
onMounted(() => {
  setHandle();
  window.onresize = function () {
    setHandle();
  };
});

const setHandle = () => {
  var domWrapper = document.getElementById("wrapper");
  handleStyle.value = `top:${domWrapper.offsetTop + 20}px;left:${
    domWrapper.offsetLeft
  }px`;
};
</script>
