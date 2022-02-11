<style lang="scss" scoped>
.content {
  font-size: 16px;
  line-height: 26px;
}
.matter {
  margin-top: 15px;
  line-height: 36px;
  .item {
    display: flex;
    font-size: 16px;
    .tag {
      background: #eee;
      margin: 0px 10px;
      padding: 1px 10px;
      font-size: 15px;
      color: var(--primary);
      border-radius: 30px;
      background: var(--muted-light);
    }
  }
}
</style>

<template>
  <div class="paper">
    <h5 class="title margin-none">摸鱼办公告</h5>
    <div class="date"></div>
    <div class="fish-day margin-top">
      <div class="content">
        {{ deleteNum(fish.now_time_format) }}好，摸鱼人！<br />
        工作再累，一定不要忘记摸鱼哦！有事没事起身去茶水间，去厕所，去廊道走走别老在工位上坐着，钱是老板的，但命是自己的。
      </div>
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
