<style lang="scss" scoped>
.comment-form {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid var(--muted-light);
  height: auto;
  padding: 20px;
}
.form-box {
  width: calc(100% - 50px);
}
textarea {
  background: #fff;
}
</style>

<template>
  <div class="comment-form">
    <div class="form-box">
      <label for="large-input">发表评论</label>
      <textarea
        style="width: 100%; height: 100px"
        placeholder="此刻你的想法..."
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  curPid: {
    type: String,
    default: "",
  },
  article_id: {
    type: String,
    default: "",
  },
});
console.log(props.curPid);
console.log(props.article_id);
</script>
