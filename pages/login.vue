<style lang="scss" scoped>
.form {
  width: 300px;
  margin: 0 auto;
  padding: 100px 0px 250px 0px;
  input {
    width: 100%;
  }
}
</style>

<template>
  <div class="detail margin-top">
    <div class="paper">
      <div class="form">
        <h4>注册登录</h4>
        <div class="form-group">
          <label for="paperInputs1">昵称</label>
          <input type="text" placeholder="昵称" id="12" />
        </div>
        <div class="form-group">
          <label for="paperInputs1">邮箱</label>
          <input type="text" placeholder="输入邮箱" />
        </div>
        <div class="form-group">
          <label for="paperInputs1">密码</label>
          <input type="password" placeholder="密码" id="12" />
        </div>

        <div v-show="false" class="form-group">
          <label for="paperInputs1">验证码</label>
          <input type="password" placeholder="密码" id="12" />
        </div>
        <button style="width: 100%" class="margin-top">注册登录</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let form = ref({
  mode: "",
  nickname: "",
  email: "",
  password: "",
  code: "",
});
</script>
