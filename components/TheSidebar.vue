<style lang="scss" scoped>
.paper {
  margin-top: 40px;
}
.paper:first-child {
  margin-top: 20px;
}
</style>

<template>
  <div class="sm-12 md-4 col sidebar">
    <plate-user></plate-user>
    <plate-today-news></plate-today-news>
    <plate-about></plate-about>
    <plate-setting></plate-setting>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref("ads");
</script>
