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
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],

    link: [],
    style: [],
  },

  css: [
    "@/assets/css/paper.css",
    "@/assets/css/main.scss",
    "@/assets/css/fancybox.css",
    "@/assets/css/fancybox-theme.scss",
  ],
});
