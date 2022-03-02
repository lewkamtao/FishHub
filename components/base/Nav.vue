<style lang="scss" scoped>
.nav {
  top: 69px;
  border-bottom: 1px solid var(--muted-light);
  background: var(--main-background);
  z-index: 9;
  margin-bottom: 0px;
  box-shadow: none;
}
@media (max-width: 992px) {
  .nav {
    top: 49px;
  }
}
</style> 

<template>
  <div id="geekNav" class="nav paper padding-none margin-top">
    <base-nav-by-index v-if="type == 'index'"> </base-nav-by-index>
    <base-nav-by-detail
      v-if="type == 'detail'"
      :articleData="articleData"
      class="title"
    ></base-nav-by-detail>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  articleData: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["changeIdByindex"]);
</script>
