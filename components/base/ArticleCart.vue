<style lang="scss" scoped>
.article-card-box {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
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

    .article-body {
      width: calc(100% - 70px);
      .top {
        .title {
          max-width: calc(100% - 130px);
          font-size: 16px;
        }
        .title:hover {
          text-decoration: underline;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-top: 5px;
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
      text-align: left;
      border-radius: 50px;
      font-size: 14px;
      padding: 5px 10px;
      font-weight: normal;
      color: var(--primary);
      background: var(--muted-light);
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
        background: #fdecec;
        border-radius: 50%;
        border: 2px rgba($color: #000000, $alpha: 0.08) solid;
        img {
          width: 35px;
          transition: width 0.12s;
        }
      }
      .num {
        margin-left: 8px;
        width: 60px;
        text-align: left;
      }
      .icon:hover {
        border: 2px rgba($color: #0071de, $alpha: 0.4) solid;
      }
      .icon:active img {
        width: 5px;
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
    background: var(--secondary);
    transition: all 0.1s;
    border-radius: 50px;
    cursor: pointer;
    color: var(--primary-inverse);
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
.mobile_comment_num {
  display: none;
  background: var(--muted-light);
  color: #000;
  padding: 2px 8px;
  border-radius: 20px;
}
@media (max-width: 992px) {
  .article-card-box {
    position: relative;
    justify-content: space-between;
    align-items: flex-start;

    .avatar-box {
      width: 45px;
      height: 45px;
      margin-left: 10px;
      margin-top: 12px;
    }
    .article-card {
      width: calc(100% - 45px);
      padding-bottom: 12px;
      margin-left: 10px;
      .article-body {
        width: 100%;
        .top {
          max-width: 100%;
          .title {
            max-width: 100%;
            font-size: 14px;
          }
        }
        .bottom {
          white-space: nowrap;
          font-size: 12px;
          display: flex;
          flex-wrap: wrap;
          .tags {
            .tag {
              font-size: 12px;
              padding: 2px;
            }
          }
        }
      }
    }
    .handle-box {
      display: none;
    }
    .mobile_comment_num {
      display: flex;
      align-items: center;
    }
  }
}
</style>
<template>
  <div class="article-card-box" @click="toDetail(article._id)">
    <div class="handle-box">
      <nuxt-link
        :to="`/article/${article._id}`"
        class="badge comment-num secondary"
      >
        <img
          style="height: 18px; width: auto; margin-right: 5px"
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/ChatbubbleEllipsesOutline.svg"
        />
        {{ util.numFormat(article.comment_num) }}
      </nuxt-link>
      <div class="push">
        <span @click.stop="push($event, article._id)" class="icon like">
          <img
            src="https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/public/images/fish/qz.png"
            alt=""
            srcset=""
          />
        </span>
        <span class="num">
          {{ util.numFormat(article.like) }}
        </span>
      </div>
    </div>
    <base-geek-avatar
      class="avatar-box"
      :isShowInfo="true"
      :user="article.user"
    ></base-geek-avatar>
    <div
      class="article-card padding margin-none padding-left-none"
      :class="{ isRead: article.isRead }"
    >
      <div class="article-body">
        <nuxt-link :to="`/article/${article._id}`" class="top">
          <div class="title">
            {{ article.title }}
          </div>
        </nuxt-link>
        <div class="bottom">
          <span
            class="date margin-right"
            v-text="article.BeautifyUpdateTime || `刚刚`"
          ></span>
          <base-geek-nickname
            :isShowInfo="true"
            :user="article.user"
          ></base-geek-nickname>

          <div class="mobile_comment_num margin-left">
            {{ util.numFormat(article.comment_num) }}
          </div>
        </div>
      </div>
    </div>
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
const router: any = useRouter();

const toDetail = (id) => {
  router.push(`/article/${id}`);
};

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
