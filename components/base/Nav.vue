<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 69px;
  border-bottom: 1px solid var(--muted-light);
  background: var(--main-background);
  z-index: 9;
  margin-bottom: 0px;
  box-shadow: none;
}
</style>

<template>
  <div id="geekNav" class="nav paper padding-none margin-top">
    <base-nav-by-index v-if="type == 'index'"> </base-nav-by-index>
    <base-nav-by-detail
      v-if="type == 'detail'"
      :opt="opt"
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
  opt: {
    type: Object,
    default: {},
  },
});
</script>
