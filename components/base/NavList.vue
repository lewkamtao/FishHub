<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #c1c0bd;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(10px);
  background: var(--secondary-background);
  z-index: 99;
  .nav-list {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    white-space: nowrap;
    padding: 7px;

    a {
      padding: 5px;
      margin: 5px;
      font-weight: normal;
      color: var(--muted-light-10);
      background: none;
    }
    a:hover {
      background: var(--muted-light);
      color: var(--muted-light-50);
    }
    .active {
      background: var(--secondary) !important;
      color: var(--white) !important;
    }
  }
  .cover-right {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100px;
    height: 100%;
    background: var(--primary-shaded-70);
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      var(--primary-shaded-70)
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      var(--primary-shaded-70)
    );
    background: -o-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      var(--primary-shaded-70)
    );
    background: -ms-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      var(--primary-shaded-70)
    );
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      var(--primary-shaded-70)
    );
  }
}

/* 使用伪类选择器 ::-webkit-scrollbar ,兼容chrome和safari浏览器 */
.hid-scrollbar::-webkit-scrollbar {
  display: none;
}
/*兼容火狐*/
.hid-scrollbar {
  scrollbar-width: none;
}
/* 兼容IE10+ */
.hid-scrollbar {
  -ms-overflow-style: none;
}
</style>

<template>
  <div @click="addAlert('success')" class="nav">
    <div @click.stop="addAlert('danger')" class="cover-right"></div>
    <div class="nav-list hid-scrollbar">
      <nuxt-link
        :to="''"
        v-for="(item, index) in tagsList.data"
        :key="`tags${index}`"
        class="badge"
        :class="{ active: index == 0 }"
      >
        <span v-text="item.title"></span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();
import util from "@/util/index.js";

const tagsList = await $api.GET("/tags/list", {
  limit: 10,
  page: 2,
});

const addAlert = (type) => {
  util.addAlert({
    type: type,
    text: "发送成功 sad成功！",
  });
};
</script>
