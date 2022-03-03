<style lang="scss" scoped>
.sidebar {
  position: fixed;
  opacity: 0;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  transition: opacity 0.5s;
  width: 30%;
  padding: 0px 0.5rem;
}

@media (max-width: 992px) {
  .sidebar {
    display: none;
  }
}
</style>

<template>
  <div class="sidebar hid-scrollbar" id="geekSidebar">
    <plate-user></plate-user>
    <plate-fish></plate-fish>
    <!-- <plate-today-news></plate-today-news> -->
    <!-- <plate-tags></plate-tags> -->
    <plate-setting></plate-setting>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref("ads");
</script>
