<style lang="scss" scoped>
.article {
  border-top: none !important;
  padding: 20px;
}
a {
  margin: 0px 5px;
  opacity: 0.7;
  span {
    font-weight: normal;

    color: var(--color);
  }
}
.tags-box {
  .badge {
    margin-bottom: 10px;
    font-weight: normal;
  }
  .badge:first-child {
    margin-left: 0px;
  }
}
</style>

<template>
  <div class="detail margin-top">
    <base-nav type="detail" :articleData="article.data"> </base-nav>
    <div class="article paper margin-none">
      <v-md-preview :text="article.data.content"></v-md-preview>
      <div class="tags-box margin-top" v-if="article.data.tags.length > 0">
        <nuxt-link
          :to="'/'"
          v-for="(item, index) in article.data.tags"
          :key="`tags${index}`"
          class="badge"
        >
          <span v-text="item.key"></span>
        </nuxt-link>
      </div>
    </div>
    <base-comment-list :article_id="article.data._id"></base-comment-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const route: any = useRoute();
const { $api } = useNuxtApp();
const article: any = await $api.GET("/article/" + route.query.id, {});
</script>
