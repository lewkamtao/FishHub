<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  z-index: 66;
  overflow: hidden;
  border-left: none;
  border-right: none;
  border-top: none;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 20px;
  }

  .moyu-title {
    display: flex;
    align-items: flex-end;
    font-size: 24px;

    .logo {
      margin-right: 5px;
    }
    img {
      transform: rotate(-35deg);
    }
    .badge {
      margin-bottom: 3px;
      font-weight: normal;
    }
  }

  .search-box {
    display: flex;
    align-items: center;
  }

  menu {
    display: flex;
    align-items: center;
    margin:6px 0px 0px 0px;
    a {
      margin-right: 30px;
      border-bottom: 5px rgba($color: #000000, $alpha: 0) solid;
    }
    a:hover {
      border-bottom-color: #41403e;
      border-bottom-color: var(--primary);
      border-bottom-left-radius: 15px 3px;
      border-bottom-right-radius: 15px 5px;
      border-bottom-style: solid;
      border-bottom-width: 5px;
    }
  }
}
</style>

<template>
  <header class="paper margin-none padding-small">
    <div class="wrapper">
      <nuxt-link to="/">
        <h4 class="moyu-title margin-none">
          <img
            style="width: 35px; margin-right: 10px"
            class="icon no-responsive no-border"
            src="@sicons/ionicons5/FishOutline.svg"
          />
          <div class="logo">摸鱼办</div>
          <!-- <span class="badge secondary">广东分办</span> -->
        </h4></nuxt-link
      >
      <!-- <div class="search-box">
        <label for="paperInputs3">Block Level</label>
        <input class="input-block" type="text" id="paperInputs3" />
      </div> -->
      <menu>
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/about">关于</nuxt-link>
        <div style="margin-bottom: 5px" class="post-btn badge"> 
          <img src="@sicons/ionicons5/AddCircleOutline.svg" alt="">
          创建话题</div>
      </menu>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
