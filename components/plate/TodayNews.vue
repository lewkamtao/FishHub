<style lang="scss" scoped>
.TodayNews {
  li {
    padding: 10px 0px 10px 15px;
    border-bottom: none;
    overflow: hidden;
    border-bottom: 1px solid var(--primary-shaded-70);
    a {
      padding: 13px 10px 10px 0px;
      color: var(--primary);
    }
    a:hover {
      border-bottom-color: #41403e;
      border-bottom-color: var(--primary);
      border-bottom-left-radius: 15px 3px;
      border-bottom-right-radius: 15px 5px;
      border-bottom-style: solid;
      border-bottom-width: 5px;
      padding-bottom: 0.1rem;
    }
    .badge {
      border-radius: 50px;
      margin-left: 10px;
      font-size: 12px;
      opacity: 0.7;
      font-weight: normal;
    }
  }
}
</style>

<template>
  <div class="paper TodayNews">
    <h5 class="title margin-none">摸鱼日报</h5>
    <ul class="padding-none">
      <li
        v-for="(item, index) in articleList.data"
        :key="'item' + index"
        v-show="index < 10"
        class="article-item"
      >
        <nuxt-link
          :to="`/detail?id=${item.commentNum}`"
          class="margin-none"
          :class="{ isRead: item.isRead }"
          ><span v-text="item.title"></span> </nuxt-link
        ><span class="badge danger" v-text="123"></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();

const articleList = await $api.GET("/article/list", {
  limit: 10,
  page: 2,
});
</script>
