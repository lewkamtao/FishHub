<style lang="scss" scoped>
.nav-by-detail {
  padding: 20px;
  border-bottom: 1px solid var(--muted-light);
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
@media (max-width: 992px) {
  .nav-by-detail {
    padding: 10px;
    .title {
      font-size: 16px;
    }
    .author-info {
      margin-top: 5px;

      .updateTime {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>

<template>
  <div class="nav-by-detail">
    <div class="title">{{ articleData.title }}</div>
    <div class="author-info">
      <base-geek-avatar
        :isShowInfo="true"
        style="width: 25px; height: 25px; margin-right: 10px"
        :user="articleData.user"
      ></base-geek-avatar>
      <base-geek-nickname
        :isShowInfo="true"
        :user="articleData.user"
      ></base-geek-nickname>
      <div class="updateTime">
        最近回复时间在 {{ articleData.BeautifyUpdateTime }}
      </div>
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
