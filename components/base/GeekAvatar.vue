<style lang="scss" scoped>
.avatar {
  position: relative;
  .avatar-img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    background: #eee;
    cursor: pointer;
    border: 1px rgba(0, 0, 0, 0.2) solid !important;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.25s;
  }
  .avatar-img:hover {
    border: 1px rgba(0, 0, 0, 0.6) solid !important;
  }
}
.user-info {
  position: absolute;
  width: 240px;
  height: auto;
  z-index: 99;
  display: none;
  left: 0px;
  top: 100%;
  margin-top: 0px;
}
.avatar:hover {
  .user-info {
    display: block;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div @mouseenter="setShow" @mouseleave="clearShow" class="avatar">
    <transition name="fade">
      <div v-if="isShow" class="user-info">
        <base-geek-user-info :user="user"></base-geek-user-info>
      </div>
    </transition>

    <img
      @click.stop="toDetail"
      :src="user.avatar"
      :style="imgStyle"
      alt=""
      srcset=""
      class="avatar-img"
    />
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
  isEdit: {
    type: Boolean,
    default: false,
  },
  isShowInfo: {
    type: Boolean,
    default: false,
  },
});
import util from "@/util/index";
const router: any = useRouter();
const route: any = useRoute();
const user_id = useCookie("user_id", { maxAge: 2419200 });

const isShow = ref(false);
const timer = ref(null);

const setShow = () => {
  if (props.isShowInfo) {
    clearTimeout(timer);
    timer.value = setTimeout(() => {
      isShow.value = true;
    }, 500);
  }
};
const clearShow = () => {
  if (props.isShowInfo) {
    isShow.value = false;
    clearTimeout(timer);
  }
};

const toDetail = () => { 
  if (props.isEdit) {
    return;
  }
  if (user_id.value == props.user._id) {
    router.push(`/userHome`);
  } else {
    router.push(`/userHome?id=${props.user._id}`);
  }
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
