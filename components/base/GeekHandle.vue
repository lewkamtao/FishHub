<style lang="scss" scoped>
.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  position: fixed;
  transition: opacity 0.5s;
  opacity: 0;
  top: 300px;
  z-index: 9;
  left: 1em;
  transition: opacity 0.2s;
  transform: translateX(-100%);
  .paper-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    padding: 0px;
    border-top-left-radius: 185px 160px;
    border-top-right-radius: 200px 195px;
    border-bottom-right-radius: 160px 195px;
    border-bottom-left-radius: 185px 190px;
    img {
      width: 26px;
    }
  }
}
.handle:hover {
  opacity: 1;
}
</style>

<template>
  <div id="geekHandle" class="handle">
    <nuxt-link to="/" class="paper-btn">
      <img
        class="icon no-responsive no-border"
        src="@sicons/ionicons5/HomeOutline.svg"
      />
    </nuxt-link>

    <div class="paper-btn">
      <img
        class="icon no-responsive no-border"
        src="@sicons/ionicons5/Search.svg"
      />
    </div>
    <a href="#top" class="paper-btn">
      <img
        class="icon no-responsive no-border"
        src="@sicons/ionicons5/ArrowUp.svg"
      />
    </a>
  </div>
</template>

<script setup lang="ts"></script>
