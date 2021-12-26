<style lang="scss" scoped></style>

<template>
  <img :src="src" :style="imgStyle" alt="" srcset="" />
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import util from "@/util/index";

// 采用ts专有声明，有默认值
interface Props {
  src: string;
}
const props = withDefaults(defineProps<Props>(), {
  src: "",
});

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
