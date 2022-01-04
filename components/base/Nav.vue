<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 69px;
  border-bottom: none;
  background: var(--main-background);
  z-index: 9;
  margin-bottom: 0px;
  box-shadow: none;
  width: calc(100% - 2px);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>

<template>
  <div id="geekNav" class="nav padding-none">
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
