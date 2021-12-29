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
     
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ":root { color: red }", type: "text/css" },
    ],
  },

  css: ["@/assets/css/main.scss","@/assets/css/paper.css"],
});
