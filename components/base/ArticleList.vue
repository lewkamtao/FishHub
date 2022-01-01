<style lang="scss" scoped>
.article-list {
  border-top: none !important;
}
</style>

<template>
  <div class="paper padding-none margin-top-none article-list">
    <base-article-cart
      v-for="(item, index) in articleList.data"
      :key="'item' + index"
      :article="item"
    ></base-article-cart>
    <base-load-more
      :pageSize="PageOptions.pageSize"
      :pageNum="PageOptions.pageNum"
      :total="articleList.total"
      :moreLoading="moreLoading"
      :dataLength="articleList.data.length"
      @getMore="getMore"
    ></base-load-more>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import util from "@/util/index.js";
const { $api } = useNuxtApp();

const articleType: any = ref("");

const route = useRoute();

watch(
  () => route.query.articleType,
  () => {
    articleType.value = route.query.articleType || "";
    PageOptions.value.pageNum = 1;
    updateArticleList("new");
  }
);

const articleList: any = ref({} as any);

const PageOptions = ref({
  pageNum: 1,
  pageSize: 10,
});
const moreLoading = ref(false);

// 初始请求
await $api
  .GET("/article/list", {
    pageNum: PageOptions.value.pageNum,
    pageSize: PageOptions.value.pageSize,
    type: articleType.value,
  })
  .then((res) => {
    if (res.code == 200) {
      articleList.value = res;
    }
  });

// 追加
const updateArticleList: any = (type) => {
  moreLoading.value = true;
  $api
    .GET("/article/list", {
      pageNum: PageOptions.value.pageNum,
      pageSize: PageOptions.value.pageSize,
      type: articleType.value,
    })
    .then((res) => {
      if (res.code == 200) {
        if (type == "new") {
          articleList.value = res;
        } else {
          articleList.value.data = articleList.value.data.concat(res.data);
        }
      }
      moreLoading.value = false;
    });
};

const getMore = () => {
  PageOptions.value.pageNum += 1;
  updateArticleList();
};
</script>
