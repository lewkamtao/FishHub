<style lang="scss" scoped>
.content {
  font-size: 16px;
  line-height: 26px;
}
.matter {
  margin-top: 15px;
  line-height: 30px;
  .item {
    display: flex;
    font-size: 14px;
    .tag {
      background: #eee;
      margin: 0px 5px;
      padding: 2px 6px;
      font-size: 12px;
      color: var(--primary);
      border-radius: 30px;
      background: var(--muted-light);
    }
  }
}
</style>

<template>
  <div class="paper">
    <h5 class="title margin-none">摸鱼办</h5>
    <div class="date"></div>
    <div class="fish-day margin-top">
      <div class="matter">
        <div v-for="(item, i) in fish.list" :key="`fish${i}`" class="item">
          <div class="label">{{ item.name }}还有</div>
          <div class="day">
            <span class="tag"> {{ item.gap_day }}</span
            >天
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();
const res: any = await $fetch(
  "https://vps.gamehook.top/api/face/my?type=json",
  {}
);
const fish = res.data;

function deleteNum(str) {
  let reg = /[0-9]+/g;
  let str1 = str.replace(reg, "");
  str1 = str1.replace(/\-/g, "");
  return str1;
}
</script>
