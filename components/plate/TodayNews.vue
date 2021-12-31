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
      text-decoration: underline;
    }

    .badge {
      border-radius: 50px;
      margin-left: 10px;
      font-size: 12px;
      height: 20px;
      line-height: 17px;
      padding: 0px 5px;
      box-sizing: border-box;
      font-weight: normal;
    }
  }
}
</style>

<template>
  <div class="paper TodayNews" id="TodayNewsPlate">
    <h5 class="title margin-none">摸鱼日报</h5>
    <ul class="padding-none">
      <li
        v-for="(item, index) in articleList.data"
        :key="'item' + index"
        v-show="index < 10"
        class="article-item"
      >
        <nuxt-link
          :to="`/detail?id=${item._id}`"
          class="margin-none"
          :class="{ isRead: item.isRead }"
          ><span v-text="item.title"></span> </nuxt-link
        ><span class="badge secondary" v-text="item.comment_num || 0"></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();

const articleList = await $api.GET("/article/list", {
  pageSize: 10000,
  pageNum: 1,
});
</script>
