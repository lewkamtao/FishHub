<style lang="scss" scoped>
.user-info {
  width: 400px;
  height: auto;
  margin: 0 auto;
}
input,
textarea {
  width: 100%;
}
</style>

<template>
  <div class="paper">
    <div class="user-info">
      <label for="upAvatar"
        ><div popover-bottom="点击更换头像">
          <base-geek-avatar
            class="avatar"
            style="width: 100px; margin: 50px auto"
            :src="user.data.avatar"
          ></base-geek-avatar></div
      ></label>
      <div class="form-group">
        <label for="paperInputs1">昵称</label>
        <input
          v-model="form.nickname"
          type="text"
          placeholder="Nice input"
          id="paperInputs1"
        />
      </div>
      <div class="form-group">
        <label for="no-resize">介绍</label>
        <textarea
          v-model="form.description"
          style="height: 100px"
          class="no-resize"
          id="no-resize"
          placeholder="No resize"
        ></textarea>
      </div>
      <fieldset class="form-group">
        <legend>性别</legend>

        <label for="gender_boy" class="paper-radio">
          <input
            v-model="form.gender"
            type="radio"
            name="paperRadios"
            id="gender_boy"
            value="1"
          />
          <span>男</span>
        </label>
        <label for="gender_girl" class="paper-radio">
          <input
            v-model="form.gender"
            type="radio"
            name="paperRadios"
            id="gender_girl"
            value="2"
          />
          <span>女</span>
        </label>
        <label for="gender_null" class="paper-radio">
          <input
            v-model="form.gender"
            type="radio"
            name="paperRadios"
            id="gender_null"
            value="0"
          />
          <span>保密</span>
        </label>
      </fieldset>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          v-model="form.email"
          type="text"
          placeholder="输入邮箱"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="company">公司</label>
        <input
          v-model="form.company"
          type="text"
          placeholder="公司名"
          id="company"
        />
      </div>
      <div class="row flex-right">
        <button @click="updateUser" class="btn-small margin-top">
          保存信息
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $api } = useNuxtApp();
import util from "~~/util";

let form = ref({} as any);

const user: any = await $api.GET("/user", {});
form.value = {
  nickname: user.data.nickname,
  username: user.data.nickname,
  password: new Date().getTime(),
  gender: user.data.gender,
  avatar: user.data.avatar,
  email: user.data.email,
  company: user.data.company,
  description: user.data.description,
};

const updateUser = async () => {
  const res: any = await $api.PUT("/user", form.value);
  if (res.code == 200) {
    util.addAlert({
      type: "success",
      text: "更新成功",
    });
    location.reload();
  } else {
    util.addAlert({
      type: "danger",
      text: res.tips,
    });
  }
};

onMounted(async () => {
  const geekAvatarEditUserId: any = document.getElementById(
    "geekAvatarEditUserId"
  );
  geekAvatarEditUserId.innerHTML = user.data._id;
});
</script>
