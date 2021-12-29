import { defineNuxtPlugin } from "#app";

import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import Prism from "prismjs";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMarkdownEditor, {
    property: {
      id: "GA_MEASUREMENT_ID",
    },
  });
});
