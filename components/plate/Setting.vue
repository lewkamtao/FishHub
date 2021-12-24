<style lang="scss" scoped></style>

<template>
  <div class="paper">
    <fieldset class="form-group" style="margin-bottom: 0px">
      <label class="paper-switch">
        <input
          id="paperSwitch4"
          name="paperSwitch4"
          type="checkbox"
          v-model="isDark"
        />
        <span class="paper-switch-slider"></span>
      </label>
      <label for="paperSwitch4" class="paper-switch-label">
        {{ isDark ? "暗黑" : "白天" }}模式
      </label>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
let isDark = ref(false);

watch(
  () => isDark.value,
  (value) => {
    if (value) {
      console.log(1);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
);
</script>
