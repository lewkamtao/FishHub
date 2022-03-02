<style lang="scss" scoped>
.user-info {
  padding: 15px;
  width: 240px;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  .top {
    display: flex;

    .left {
      cursor: pointer;
      margin-right: 10px;
      img {
        border: 1px rgba(0, 0, 0, 0.2) solid !important;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .right {
      width: calc(100% - 70px);
      .nickname {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 14px;
        margin-right: 10px;
      }
      .description {
        font-size: 12px;
        color: #999;
      }
    }
  }
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
.handle-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97px;
    height: 30px;
    border-bottom-left-radius: 7px 265px;
    border-bottom-right-radius: 265px 7px;
    border-top-left-radius: 265px 7px;
    border-top-right-radius: 5px 265px;
    cursor: pointer;
  }
}
</style>

<template>
  <div @click.stop class="user-info paper">
    <div class="top">
      <div class="left">
        <div @click="toDetail">
          <img :src="user.avatar" alt="" srcset="" />
        </div>
      </div>
      <div class="right">
        <div class="nickname">
          <div @click="toDetail">
            <span class="margin-right-small"> {{ user.nickname }}</span>
          </div>
          <base-geek-gender :gender="user.gender"></base-geek-gender>
        </div>
        <div class="description">{{ user.description || "暂无介绍" }}</div>
      </div>
    </div>
    <div class="info-box">
      <div class="item">
        <img src="@sicons/ionicons5/BusinessOutline.svg" alt="" srcset="" />{{
          user.company || "-"
        }}
      </div>
      <div class="item">
        <img src="@sicons/ionicons5/LocationOutline.svg" alt="" srcset="" />{{
          user.location || "-"
        }}
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
    <div class="handle-box">
      <!-- <div @click="gz" class="badge secondary">关 注</div>
      <div @click="sx" class="badge danger">私 信</div> -->
      <nuxt-link
        class="badge secondary"
        style="width: 100%; color: #fff"
        :to="`/user/${user._id}`"
      >
        进入主页</nuxt-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  user: {
    type: Object,
    default: {
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaCAYAAAA/xl1SAAAA/klEQVR4nO3SQREAIADDsIEo/EtDRj+JhF7PtjeIXOEpGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQBSRmQlAFJGZCUAUkZkJQB6Wz7qpMA6icD3IEAAAAASUVORK5CYII=",
    },
  },
});
import util from "@/util/index";
const route: any = useRoute();
const router: any = useRouter();

const user_id = useCookie("user_id", { maxAge: 2419200 });

const gz = () => {
  util.addAlert({
    type: "danger",
    text: "对方设置不允许关注",
  });
};

const sx = () => {
  util.addAlert({
    type: "danger",
    text: "对方拒绝私信",
  });
};

const toDetail = () => {
  router.push(`/user/${props.user._id}`);
};

let imgStyle = ref(`border-bottom-left-radius: ${util.randomInRange(
  225,
  285
)}px ${util.randomInRange(225, 285)}px;
    border-color: var(--primary);
    border-bottom-right-radius:  ${util.randomInRange(
      225,
      285
    )}px ${util.randomInRange(225, 285)}px;
    border-top-left-radius:  ${util.randomInRange(
      225,
      285
    )}px ${util.randomInRange(225, 285)}px;
    border-top-right-radius: ${util.randomInRange(
      225,
      285
    )}px  ${util.randomInRange(225, 285)}px;`);
</script>
