import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [],

    link: [
      {
        rel: "stylesheet",
        href: "https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/public/style/paper.css",
      },
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ":root { color: red }", type: "text/css" },
    ],
  },

  css: ["@/assets/css/main.scss"],
});
