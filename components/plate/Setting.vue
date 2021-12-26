<style lang="scss" scoped></style>

<template>
  <div class="paper">
    <h5 class="title margin-none">设置</h5>

    <fieldset class="form-group" style="margin-bottom: 0px; margin-top: 20px">
      <label class="paper-switch-2">
        <input
          id="paperSwitch8"
          v-model="isDark"
          name="paperSwitch8"
          type="checkbox"
          checked
        />
        <span class="paper-switch-slider"></span>
      </label>
      <label for="paperSwitch8" class="paper-switch-2-label">
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
