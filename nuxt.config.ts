import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    TOKEN: process.env.TOKEN,
  },
  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      {
        src: "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0",
      },
      {
        src: "./util/widget.js",
      },
    ],
    link: [],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ":root { color: red }", type: "text/css" },
    ],
  },

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    "@/assets/css/paper.css",
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],
});
