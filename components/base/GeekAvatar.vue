<style lang="scss" scoped>
img {
  background: #eee;
}
</style>

<template>
  <img :src="src" :style="imgStyle" alt="" srcset="" />
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
import util from "@/util/index";

let imgStyle = ref(`border-bottom-left-radius: ${util.randomInRange(
  225,
  285
)}px ${util.randomInRange(225, 285)}px;
    border-color: var(--primary);
    border-bottom-right-radius:  ${util.randomInRange(
      225,
      285
    )}px ${util.randomInRange(225, 285)}px;
    border-top-left-radius:  ${util.randomInRange(
      225,
      285
    )}px ${util.randomInRange(225, 285)}px;
    border-top-right-radius: ${util.randomInRange(
      225,
      285
    )}px  ${util.randomInRange(225, 285)}px;`);
</script>
