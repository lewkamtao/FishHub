<style lang="scss" scoped>
.comment-child {
  padding-left: 75px;
}
.comment-box:hover {
  background: var(--primary-shaded-70);
  cursor: pointer;
}
.comment-box {
  padding: 20px;
  display: flex;
  border-bottom: 1px solid var(--muted-light);
  .content {
    width: calc(100% - 80px);
    margin-left: 10px;
  }
  .header {
    display: flex;
    align-items: center;
    .author {
      color: var(--primary);
    }

    .metadata {
      margin-left: 10px;
      color: var(--muted-light-10);
      font-size: 14px;
    }
  }
  .text {
    margin-top: 5px;
    color: #888;
  }
}
</style>

<template>
  <div class="comment-wrapper">
    <div class="comment">
      <div class="comment-box comment-parent">
        <base-geek-img
          style="width: 45px; height: 45px"
          :src="comment.expand.head_img"
        >
        </base-geek-img>
        <div class="content">
          <div class="header">
            <a class="author" target="_blank">
              {{ comment.nickname }}
            </a>

            <div class="metadata">
              <span class="date">
                {{ util.getBeautifyTime(`2021-12-21 11:06:51`) }}</span
              >
            </div>
          </div>
          <div class="text">
            {{ comment.content }}
          </div>
        </div>
        <base-comment-form></base-comment-form>
      </div>
      <div v-if="comment.son && comment.son.length > 0" class="comment-child">
        <div
          v-for="(son, index) in comment.son"
          :key="'son' + index"
          class="comment-box"
        >
          <base-geek-img
            style="width: 45px; height: 45px"
            :src="son.expand.head_img"
          >
          </base-geek-img>
          <div class="content">
            <div class="header">
              <a class="author" target="_blank"> {{ son.nickname }}</a>

              <div class="metadata">
                <span class="date">
                  {{ util.getBeautifyTime(`2021-12-21 11:06:51`) }}</span
                >
              </div>
            </div>
            <div class="text">
              {{ son.content }}
            </div>
          </div>
          <base-comment-form></base-comment-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";
const props = defineProps({
  comment: {
    type: Object,
    default: {} as any,
  },
});
</script>
