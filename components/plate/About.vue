<style lang="scss" scoped>
.about {
  color: #999;
}
p {
  line-height: 30px;
  font-size: 16px;
}

h5 {
  font-weight: bold;
  color: #000;
}

span {
  color: var(--primary);
  font-weight: bold;
  margin: 0px 5px;
}
</style>

<template>
  <div class="paper about">
    <h5 class="margin-none">？摸鱼办</h5>
    <p>
      摸鱼办
      是一个<span>分享生活</span>和<span>释放压力</span>的地方，大胆表达💛可以让你释放压力。
      <br />
      纵使生活是一地鸡毛 <br />我们也要努力扎成漂亮的鸡毛掸子。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
