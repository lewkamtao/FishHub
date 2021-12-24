<style lang="scss" scoped>
.article-item {
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--muted-light);
  color: var(--primary);
  background-image: none;
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
    width: calc(100% - 60px);
    margin-left: 10px;
    .top {
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
  .common-num {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    .num {
      width: 30px;
      font-size: 16px;
      text-align: left;
    }
  }
}
.article-item:last-child {
  border-bottom: none;
}

.article-item:hover {
  background: var(--primary-shaded-70);
  cursor: pointer;
}
</style>

<template>
  <div>
    <nuxt-link
      :to="`/detail?id=${item.id}`"
      v-for="(item, index) in list.data"
      :key="'item' + index"
      class="article-item padding margin-none"
    >
      <div class="common-num">
        <img
          style="height: 25px; width: auto; margin-right: 10px"
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/ChatbubbleOutline.svg"
        />
        <span class="num"> {{ item.pid % 110 }}</span>
      </div>

      <div class="avatar-box">
        <!-- <img :src="item.urls.original" alt="" srcset="" class="avatar" /> -->
        <img
          :src="`https://unsplash.it/100?${index}`"
          alt=""
          srcset=""
          class="avatar"
        />
      </div>
      <div class="content">
        <div class="top">{{ item.title }}</div>
        <div class="bottom margin-top-small">
          <div class="tags margin-right-small">
            <span
              v-show="index <= 2"
              v-for="(tag, index) in item.tags"
              :key="'tag' + index"
              class="badge tag secondary"
              >{{ tag }}</span
            >
          </div>
          <span class="margin-right-small author">{{ item.author }}</span>
          <span class="margin-right-small date">{{
            util.getBeautifyTime(item.uploadDate)
          }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";

const { data: list } = await useFetch(
  "https://api.lolicon.app/setu/v2?tag=%E8%90%9D%E8%8E%89|%E5%B0%91%E5%A5%B3&tag=%E7%99%BD%E4%B8%9D|%E9%BB%91%E4%B8%9D&num=22"
);
</script>
