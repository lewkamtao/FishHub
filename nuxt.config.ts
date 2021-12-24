import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    "@/assets/css/paper.css",
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],
});
