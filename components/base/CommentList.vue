<style lang="scss" scoped>
.comment-list {
  margin-top: 30px;
}
.comment-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 50px;
  border-bottom: 1px solid var(--muted-light);
}
</style>

<template>
  <div class="paper padding-none comment-list">
    <div class="comment-nav">
      <div class="comment-num">{{ commentList.total }} 条回复</div>
      <div class="post-btn badge">我要发言</div>
    </div>
    <base-comment-cart
      v-for="(item, index) in commentList.data"
      :key="index"
      :comment="item"
    ></base-comment-cart>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();

const commentList = await $api.GET("/comment/list", {
  pageNum: 1,
  pageSize: 20,
});
</script>
