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
    <nuxt-link :to="'/'" class="badge" :class="{ active: articleTypeId == '' }">
      <span>全部</span>
    </nuxt-link>
    <nuxt-link
      :to="`?articleTypeId=${item.value}`"
      v-for="(item, index) in typeList.data"
      :key="`tags${index}`"
      class="badge"
      :class="{ active: articleTypeId == item._id }"
    >
      <span v-text="item.value"></span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const { $api } = useNuxtApp();

const typeList = await $api.GET("/articleType", {
  pageSize: 1000,
  pageNum: 1,
});

const articleTypeId: any = ref("");

const route = useRoute();
watch(
  () => route.query.articleTypeId,
  () => {
    articleTypeId.value = route.query.articleTypeId || "";
  }
);
</script>
