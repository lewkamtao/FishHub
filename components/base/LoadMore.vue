<style lang="scss" scoped>
.moreLoading-more {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .not-more {
    color: #999;
    height: 40px;
    line-height: 40px;
    margin: 15px;
  }
  .more-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: 120px;
    height: 40px;
    margin: 15px;
    user-select: none;
    background: var(--secondary);
    transition: all 0.1s;
    border-radius: 50px;
    cursor: pointer;
    color: #fff; 
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
  }
  .moreLoading {
    width: 40px;
    .donut {
      opacity: 1;
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
}
@media (max-width: 992px) {
  .moreLoading-more {
    .more-btn {
      width: 100px;
      height: 35px;
    }
  }
}
</style>

<template>
  <div class="moreLoading-more">
    <div
      v-if="total != dataLength"
      @click="getMore"
      class="more-btn"
      :class="{ moreLoading: moreLoading }"
    >
      <span class="donut"></span>
      {{ moreLoading ? "" : "加载更多" }}
    </div>
    <div v-if="total == dataLength" class="not-more">暂无更多</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  pageSize: {
    type: Number,
    default: 0,
  },
  pageNum: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  moreLoading: {
    type: Boolean,
    default: false,
  },
  dataLength: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["getMore"]);

const getMore = () => {
  if (props.total == props.dataLength) {
    return;
  }
  emit("getMore");
};
</script>
