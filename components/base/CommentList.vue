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

.sofa-box {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .sofa {
    transform: translateY(-10px);
    transition: all 0.25s;
    cursor: pointer;
  }
  .sofa:hover {
    transform: translateY(-10px) scale(1.1);
  }
  .sofa:active {
    transform: translateY(-10px) scale(0.95);
  }
  p {
    transform: translateY(-80px);
    color: #999;
  }
}
</style>

<template>
  <div class="paper padding-none comment-list">
    <div class="comment-nav">
      <div class="comment-num">{{ commentList.total }} 条回复</div>
      <div class="post-btn badge" @click="reply">我要发言</div>
    </div>

    <div
      v-if="isSofa && commentList.total == 0"
      @click="reply"
      class="sofa-box"
    >
      <svg
        t="1640760815125"
        class="icon sofa"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10357"
        width="200"
        height="200"
      >
        <path
          d="M827.7 659.1c-9.5-30.6-10.2-57.9-10.2-108.4 0-40.7 3.9-77.9 10.4-106.9 0.5-2.3-1.2-4.5-3.6-4.5h-13.1c-6.3 0-11.4 5.1-11.4 11.4l1 188.2h-576V450.7c0-6.3-5.1-11.4-11.4-11.4h-13.5c-2.4 0-4.1 2.2-3.6 4.5 6.5 28.9 10.4 66.2 10.4 106.9 0 50.5-0.7 77.8-10.2 108.4h631.2z"
          fill="#2D2D2B"
          p-id="10358"
        ></path>
        <path
          d="M389.1 537.3c-5.3-0.6-9.6-1.5-12.6-2.6-21.6-7.8-34.6-11.3-47.8-12.8-15.3-1.8-31.5-0.9-56.5 0.8-3.4 0.2-7.8 0-13.3-0.6-6.7-0.8-12.6-1.9-12.7-1.9-6.2-1.3-12.7-6.1-12.7-6.1-1.1-0.7-3.1-2 7.7-23.7 13.5-27.2 16-49.3 10.5-91.2-1.7-12.7 1.1-18.8 1.2-19 1-3.6 5.6-6.5 10.2-6.5 0 0 3.3-0.3 8.3 0.3 4.5 0.5 8.8 1.5 12.9 3 17.7 6.3 34.7 10.4 52 12.4 21.6 2.5 40.5 1.4 56.5 0.1 5.2-0.4 10.9-0.2 16.9 0.5 7.4 0.9 12.6 2.2 12.8 2.3 4.4 1 8.2 4.9 8.3 8.9 0.1 0.3 1.5 9.2-3.5 21.2-12.9 30.8-16.6 62.9-9.9 85.7 4 13.4 3.9 21.9 0.6 25.6-1.7 1.9-8.8 4.8-16.8 4.6-0.1-0.1-5.7-0.2-12.1-1z m-60.2-17.5"
          fill="#EADACA"
          p-id="10359"
        ></path>
        <path
          d="M768.3 526.2c-5.3 0.3-9.7 0.2-12.9-0.3-22.6-3.8-36-5-49.3-4.1-15.4 1-31.1 4.7-55.5 10.8-3.3 0.8-7.7 1.4-13.2 1.7-6.7 0.4-12.8 0.3-12.8 0.3-6.3-0.1-13.5-3.7-13.5-3.7-1.2-0.5-3.4-1.4 3.4-24.7 8.5-29.1 7-51.4-5.8-91.6-3.9-12.2-2.2-18.7-2.2-18.9 0.4-3.7 4.3-7.4 8.8-8.2 0 0 3.2-0.8 8.2-1.2 4.5-0.3 8.9-0.1 13.2 0.6 18.5 3.1 36 4.1 53.4 3 21.7-1.4 40.1-5.8 55.7-9.9 5-1.3 10.6-2.2 16.7-2.5 7.4-0.5 12.8-0.1 13-0.1 4.5 0.2 8.9 3.4 9.8 7.2 0.1 0.2 3.1 8.8 0.3 21.5-7.3 32.6-5.2 64.8 5.4 86.1 6.3 12.5 7.7 20.8 5.1 25-1.3 2.1-7.8 6.3-15.7 7.5-0.1 0.2-5.6 1.1-12.1 1.5z m-62.3-6.6"
          fill="#FB7F4A"
          p-id="10360"
        ></path>
        <path
          d="M761 532.7c-24.9-4.2-39.6-5.5-54.2-4.5-16.9 1.1-34.2 5.2-61 11.8-3.6 0.9-8.5 1.5-14.5 1.9-7.4 0.5-14 0.4-14.1 0.4-6.9-0.2-14.9-4.1-14.9-4.1-1.2-0.5-3-1.3 1.1-17.5H428c2.4 10.7 1.8 17.6-1.2 20.9-1.9 2-9.8 5.3-18.5 5.1-0.2 0-6.4-0.1-13.5-0.9-5.9-0.7-10.5-1.6-13.9-2.9-23.9-8.6-38.2-12.4-52.8-14.1-16.9-2-34.7-0.9-62.4 0.9-3.7 0.2-8.6 0-14.7-0.7-2.9-0.3-5.7-0.7-8-1.1-4.6 4.5-7.5 10.8-7.5 17.7v58.2c0 13.7 11.2 24.9 24.9 24.9h504.2c13.7 0 24.9-11.2 24.9-24.9v-58.2c0-5-1.5-9.6-4.1-13.6-2.5 0.3-6.2 0.8-10.3 1-5.8 0.5-10.6 0.3-14.1-0.3z"
          fill="#46A1B7"
          p-id="10361"
        ></path>
        <path
          d="M601.6 481.3c-8.2-19.3-9.1-46.5-2.9-74.7 0.9-3.9 1.8-7.8 3-11.6 1.5-5.2 2-9.7 2-13.2 0-5-0.8-8.1-0.9-8.3-0.6-3.9-4.8-7.4-9.3-7.9-0.2 0-5.5-0.8-13-0.8-6.1 0-11.8 0.5-16.9 1.5-15.8 3.1-34.4 6.3-56.2 6.3-17.5 0-34.8-2.1-53.1-6.3-4.2-1-8.7-1.5-13.2-1.5-5 0-8.3 0.6-8.3 0.6-4.6 0.5-8.8 3.9-9.3 7.6-0.1 0.2-1.2 3.8-0.5 10.6 5.3 0.8 8.7 1.7 8.9 1.8 4.9 1.1 9 5.5 9.2 9.8 0.1 0.3 1.7 10.2-3.9 23.4-2 4.7-3.7 9.4-5.3 14.1-6.6 19.6-9.7 39.2-9.2 56.5 0.2 7.8 1.2 15.1 2.9 21.8 2.2 0.8 4.8 1.6 7.3 1.8 0.1 0 6.1 0.5 12.8 0.5 5.5 0 10-0.3 13.3-0.9 24.7-4.5 40.6-7.2 56.1-7.2 13.3 0 26.6 2 48.9 7.2 3.2 0.7 7.5 1.1 12.8 1.1 6.5 0 12-0.6 12.2-0.6 7.9-0.7 14.7-4.4 16.1-6.5 2.9-3.8 1.9-12.2-3.5-25.1z"
          fill="#368979"
          p-id="10362"
        ></path>
      </svg>
      <p>暂无评论，马上抢沙发</p>
    </div>
    <base-comment-form
      v-if="!isSofa"
      @updateCommentList="updateCommentList"
      :comment="{
        article_id: article_id,
        pid: '',
      }"
    ></base-comment-form>
    <base-comment-cart
      v-for="(item, index) in commentList.data"
      :key="index"
      :comment="item"
      :article_id="article_id"
      :curId="curIdByCommentList"
      @updateCurId="updateCurId"
      @updateCommentList="updateCommentList"
    ></base-comment-cart>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();
const props = defineProps({
  article_id: {
    type: String,
    default: "",
  },
});

const isSofa = ref(true);
const curIdByCommentList = ref("");
const commentList = ref({} as any);

var commentListData: any = await $api.GET("/comment/list", {
  article_id: props.article_id,
});

commentList.value = commentListData;

const updateCommentList = (data) => {
  $api
    .GET("/comment/list", {
      article_id: props.article_id,
    })
    .then((res) => {
      if (res.code == 200) {
        commentList.value = res;
      }
      close();
    });
};

const updateCurId = (curId: any) => {
  curIdByCommentList.value = curId;
};

const reply = () => {
  const token =useCookie("token", { maxAge: 2419200 })
  if (!token.value) {
    util.addAlert({
      type: "warning",
      text: "未登录，请先登录",
    });
    return;
  }
  isSofa.value = false;
};

const close = () => {
  isSofa.value = true;
};
</script>
