<style lang="scss" scoped>
footer {
  position: relative;
  
  margin-top: 30px;
  .wrapper {
    color: #999;
    padding: 15px;
    .menu {
      border-bottom: 1px var(--muted-light) solid;

      a {
        position: relative;
        
        color: var(--primary);
        margin-right: 30px;
      }
      a::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -15px;
        content: "";
        width: 3px;
        height: 3px;
        background: rgba($color: #000, $alpha: 0.15);
        font-weight: bold;
      }
      a:last-child::after {
        display: none;
      }
      a:hover {
        color: var(--primary);
        border-bottom-color: #41403e;
        border-bottom-color: var(--primary);
        border-bottom-left-radius: 15px 3px;
        border-bottom-right-radius: 15px 5px;
        border-bottom-style: solid;
        border-bottom-width: 5px;
      }
    }
  }
  .slogan {
    font-size: 14px;
    color: #999;
  }
  .beian {
    margin-top: 5px;
    a {
      color: #999;
      
      font-size: 14px;
      margin-right: 10px;
    }
    a:hover {
      text-decoration: underline;
      color: var(--primary);
    }
  }
  .dev-info {
    color: #999;
    font-size: 14px;
  }
}
</style>

<template>
  <footer class="paper margin-none padding">
    <div class="wrapper">
      <div class="menu padding-bottom">
        <nuxt-link to="/about"> 关于 </nuxt-link>
        <nuxt-link to="/help"> 帮助文档 </nuxt-link>
        <nuxt-link to="/open"> 开放能力 </nuxt-link>
        <nuxt-link to="/vision"> 我们的愿景 </nuxt-link>
      </div>
      <div class="slogan margin-top">
        即使生活一地鸡毛，也要偶尔抬头仰望星空。
      </div>
      <div class="dev-info margin-top">
        Powered by Nuxt3. Copyright © Lew Kamtao
      </div>
      <div class="beian">
        <a target="_blank" href="http://beian.miit.gov.cn/"
          >粤ICP备18056223号
        </a>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44180202000511"
          >粤公网安备 44180202000511号</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref("ads");
</script>
