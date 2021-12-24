<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-left: none;
  border-right: none;
  border-top: none;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
  }

  .moyu-title {
    display: flex;
    align-items: flex-end;

    .logo {
      margin-right: 5px;
    }
    .badge {
      font-weight: normal;
    }
  }

  .search-box {
    display: flex;
    align-items: center;
  }

  menu {
    display: flex;
    margin: 0px;
    a {
      margin-right: 30px;
    }
  }
}
</style>

<template>
  <header class="paper margin-none padding-small">
    <div class="wrapper">
      <h4 class="moyu-title margin-none">
        <img
          style="width: 50px; margin-right: 10px"
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/FastFoodOutline.svg"
        />
        <div class="logo">摸鱼办</div>
        <span class="badge secondary">广东分办</span>
      </h4>
      <!-- <div class="search-box">
        <label for="paperInputs3">Block Level</label>
        <input class="input-block" type="text" id="paperInputs3" />
      </div> -->
      <menu>
        <nuxt-link to="">首页</nuxt-link>
        <nuxt-link to="">关于</nuxt-link>
      </menu>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
