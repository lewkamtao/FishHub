<style lang="scss" scoped></style>

<template>
  <div class="paper padding-none paper-main" style="margin-top: 1rem">
    <base-nav-list></base-nav-list>
    <base-article-list></base-article-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();
import util from "@/util/index.js";

const tagsList = await $api.GET("/tags/list", {
  limit: 10,
  page: 2,
});

const addAlert = (type) => {
  util.addAlert({
    type: type,
    text: "发送成功 sad成功！",
  });
};
</script>
