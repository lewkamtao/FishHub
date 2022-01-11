<style lang="scss" scoped>
.comment-form {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-bottom: 1px solid var(--muted-light);
  height: auto;
  padding: 20px;
}
.form-box {
  width: 100%;
}
textarea {
  background: #fff;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
  <div class="comment-form">
    <div class="form-box">
      <label for="large-input">发表评论</label>
      <textarea
        class="margin-top-small"
        style="width: 100%; height: 100px; resize: none"
        placeholder="此刻你的想法..."
        v-model="form.content"
      ></textarea>
    </div>
    <div class="form-footer">
      <button
        @click="close"
        class="btn btn-small btn-danger margin-top margin-right"
      >
        取消
      </button>
      <button @click="postComment" class="btn btn-small margin-top">
        biu！biu！发射~
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import util from "~~/util";

const { $api } = useNuxtApp();

const props = defineProps({
  comment: {
    type: Object,
    default: {} as any,
  },
});

let form: any = ref({
  article_id: props.comment.article_id,
  pid: props.comment.pid || props.comment._id,
  content: "",
});

const emit = defineEmits(["updateCommentList", "close"]);

const close = () => {
  emit("close");
};

const postComment = () => {
  const token = useCookie("token", { maxAge: 2419200 });
  if (!token.value) {
    util.wxLogin($api);
    return;
  }

  if (form.value.content == "") {
    util.addAlert({
      type: "danger",
      text: "内容不可为空",
    });

    return;
  }

  $api.POST("/comment", form.value).then((res) => {
    if (res.code == 200) {
      emit("updateCommentList", res.data);
      util.addAlert({
        type: "success",
        text: res.tips,
      });
      emit("close");
    } else {
      util.addAlert({
        type: "error",
        text: res.tips,
      });
    }
  });
};
</script>
