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
  border-top: 1px solid var(--muted-light);
  .badge {
    margin-bottom: 10px;
    font-weight: normal;
    color: #fff;
  }
  .badge:first-child {
    margin-left: 0px;
  }
}
.picList-box {
  .pic-list {
    width: 100%;
    height: auto;

    img {
      width: 100%;
    }
  }
  .content {
    white-space: pre-line;
    line-height: 34px; margin-top: 30px;
  }
}
</style>

<template>
  <div class="detail margin-top">
    <base-nav type="detail" :articleData="article.data"> </base-nav>
    <div class="article paper margin-none" id="article-editor">
      <div v-if="article.data.layout == 'markdown'">
        <v-md-preview :text="article.data.content"></v-md-preview>
      </div>
      <div v-if="article.data.layout == 'picList'" class="picList-box">
        <div class="pic-list">
          <img
            v-for="(item, index) in article.data.picList"
            :key="`pic${index}`"
            :src="item.url"
            alt=""
            srcset=""
          />
        </div>
        <div class="content">{{ article.data.content }}</div>
      </div>
      <div
        class="tags-box margin-top padding-top"
        v-if="article.data.tags.length > 0"
      >
        <nuxt-link
          :to="'/'"
          v-for="(item, index) in article.data.tags"
          :key="`tags${index}`"
          class="badge danger"
        >
          <span v-text="item.key"></span>
        </nuxt-link>
      </div>
    </div>

    <base-comment-list :article_id="article.data._id"></base-comment-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const route: any = useRoute();
const { $api } = useNuxtApp();
const article: any = await $api.GET("/article/" + route.query.id, {});

onMounted(() => {
  try {
    setTimeout(async () => {
      // 处理文章图片fancybox
      let imgdom: any = "";
      let imgs: any = document
        .getElementById("article-editor")
        .getElementsByTagName("img");
      for (let i = 0; i < imgs.length; i++) {
        // 如果img标签的父级是a标签，不增加fancybox
        let node: any = imgs[i].parentNode.localName;
        if (node === "a") {
          continue;
        }
        let elem = document.createElement("a");
        elem.setAttribute("data-fancybox", "gallery");
        imgdom = imgs[i].cloneNode(true);
        elem["href"] = imgdom.src;
        elem.appendChild(imgdom);
        imgs[i].parentNode.replaceChild(elem, imgs[i]);
      }
      // 处理文章a标签跳转到新窗口
      Array.from(
        document.getElementById("article-editor").getElementsByTagName("a")
      ).forEach(function (aTag) {
        aTag.setAttribute("target", "_blank");
        aTag.setAttribute("rel", "external nofollow noopener noreferrer");
      });
    }, 100);
  } catch {}
});
</script>
