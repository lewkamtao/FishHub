<style lang="scss" scoped>
.paper {
  margin-top: 2rem;
}
.paper:first-child {
  margin-top: 1rem;
}
</style>

<template>
  <div class="sm-12 md-4 col sidebar">
    <plate-user></plate-user>
    <plate-weather></plate-weather>
    <plate-fish></plate-fish>
    <plate-today-news></plate-today-news>
    <plate-tags></plate-tags>
    <plate-setting></plate-setting>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref("ads");
</script>
