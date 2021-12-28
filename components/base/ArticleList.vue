<style lang="scss" scoped>
.article-list {
  border-top: none !important;
}
.article-item-box {
  position: relative;

  .article-item {
    display: flex;
    border-bottom: 1px solid var(--muted-light);
    color: var(--primary);
    .avatar-box {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: var(--muted-light);
      }
    }
    .content {
      width: calc(100% - 70px);
      margin-left: 15px;
      .top {
        .title {
          font-size: 18px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        font-size: 14px;
        .tags {
          .tag {
            margin-right: 5px;
            font-weight: normal;
          }
        }

        .date {
          opacity: 0.6;
        }
      }
    }
  }
  .handle-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    align-items: center;
    user-select: none;
    .comment-num {
      display: flex;
      align-items: center;
      font-size: 12px;
      text-align: left;
      border-radius: 50px;
      padding: 5px 10px;
      font-weight: normal;
      img {
        filter: invert(100%);
      }
    }
    .push {
      cursor: pointer;
      width: 33px;
      padding: 20px;
      box-sizing: content-box;

      span {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        height: 33px;
        width: 33px;
        font-size: 30px;
        transition: font-size 0.15s;
        background: #eee;
        border-radius: 50%;
        outline: 4px rgba($color: #000000, $alpha: 0) solid;
      }
    }
    .push:hover span {
      outline: 4px rgba($color: #0071de, $alpha: 0.4) solid;
    }
    .push:active span {
      font-size: 5px;
    }
  }
}
.article-item-box:last-child .article-item {
  border-bottom: none;
}
.isRead {
  .title {
    opacity: 0.6;
  }
}
.article-item:hover {
  background: var(--primary-shaded-70);
  cursor: pointer;
}
</style>

<template>
  <div class="paper padding-none margin-top-none article-list">
    <div
      v-for="(item, index) in articleList.data"
      :key="'item' + index"
      class="article-item-box"
    >
      <div class="handle-box">
        <div @click.stop="push" class="push"><span>🎉</span></div>
        <span class="badge comment-num secondary">
          <img
            style="height: 18px; width: auto; margin-right: 5px"
            class="icon no-responsive no-border"
            src="@sicons/ionicons5/ChatbubbleEllipsesOutline.svg"
          />
          {{ 231 }}</span
        >
      </div>
      <nuxt-link
        :to="`/detail?id=${item._id}`"
        class="article-item padding margin-none"
        :class="{ isRead: item.isRead }"
      >
        <div class="avatar-box">
          <!-- <img :src="item.urls.original" alt="" srcset="" class="avatar" /> -->
          <base-geek-avatar
            :src="`https://unsplash.it/100?${index}`"
          ></base-geek-avatar>
        </div>
        <div class="content">
          <div class="top">
            <div class="title" v-text="item.title"></div>
          </div>
          <div class="bottom margin-top-small">
            <div class="tags margin-right-small">
              <span
                v-show="index <= 2"
                v-for="(tag, index) in item.tags"
                :key="'tag' + index"
                class="badge tag"
                v-text="tag"
              ></span>
            </div>
            <span
              class="margin-right-small author"
              v-text="item._id"
            ></span>
            <span
              class="margin-right-small date"
              v-text="item.BeautifyUpdateTime"
            ></span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();

const articleList: any = await $api.GET("/article/list", {
  pageSize: 20,
  pageNum: 1,
});

import confetti from "canvas-confetti";

const push = (e) => {
  let w: any = document.documentElement.clientWidth;
  let h: any = document.documentElement.clientHeight;
  confetti({
    particleCount: 100,
    spread: 30,
    angle: 60,
    colors: [
      "#3f5fff",
      "#00a6ed",
      "#f70a8d",
      "#6d4534",
      "#f9c23c",
      "#e69c43",
      "#ef5378",
      "#0071de",
    ],
    shapes: ["circle", "square"],
    origin: { y: e.y / h, x: e.x / w },
  });
};
</script>
