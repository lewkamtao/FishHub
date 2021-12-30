<style lang="scss" scoped>
.content-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
  <div class="paper" style="margin-top: 1rem">
    <h3 class="margin-top-none">创建你的文章</h3>
    <div class="post">
      <div class="form-group">
        <label for="paperInputs1">标题</label>
        <input
          style="width: 100%"
          type="text"
          id="paperInputs1"
          v-model="form.title"
          placeholder="一个好的标题"
        />
      </div>
      <div class="form-group">
        <label for="paperSelects1">分类</label>
        <select style="width: 50%" v-model="form.type" id="paperSelects1">
          <option
            v-for="(item, index) in typeList.data"
            :key="`topic${index}`"
            :value="item.value"
          >
            {{ item.key }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="no-resize" class="content-title"
          >内容
          <fieldset class="form-group margin-none">
            <label for="paperSwitch2" class="paper-switch-2-label">
              markdown 模式
            </label>
            <label class="paper-switch-2">
              <input
                id="paperSwitch9"
                name="paperSwitch9"
                v-model="markdownMode"
                type="checkbox"
              />
              <span class="paper-switch-slider"></span>
            </label></fieldset
        ></label>
        <textarea
          v-if="!markdownMode"
          style="width: 100%; height: 300px"
          class="content-form no-resize"
          id="no-resize"
          placeholder="此刻的想法..."
          v-model="form.content"
        ></textarea>
        <div v-if="markdownMode" class="content-form">
          <v-md-editor
            left-toolbar="undo redo | ul ol table hr | link image code"
            right-toolbar="preview  fullscreen"
            v-model="form.content"
            height="800px"
          ></v-md-editor>
        </div>
      </div>
      <div class="form-group">
        <label for="paperInputs2">输入标签（以加号+间隔）</label>
        <input
          id="paperInputs2"
          style="width: 100%"
          type="text"
          v-model="form.tags"
          placeholder="招聘+找工作+换老板"
        />
      </div>
    </div>
    <div class="form-footer">
      <button @click="postArticle" class="btn margin-top">立即发布</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const router: any = useRouter();
const { $api } = useNuxtApp();
import util from "~~/util";

const form = ref({
  type: "",
  title: "",
  content: "",
  tags: [] as any,
});
const markdownMode = ref(false);
const typeList: any = await $api.GET("/articleType", {});

const postArticle = () => {
  const token = useCookie("token");
  if (!token.value) {
    util.addAlert({
      type: "warning",
      text: "未登录，请先登录",
    });
    return;
  }

  if (form.value.tags.length > 0) {
    form.value.tags = form.value.tags.split("+");
  }

  switch (true) {
    case form.value.title == "": {
      util.addAlert({
        type: "warning",
        text: "请设置标题",
      });
      return;
    }
    case form.value.type == "": {
      util.addAlert({
        type: "warning",
        text: "请选择分类",
      });
      return;
    }

    case form.value.type == "": {
      util.addAlert({
        type: "warning",
        text: "请输入内容",
      });
      return;
    }
    default: {
      break;
    }
  }

  $api.POST("/article", form.value).then((res: any) => {
    if (res.code == 200) {
      util.addAlert({
        type: "success",
        text: "发布成功",
      });
      router.push("/");
    } else {
      util.addAlert({
        type: "danger",
        text: res.tips,
      });
    }
  });
};
</script>
