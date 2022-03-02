<style lang="scss" scoped>
.nav-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  padding: 7px;

  a {
    padding: 5px 10px;
    margin: 5px;
    font-size: 16px;
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
@media (max-width: 992px) {
  .nav-list {
    padding: 5px;
    a {
      padding: 2px 6px;
      margin: 3px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="nav-list">
    <nuxt-link :to="'/'" class="badge" :class="{ active: articleType == '' }">
      <span>全部</span>
    </nuxt-link>
    <nuxt-link
      :to="`?articleType=${item.value}`"
      v-for="(item, index) in typeList.data"
      :key="`tags${index}`"
      class="badge"
      :class="{ active: articleType == item.value }"
    >
      <span v-text="item.value"></span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
const { $api } = useNuxtApp();

const typeList = await $api.GET("/articleType", {
  pageSize: 1000,
  pageNum: 1,
});

const articleType: any = ref("");

const route = useRoute();
watch(
  () => route.query.articleType,
  () => {
    articleType.value = route.query.articleType || "";
  }
);

onMounted(() => {
  articleType.value = route.query.articleType
    ? route.query.articleType
    : "";
});
</script>
