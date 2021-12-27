<style lang="scss" scoped>
.nav-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  padding: 7px;

  a {
    padding: 5px; 
    margin: 5px;
    font-weight: normal;
    color: var(--muted-light-10);
    background: none;
  }
  a:hover {
    background: var(--muted-light);
    color: var(--muted-light-50);
  }
  .active {
    background: var(--secondary) !important;
    color: var(--white) !important;
  }
}
</style>

<template>
  <div class="nav-list">
    <nuxt-link
      :to="''"
      v-for="(item, index) in tagsList.data.data"
      :key="`tags${index}`"
      class="badge"
      :class="{ active: index == 0 }"
    >
      <span v-text="item.name"></span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();

const tagsList = await $api.GET("/article-sort", {
  limit: 1000,
  page: 1,
});
</script>
