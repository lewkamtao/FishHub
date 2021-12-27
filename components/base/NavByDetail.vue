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
    .author {
      margin-left: 5px;
      font-size: 14px;
    }
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
    <div class="title">{{ opt.title }}</div>
    <div class="author-info">
      <base-geek-img
        style="width: 25px"
        :src="`https://unsplash.it/100`"
      ></base-geek-img>

      <div class="author">{{ opt.author }}</div>
      <div class="updateTime">刚刚</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import util from "../../util";
const props = defineProps({
  opt: {
    type: Object,
    default: {},
  },
});


</script>
