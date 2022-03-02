<style lang="scss" scoped>
.user {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-info {
    display: flex;
    flex-direction: column;
    width: 100%;

    .nickname {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      margin-top: 10px;
      margin-right: 10px;
    }
    .description {
      color: #999;
    }
    .group {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      width: 90%;
      a {
        text-align: left;
        .value {
          font-size: 20px;
          color: var(--primary);
        }
        .key {
          font-size: 14px;
          color: #999;
          font-weight: 200;
        }
      }
    }
  }
  .login-box {
    .login-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      margin: 0 auto;
      cursor: pointer;
      color: #fff;
      background: #754b9d;

      font-size: 14px;
      border: none;
      transition: all 0.12s;

      img {
        width: 24px;
        filter: invert(100%);
        margin-right: 5px;
      }
    }

    .donut {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 4px solid rgba(255, 255, 255, 0.4);
      border-left-color: #ffffff;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      opacity: 0;
      animation: donut-spin 0.8s linear infinite;
      transition: all 0.15s;
      transform: translateX(0px);
    }
    .loading {
      width: 40px !important;
      overflow: hidden;
      .donut {
        opacity: 1;
      }
      img {
        opacity: 0;
      }
    }
    @keyframes donut-spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    .github {
      background: -moz-linear-gradient(top, #973cb2, #754b9d);
      background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(#973cb2),
        to(#754b9d)
      );
      outline: 4px rgba($color: #0071de, $alpha: 0) solid;
    }

    .wechat {
      background: -moz-linear-gradient(top, #1aad19, #2ba245);
      background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(#1aad19),
        to(#2ba245)
      );
      width: 120px;
      height: 40px;
      outline: 4px rgba($color: #5ec051, $alpha: 0) solid;
    }
    .github:hover {
      transform: none;
      outline: 4px rgba($color: #0071de, $alpha: 0.4) solid;
    }
    .wechat:hover {
      transform: none;
      outline: 4px rgba($color: #37974c, $alpha: 0.4) solid;
    }
    .login-btn:active {
      transform: scale(0.97);
    }
    p {
      color: #999;
      font-size: 14px;
      span {
        color: var(--primary);
        margin: 0px 3px;
      }
    }
  }
  .loginOut-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.geek-model-box {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  z-index: 999;
  transition: background 0.25s;
  background: rgba(0, 0, 0, 0.35);
}

.info-box {
  margin-top: 20px;
  .item {
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    opacity: 0.4;
    margin-bottom: 5px;
    img {
      width: 14px;
      margin-top: 2px;
      margin-right: 10px;
    }
  }
}
</style>

<template>
  <div class="paper user" id="userPlate">
    <div v-if="token && user.data" class="user-info">
      <div popover-bottom="退出登录" class="loginOut-btn margin-none">
        <img
          @click="loginOut"
          src="@sicons/ionicons5/LogInOutline.svg"
          alt=""
          srcset=""
        />
      </div>
      <base-geek-avatar
        style="width: 100px; height: 100px"
        :user="user.data"
      ></base-geek-avatar>
      <div class="nickname">
        <base-geek-nickname :user="user.data"></base-geek-nickname>
      </div>
      <div class="description">{{ user.data.description || "暂无介绍" }}</div>
      <div class="info-box">
        <div class="item">
          <img src="@sicons/ionicons5/BusinessOutline.svg" alt="" srcset="" />{{
            user.data.company || "-"
          }}
        </div>
        <div class="item">
          <img src="@sicons/ionicons5/LocationOutline.svg" alt="" srcset="" />{{
            user.data.location || "-"
          }}
        </div>
        <div class="item">
          <img src="@sicons/ionicons5/MailOutline.svg" alt="" srcset="" />
          {{ user.data.email || "-" }}
        </div>
        <div class="item">
          <img src="@sicons/ionicons5/HomeOutline.svg" alt="" srcset="" />
          {{ user.data.blog || "-" }}
        </div>
      </div>

      <input class="alert-state" id="alert-1" type="checkbox" />
      <div
        v-if="user.data.nickname.indexOf('新用户') >= 0"
        class="alert alert-secondary dismissible margin-top margin-bottom-none"
      >
        由于微信隐私政策，在2021年12月27日之后，不再为第三方提供头像、昵称信息。现在，你可以点击头像设置个人信息。
        <label class="btn-close" for="alert-1">X</label>
      </div>
      <div class="group">
        <nuxt-link :to="`/user/${user_id}`" class="likes">
          <div class="value">{{ util.numFormat(user.data.like_num) }}</div>
          <div class="key">获赞</div>
        </nuxt-link>
        <nuxt-link :to="`/user/${user_id}`" class="comments">
          <div class="value">{{ util.numFormat(user.data.comment_num) }}</div>
          <div class="key">评论</div>
        </nuxt-link>
        <nuxt-link :to="`/user/${user_id}`" class="article">
          <div class="value">{{ util.numFormat(user.data.article_num) }}</div>
          <div class="key">主题</div>
        </nuxt-link>
      </div>
    </div>
    <div class="login-box">
      <a v-if="false"
        href="https://api.tngeek.com/mall/github/login"
        class="login-btn github"
      >
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/LogoGithub.svg"
        />
        使用 Github 登录
      </a>
      <div
        v-if="!token"
        class="login-btn wechat"
        @click="wxLogin"
        :class="{ loading: loading }"
      >
        <span class="donut"></span>
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/LogoWechat.svg"
        />
        {{ loading ? "" : "微信登录" }}
      </div>
    </div>
    <!-- <div class="row flex-spaces child-borders">
      <nuxt-link to="/login" class="paper-btn margin" >注册登录</nuxt-link>
    </div> -->

    <p v-if="!token">
      摸鱼办是一个<span>分享生活</span>和<span>释放压力</span>的地方，大胆表达💛可以让你释放压力。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $api } = useNuxtApp();
const token = useCookie("token", { maxAge: 2419200 });
const user_id = useCookie("user_id", { maxAge: 2419200 });

import util from "~~/util";

const loading = ref(false);

let user = ref({} as any);
let qrcode = ref({} as any);

const loginOut = () => {
  token.value = "";
};

const wxLogin = () => {
  util.wxLogin($api);
  showLoading();
};
const showLoading = () => {
  loading.value = true;
  setTimeout(() => {
    const geekModalSwitch: any = document.getElementById("geek-modal");
    if (!geekModalSwitch.checked) {
      loading.value = false;
    } else {
      showLoading();
    }
  }, 1000);
};

user.value = await $api.GET("/user", {});
user_id.value = user.value.data._id;
onMounted(() => {});
</script>
