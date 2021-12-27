<style lang="scss" scoped>
.article {
  border-top: none !important;
  padding: 20px;
}
</style>

<template>
  <div class="detail margin-top">
    <base-nav
      type="detail"
      :opt="{
        ava: '下达阿萨德',
        author: '下达阿萨德',
        title: '上班被骂怎么办？',
      }"
    >
    </base-nav>
    <div class="article paper margin-none">
      <div>大家上班被骂过吗？</div>
    </div>
    <base-comment-list></base-comment-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
