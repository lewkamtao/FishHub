<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  z-index: 11;
  overflow: hidden;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  margin-top: 0px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.7rem;
    white-space: nowrap;
  }

  .moyu-title {
    display: flex;
    color: var(--primary);
    align-items: center;
    font-size: 30px;
    margin-bottom: 5px;
    margin-left: -4px;
    font-weight: bolder;

    span {
      display: flex;
      align-items: center;
      height: 38px;
      background: var(--secondary);
      border-radius: 3px;
      color: #fff;
      margin-left: 4px;
      font-size: 26px;
      padding: 0px 5px;
    }
  }

  .search-box {
    display: flex;
    align-items: center;
  }

  menu {
    display: flex;
    align-items: center;
    margin: 6px 0px 0px 0px;
    a {
      margin-right: 30px;
      color: var(--primary);
      margin-top: 2px;
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

@media (max-width: 992px) {
  header {
    height: 50px;
    .wrapper {
      padding: 5px;
      align-items: center;
    }
    .moyu-title {
      font-size: 22px;
      margin-bottom: 0px;
      span {
        height: 28px;
        font-size: 20px;
        padding: 0px 3px;
        border-radius: 2px;
      }
    }
    menu {
      a {
        margin-right: 20px;
        font-size: 14px;
      }
      .post-btn {
        padding: 4px 8px;
      }
    }
  }
}
</style>

<template>
  <header class="paper margin-none padding-small">
    <div class="wrapper">
      <nuxt-link to="/">
        <h4 class="moyu-title margin-none">
          Fish <span>Hub</span>
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
        <div style="margin-bottom: 5px" class="post-btn badge" @click="post">
          创建主题
        </div>
      </menu>
    </div>
  </header>
</template>

<script setup lang="ts">
const router: any = useRouter();
const { $api } = useNuxtApp();

import util from "~~/util";

const post = () => {
  const token = useCookie("token", { maxAge: 2419200 });
  if (!token.value) {
    util.wxLogin($api);
    return;
  }
  router.push("/post");
};
</script>
