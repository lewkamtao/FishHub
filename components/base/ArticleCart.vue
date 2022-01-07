<style lang="scss" scoped>
.article-card-box {
  position: relative;
  display: flex;
  align-items: center;
  .avatar-box {
    width: 60px;
    height: 60px;
    margin-left: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: var(--muted-light);
    }
  }
  .article-card {
    display: flex;
    width: calc(100% - 60px);
    margin-left: 15px;
    border-bottom: 1px solid var(--muted-light);
    color: var(--primary);

    .content {
      width: calc(100% - 70px);
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
      color: #fff;
      img {
        filter: invert(100%);
      }
    }
    .push {
      display: flex;
      align-items: center;
      width: 90px;
      padding: 30px 10px 30px 20px;
      box-sizing: content-box;

      .icon {
        cursor: pointer;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        height: 30px;
        min-width: 30px;
        max-width: 30px;
        font-size: 28px;
        transition: font-size 0.15s;
        background: #eee;
        border-radius: 50%;
        border: 4px rgba($color: #000000, $alpha: 0) solid;
      }
      .num {
        margin-left: 8px;
        width: 40px;
        text-align: left;
      }
      .icon:hover {
        border: 4px rgba($color: #0071de, $alpha: 0.4) solid;
      }
      .icon:active {
        font-size: 5px;
      }
    }
  }
}
.article-card-box:last-child .article-card {
  border-bottom: none;
}
.isRead {
  .title {
    opacity: 0.6;
  }
}

.loading-more {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .not-more {
    color: #999;
    height: 40px;
    line-height: 40px;
    margin: 15px;
  }
  .more-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: 120px;
    height: 40px;
    margin: 15px;
    user-select: none;
    background: #0071de;
    transition: all 0.1s;
    border-radius: 50px;
    cursor: pointer;
    color: #fff;
    .donut {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 4px solid rgba(255, 255, 255, 0.4);
      border-left-color: #ffffff;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      opacity: 0;
      animation: donut-spin 0.8s linear infinite;
      transition: all 0.15s;
      transform: translateX(0px);
    }
  }
  .loading {
    width: 40px;
    .donut {
      opacity: 1;
    }
  }
  @keyframes donut-spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
.article-card-box:hover {
  background: var(--primary-shaded-70);
}
</style>
<template>
  <div class="article-card-box">
    <div class="handle-box">
      <div class="push">
        <span @click.stop="push($event, article._id)" class="icon like"
          >🎉</span
        >
        <span class="num">
          {{ util.numFormat(article.like) }}
        </span>
      </div>
      <nuxt-link
        :to="`/detail?id=${article._id}`"
        class="badge comment-num secondary"
      >
        <img
          style="height: 18px; width: auto; margin-right: 5px"
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/ChatbubbleEllipsesOutline.svg"
        />
        {{ util.numFormat(article.comment_num) }}
      </nuxt-link>
    </div>
    <div class="avatar-box">
      <base-geek-avatar
        style="width: 60px; height: 60px"
        :isShowInfo="true"
        :user="article.user"
      ></base-geek-avatar>
    </div>
    <nuxt-link
      :to="`/detail?id=${article._id}`"
      class="article-card padding margin-none padding-left-none"
      :class="{ isRead: article.isRead }"
    >
      <div class="content">
        <div class="top">
          <div class="title" v-text="article.title"></div>
        </div>
        <div class="bottom margin-top-small">
          <div class="tags margin-right-small">
            <span class="badge tag" v-text="article.type"></span>
          </div>
          <span
            class="margin-right-small author"
            v-text="article.user && article.user.nickname"
          ></span>
          <base-geek-gender :gender="article.user.gender"></base-geek-gender>
          <span
            class="margin-left date"
            v-text="article.BeautifyUpdateTime || `刚刚`"
          ></span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
const { $api } = useNuxtApp();
import util from "@/util/index.js";

const props = defineProps({
  article: {
    type: Object,
    default: {} as any,
  },
});

import confetti from "canvas-confetti";

const push = (e, article_id) => {
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
  props.article.like += 1;
  $api.POST("/user/operation", {
    article_id: article_id,
    type: "like",
  });
};
</script>
