<style lang="scss" scoped>
.nav-by-detail {
  padding: 20px;
  .title {
    font-size: 20px;
  }
  .author-info {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .updateTime {
      color: #999;
      margin-left: 20px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="nav-by-detail">
    <div class="title">{{ articleData.title }}</div>
    <div class="author-info">
      <base-geek-avatar :isShowInfo="true"
        style="width: 25px; height: 25px; margin-right: 10px"
        :user="articleData.user"
      ></base-geek-avatar>
      <base-geek-nickname
        :isShowInfo="true"
        :user="articleData.user"
      ></base-geek-nickname>
      <div class="updateTime">{{ articleData.BeautifyUpdateTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  articleData: {
    type: Object,
    default: {},
  },
});
</script>
