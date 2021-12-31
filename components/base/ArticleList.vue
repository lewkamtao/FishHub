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
</style>

<template>
  <div class="paper padding-none margin-top-none article-list">
    <div
      v-for="(item, index) in articleList.data"
      :key="'item' + index"
      class="article-item-box"
    >
      <div class="handle-box">
        <div class="push">
          <span @click.stop="push($event, item._id, index)" class="icon like"
            >🎉</span
          >
          <span class="num"> {{ item.like || 0 }}</span>
        </div>
        <span class="badge comment-num secondary">
          <img
            style="height: 18px; width: auto; margin-right: 5px"
            class="icon no-responsive no-border"
            src="@sicons/ionicons5/ChatbubbleEllipsesOutline.svg"
          />
          {{ item.comment_num || 0 }}</span
        >
      </div>
      <nuxt-link
        :to="`/detail?id=${item._id}`"
        class="article-item padding margin-none"
        :class="{ isRead: item.isRead }"
      >
        <div class="avatar-box">
          <base-geek-avatar :src="item.user[0].avatar"></base-geek-avatar>
        </div>
        <div class="content">
          <div class="top">
            <div class="title" v-text="item.title"></div>
          </div>
          <div class="bottom margin-top-small">
            <div class="tags margin-right-small">
              <span class="badge tag" v-text="item.type"></span>
            </div>
            <span
              class="margin-right-small author"
              v-text="item.user[0] && item.user[0].nickname"
            ></span>
            <base-geek-gender :gender="item.user[0].gender"></base-geek-gender>
            <span
              class="margin-left date"
              v-text="item.BeautifyUpdateTime || `刚刚`"
            ></span>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="loading-more" @click="getMore">
      <div v-if="isGet" class="more-btn" :class="{ loading: loading }">
        <span class="donut"></span>
        {{ loading ? "" : "加载更多" }}
      </div>
      <div v-if="!isGet" class="not-more">没有更多了</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();

const articleType: any = ref("");

const route = useRoute();
watch(
  () => route.query.articleType,
  () => {
    articleType.value = route.query.articleType || "";
    PageOptions.value.pageNum = 1;
    updateArticleList("new");
  }
);

const articleList: any = ref({} as any);

const loading = ref(false);
const isGet = ref(false);

const PageOptions = ref({
  pageNum: 1,
  pageSize: 10,
});

// 初始请求
await $api
  .GET("/article/list", {
    pageNum: PageOptions.value.pageNum,
    pageSize: PageOptions.value.pageSize,
    type: articleType.value,
  })
  .then((res) => {
    if (res.code == 200) {
      if (res.data.length == PageOptions.value.pageSize) {
        isGet.value = true;
      } else {
        isGet.value = false;
      }
      articleList.value = res;
    }
  });

// 追加
const updateArticleList: any = (type) => {
  loading.value = true;
  $api
    .GET("/article/list", {
      pageNum: PageOptions.value.pageNum,
      pageSize: PageOptions.value.pageSize,
      type: articleType.value,
    })
    .then((res) => {
      loading.value = false;
      if (res.code == 200) {
        if (res.data.length == PageOptions.value.pageSize) {
          isGet.value = true;
        } else {
          isGet.value = false;
        }

        if (type == "new") {
          articleList.value = res;
        } else {
          articleList.value.data = articleList.value.data.concat(res.data);
        }
      }
    });
};

const getMore = () => {
  if (isGet.value) {
    PageOptions.value.pageNum += 1;
    updateArticleList();
  }
};

import confetti from "canvas-confetti";

const push = (e, article_id, index) => {
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
  articleList.value.data[index].like += 1;
  $api.POST("/user/operation", {
    article_id: article_id,
    type: "like",
  });
};
</script>
