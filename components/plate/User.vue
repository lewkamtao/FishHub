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
      font-weight: bold;
      font-size: 22px;
      margin-top: 10px;
    }
    .description {
      color: #999;
    }
    .group {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      width: 90%;
      div {
        text-align: left;
        .value {
          font-size: 24px;
        }
        .key {
          font-size: 16px;
          color: #999;
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
</style>

<template>
  <div class="paper user" id="userPlate">
    <div v-if="token && user.data" class="user-info">
      <div popover-left="退出登录" class="loginOut-btn margin-none">
        <img
          @click="loginOut"
          src="@sicons/ionicons5/LogInOutline.svg"
          alt=""
          srcset=""
        />
      </div>

      <base-geek-avatar
        style="width: 100px"
        :src="user.data.avatar"
      ></base-geek-avatar>
      <div class="nickname">{{ user.data.nickname }}</div>
      <div class="description">{{ user.data.description || "暂无介绍" }}</div>
      <input class="alert-state" id="alert-1" type="checkbox" />
      <div
        class="alert alert-secondary dismissible margin-top margin-bottom-none"
      >
        由于微信隐私政策，在2021年12月27日之后，不再为第三方提供头像、昵称信息。现在，你可以点击头像设置个人信息。
        <label class="btn-close" for="alert-1">X</label>
      </div>
      <div class="group">
        <div class="likes">
          <div class="value">{{ user.data.likes_num || 0 }}</div>
          <div class="key">获赞</div>
        </div>
        <div class="comments">
          <div class="value">{{ user.data.comments_num || 0 }}</div>
          <div class="key">评论</div>
        </div>
        <div class="article">
          <div class="value">{{ user.data.articles_num || 0 }}</div>
          <div class="key">话题</div>
        </div>
      </div>
    </div>
    <div class="login-box">
      <!-- <a
        v-if="!token"
        href="https://api.tngeek.com/mall/github/login"
        class="login-btn github"
      >
        <img
          class="icon no-responsive no-border"
          src="@sicons/ionicons5/LogoGithub.svg"
        />
        使用 Github 登录
      </a> -->
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
import util from "~~/util";

const loading = ref(false);

const loginOut = () => {
  token.value = "";
  location.reload();
};

const wxLogin = async () => {
  loading.value = true;
  qrcode.value = await $api.GET("/wx/loginQrcode", {});
  const geekModalSwitch: any = document.getElementById("geek-modal");
  const geekModalBody: any = document.getElementById("geek-modal-body");

  geekModalBody.innerHTML = `<label class="btn-close" for="geek-modal">X</label>

  <div class="wxlogin-box" style="
  width:300px;
    display: flex;
    align-items: center;
    flex-direction: column;">
  <div style="display: flex; align-items: center;">
<svg style="width:30px;height:30px;margin-right:10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path data-name="XMLID 501 -1" d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35" fill="#2ba245"></path><path data-name="XMLID 505 -7" d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" fill="#2ba245"></path></svg>
       微信扫码登录</div>
  <img style="width:250px;height:250px;border: 2px #000 solid; background:#eee;margin:15px 10px" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${qrcode.value.data.ticket}">
  <p style="width:250px;color:#999">打开微信App，点击聊天列表右上角加号，点击扫一扫。</p>
  </div>  `;
  geekModalSwitch.checked = true;
  loading.value = false;
  checkLogin({ ticket: qrcode.value.data.ticket });
};

const checkLogin = async ({ ticket }) => {
  let loginRes: any = await $api.GET("/wx/checkLogin", { ticket: ticket });
  if (loginRes.code == 200) {
    const token = useCookie("token", { maxAge: 2419200 });
    token.value = loginRes.data;
    const geekModalSwitch: any = document.getElementById("geek-modal");
    geekModalSwitch.checked = false;
    user.value = await $api.GET("/user", {});
    util.addAlert({
      type: "success",
      text: "登录成功",
    });
  } else if (loginRes.code == 404) {
    setTimeout(() => {
      checkLogin({ ticket });
    }, 1000);
  } else {
    util.addAlert({
      type: "danger",
      text: "服务端发送错误" + loginRes.tip,
    });
  }
};

let user = ref({} as any);
let qrcode = ref({} as any);

const getUser = async () => {
  if (token.value) {
    user.value = await $api.GET("/user", {});
  }
};

onMounted(() => {
  getUser();
});
</script>
