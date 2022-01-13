<style lang="scss" scoped>
.TodayNews {
  .badge {
    border-radius: 50px;
    margin-left: 10px;
    font-size: 12px;
    height: 20px;
    line-height: 17px;
    padding: 0px 5px;
    box-sizing: border-box;
    font-weight: normal;
  }
}
.toDetail{
  cursor: pointer;
}
</style>
<style lang="scss">
.TodayNews {
  .toDetail:hover {
    .text {
      text-decoration: underline;
    }
  }
}
</style>
<template>
  <div class="paper TodayNews" id="TodayNewsPlate">
    <h5 class="title margin-none">最新消息</h5>
    <ul class="padding-none">
      <div
        class="toDetail"
        v-for="(item, index) in commentList.data"
        :key="'item' + index"
        @click="toDetail(item.article_id)"
      >
        <base-comment-cart :layout="`news`" :comment="item">
        </base-comment-cart>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $api } = useNuxtApp();
const router: any = useRouter();

const toDetail = (id) => {
  router.push(`/article/${id}`);
};
const commentList = await $api.GET("/comment/list", {
  pageSize: 5,
  pageNum: 1,
});
</script>
