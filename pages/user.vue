<style lang="scss" scoped></style>

<template>
  <div class="paper">{{ user }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();

const user: any = await $api.GET("/user", {});
</script>
