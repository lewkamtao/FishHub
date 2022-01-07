<style lang="scss" scoped>
.article-list {
  border-top: none !important;
  margin-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>

<template>
  <div class="index">
    <base-nav type="index"> </base-nav>
    <div class="article-list paper padding-none">
      <base-article-list></base-article-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
