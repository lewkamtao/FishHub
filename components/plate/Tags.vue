<style lang="scss" scoped>
p {
  line-height: 30px;
  font-size: 16px;
}

a {
  margin: 0px 5px;
  opacity: 0.7;
  span {
    font-weight: normal;

    color: var(--color);
  }
}

.tags-box {
  .badge {
    margin-bottom: 10px;
    font-weight: normal;
  }
  .badge:first-child {
    margin-left: 0px;
  }
}
</style>

<template>
  <div class="paper about">
    <h5 class="title margin-none">热门话题</h5>
    <div class="tags-box margin-top">
      <nuxt-link
        :to="''"
        v-for="(item, index) in tagsList.data"
        :key="`tags${index}`"
        class="badge"
      >
        <span v-text="item.title"></span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();

const tagsList = await $api.GET("/tags/list", {
  limit: 10,
  page: 2,
});
</script>
