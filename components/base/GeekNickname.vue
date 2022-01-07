<style lang="scss" scoped>
.nickname {
  position: relative;
  .nickname-text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: all 0.25s;
    color: var(--primary-dark-10);
  }
  .nickname-text:hover {
    color: var(--primary);
  }
  .name {
    margin-right: 5px;
  }
  .gender {
    margin-top: -4px;
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
.nickname:hover {
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
  <div @mouseenter="setShow" @mouseleave="clearShow" class="nickname">
    <transition name="fade">
      <div v-if="isShow" class="user-info">
        <base-geek-user-info :user="user"></base-geek-user-info>
      </div>
    </transition>

    <div class="nickname-text" @click.stop="toDetail">
      <div class="name">{{ user.nickname }}</div>

      <div class="gender">
        <svg
          v-if="user.gender == 1"
          t="1640968460255"
          class="icon"
          style="
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1116"
        >
          <path
            d="M828.875 765.657c-191.159-16.86-202.516-102.922-202.516-102.922v-85.997c111.656-43.063 145.76-207.699 145.76-207.699 0-65.457-32.153-67.281-32.153-67.281V195.093c7.486-177.753-100.33-136.61-102.25-136.61-1.791 0-60.466-46.774-60.466-46.774-41.751-31.8-134.499 11.262-134.499 11.262l-3.839 0.064c-104.937 2.751-132.387 78.479-132.387 78.479l1.92 196.437c-54.804 0-47.35 76.719-47.35 76.719 0 84.142 147.616 200.148 147.616 200.148 9.47 110.472-49.174 166.46-49.174 166.46s-100.266 3.711-213.84 37.432c-2.72 0.863-5.344 1.6-7.967 2.463C30.617 817.421 0 920.855 0 920.855v101.033l463.579 1.888 68.465-1.92h491.732V943.25c1.92-115.815-194.901-177.593-194.901-177.593z m-244.65 129.22l-71.25 128.675-69.616-128.676-16.124-64.05 30.68-136.354h111.656l29.178 136.354-14.525 64.05z"
            p-id="1117"
            fill="#70b8de"
            data-spm-anchor-id="a313x.7781069.0.i0"
          ></path>
        </svg>
        <svg
          v-if="user.gender == 2"
          t="1640968137864"
          class="icon"
          style="
            width: 1.2em;
            height: 1.2em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7560"
        >
          <path
            d="M613.312 626.496v-11.2h151.296V318.08c0-124.736-113.152-225.856-252.608-225.856S259.392 193.344 259.392 318.08v297.216h151.36v11.072h-0.256L115.648 820.16v107.136H908.48v-105.92l-295.168-194.88z m7.68 186.752c-72.192 69.824-109.504-36.416-109.504-36.416s-37.312 106.24-109.568 36.416c0 0-31.744-20.544-35.136-158.208l144.704 121.728L656.192 655.04c-3.392 137.6-35.2 158.208-35.2 158.208z"
            p-id="7561"
            fill="#d49696"
            data-spm-anchor-id="a313x.7781069.0.i10"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
  isShowInfo: {
    type: Boolean,
    default: false,
  },
});
import util from "@/util/index";
const router: any = useRouter();

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
  router.push(`/userHome?id=${props.user._id}`);
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
