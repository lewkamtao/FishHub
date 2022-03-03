<style lang="scss" scoped>
.comment-child {
  padding-left: 75px;
  .comment-box {
    background: rgba(0, 0, 0, 0.03);
  }
}
.comment-box:hover {
  .reply-btn {
    cursor: pointer;
    opacity: 0.8;
  }
}

.comment {
  .news {
    padding: 10px 0px;
    font-size: 14px;
    .reply-btn {
      display: none;
    }
  }
}
.comment-wrapper:last-child .comment-box {
  border-bottom: none;
}
.comment-box {
  position: relative;
  padding: 15px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  .content {
    width: calc(100% - 80px);
    margin-left: 10px;
  }
  .header {
    display: flex;
    align-items: center;
    white-space: nowrap;

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
    color: var(--primary);
    white-space: pre-line;
    font-size: 14px;
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

@media (max-width: 992px) {
  .comment-box {
    padding: 20px 10px;
    .content {
      width: calc(100% - 110px);
    }
    .header {
      display: flex;
      align-items: center;

      .author {
        color: var(--primary);
      }

      .metadata {
        margin-left: 5px;
        color: var(--muted-light-10);
        font-size: 12px;
      }
    }

    .reply-btn {
      opacity: 1;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="comment-wrapper">
    <div class="comment">
      <div class="comment-box comment-parent" :class="layout">
        <base-geek-avatar
          style="width: 45px; height: 45px"
          :user="comment.user"
          :isShowInfo="true"
        >
        </base-geek-avatar>
        <div class="content">
          <div class="header">
            <base-geek-nickname
              :isShowInfo="true"
              :user="comment.user"
            ></base-geek-nickname>
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
              :user="child.user"
              :isShowInfo="true"
            >
            </base-geek-avatar>
            <div class="content">
              <div class="header">
                <base-geek-nickname
                  :isShowInfo="true"
                  :user="child.user"
                ></base-geek-nickname>
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
const { $api } = useNuxtApp();

const curComment: any = ref({});

const props = defineProps({
  comment: {
    type: Object,
    default: {} as any,
  },
  layout: {
    type: String,
    default: "",
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
    util.wxLogin($api);
    return;
  }
  curComment.value = comment;
  curComment.value.article_id = props.article_id;
  emit("updateCurId", comment._id);
};
</script>
