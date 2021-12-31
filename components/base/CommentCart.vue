<style lang="scss" scoped>
.comment-child {
  padding-left: 75px;
}
.comment-box:hover {
  background: var(--primary-shaded-70);
  cursor: pointer;
  .reply-btn {
    opacity: 0.8;
  }
}
.comment-box {
  position: relative;
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
  .reply-btn {
    padding: 2px;
    height: 24px;
    transition: all 0.25s;
    white-space: nowrap;
    opacity: 0;
    font-size: 13px;
  }
  .reply-btn:active {
    opacity: 1;
  }
}
</style>

<template>
  <div class="comment-wrapper">
    <div class="comment">
      <div class="comment-box comment-parent">
        <base-geek-avatar
          style="width: 45px; height: 45px"
          :src="comment.user[0].avatar"
        >
        </base-geek-avatar>
        <div class="content">
          <div class="header">
            <a class="author margin-right-small" target="_blank">
              {{ comment.user[0].nickname }}
            </a>
            <base-geek-gender :gender="comment.user[0].gender"></base-geek-gender>
            <div class="metadata">
              <span class="date">
                {{ comment.BeautifyUpdateTime || "刚刚" }}</span
              >
            </div>
          </div>
          <div class="text">
            {{ comment.content }}
          </div>
        </div>
        <div @click="reply(comment)" class="post-btn badge reply-btn">回复</div>
      </div>
      <base-comment-form
        @close="close"
        v-if="curId == comment._id"
        @updateCommentList="updateCommentList"
        :comment="curComment"
      ></base-comment-form>
      <div
        v-if="comment.children && comment.children.length > 0"
        class="comment-child"
      >
        <div v-for="(child, index) in comment.children" :key="'son' + index">
          <div class="comment-box">
            <base-geek-avatar
              style="width: 45px; height: 45px"
              :src="child.user[0].avatar"
            >
            </base-geek-avatar>
            <div class="content">
              <div class="header">
                <a class="author margin-right-small" target="_blank">
                  {{ child.user[0].nickname }}</a
                >
                <base-geek-gender
                  :gender="child.user[0].gender"
                ></base-geek-gender>
                <div class="metadata">
                  <span class="date">
                    {{ child.BeautifyUpdateTime || "刚刚" }}</span
                  >
                </div>
              </div>
              <div class="text">
                {{ child.content }}
              </div>
            </div>
            <div @click="reply(child)" class="post-btn badge reply-btn">
              回复
            </div>
          </div>
          <base-comment-form
            @close="close"
            v-if="curId == child._id"
            @updateCommentList="updateCommentList"
            :comment="curComment"
          ></base-comment-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "@/util/index.js";

const curComment: any = ref({});

const props = defineProps({
  comment: {
    type: Object,
    default: {} as any,
  },
  curId: {
    type: String,
    default: "",
  },
  article_id: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["updateCommentList", "updateCurId"]);

const updateCommentList = (data) => {
  emit("updateCommentList", data);
};

const close = () => {
  emit("updateCurId", "");
};

const reply = (comment) => {
  const token = useCookie("token", { maxAge: 2419200 });
  if (!token.value) {
    util.addAlert({
      type: "danger",
      text: "未登录，请先登录",
    });
    return;
  }
  curComment.value = comment;
  curComment.value.article_id = props.article_id;
  emit("updateCurId", comment._id);
};
</script>
