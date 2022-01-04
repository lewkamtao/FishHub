<style lang="scss" scoped>
.online {
  border-bottom: 1px solid var(--muted-light);
}
</style>

<template>
  <div class="index paper padding-none">
    <div class="online padding">在线人数：1231</div>
    <base-nav type="index"> </base-nav>
    <base-article-list></base-article-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
