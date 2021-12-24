<style lang="scss" scoped>
.about {
  color: var(--primary);
  font-weight: bold;
}
</style>

<template>
  <div class="paper user">
    <button
      href="https://github.com/rhyneav/papercss"
      target="_blank"
      class="paper-btn"
    >
      现在注册
    </button>
    <div class="margin-top">
      <label>已注册，立即 <nuxt-link to="登录">登录</nuxt-link> </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
