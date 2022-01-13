<style lang="scss" scoped>
.user-home {
  .header {
    position: relative;
    width: 100%;
    min-height: 200px;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    .bg {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      opacity: 0.35;
      background: url(https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/public/images/fish/userHomeBg.svg);
      background-size: cover;
      background-position: center;
      filter: invert(70%);
    }

    .user-info {
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      padding: 10px;
      max-width: calc(50% - 40px);
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.65);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      border: 2px #eee solid;

      .left {
        margin-right: 10px;
      }
      .right {
        width: calc(100% - 60px);
        .nickname {
          display: flex;
          align-items: center;
          font-weight: bold;
          white-space: nowrap;
          font-size: 18px;
          margin-right: 10px;
          span {
            color: #000;
          }
        }
        .description {
          margin-top: 5px;
          font-size: 14px;
          white-space: pre-line;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
label {
  width: calc(100% / 2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.content-box {
  min-height: 300px;
  padding: 20px;
  .title {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .about {
    .info-box {
      .item {
        font-size: 14px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 5px;
        img {
          width: 14px;
          margin-top: 2px;
          margin-right: 10px;
        }
      }
    }
  }
}
.tabs .content {
  padding-top: 0px;
}
.edit-user {
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #fff;
  padding: 7px 15px;
}
@media (max-width: 992px) {
  .user-home {
    .header {
      width: 100%;
      min-height: 180px;
      padding: 10px;

      .user-info {
        position: static;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="paper user-home padding-none">
    <div class="header">
      <div class="bg"></div>
      <div class="user-info">
        <div class="left">
          <base-geek-avatar
            style="width: 60px; height: 60px"
            :user="user"
          ></base-geek-avatar>
        </div>
        <div class="right">
          <div class="nickname">
            <nuxt-link :to="`/user/${user._id}`">
              <span class="margin-right-small">
                {{ user.nickname }}</span
              ></nuxt-link
            >
            <base-geek-gender :gender="user.gender"></base-geek-gender>
          </div>
          <div class="description">{{ user.description || "暂无介绍" }}</div>
        </div>
      </div>
      <nuxt-link
        v-if="route.params.id == user_id"
        to="/user/edit"
        class="badge secondary edit-user"
        >编辑个人信息</nuxt-link
      >
    </div>
    <div class="row flex-spaces tabs">
      <input id="tab1" type="radio" name="tabs" checked />
      <label for="tab1">文章</label>

      <input id="tab2" type="radio" name="tabs" />
      <label for="tab2">关于</label>

      <div class="content padding-top-none" id="content1">
        <base-article-list :user_id="user._id"></base-article-list>
      </div>

      <div class="content" id="content2">
        <div class="content-box">
          <div class="about">
            <div class="title">个人信息</div>
            <div class="info-box">
              <div class="item">
                <img
                  src="@sicons/ionicons5/BusinessOutline.svg"
                  alt=""
                  srcset=""
                />{{ user.company || "-" }}
              </div>
              <div class="item">
                <img
                  src="@sicons/ionicons5/LocationOutline.svg"
                  alt=""
                  srcset=""
                />{{ user.location || "-" }}
              </div>
              <div class="item">
                <img src="@sicons/ionicons5/MailOutline.svg" alt="" srcset="" />
                {{ user.email || "-" }}
              </div>
              <div class="item">
                <img src="@sicons/ionicons5/HomeOutline.svg" alt="" srcset="" />
                {{ user.blog || "-" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $api } = useNuxtApp();
import util from "~~/util";
const route: any = useRoute();
const user = ref({} as any);
const user_id = useCookie("user_id", { maxAge: 2419200 });

user.value = (await $api.GET("/user/" + route.params.id, {})).data;
</script>
