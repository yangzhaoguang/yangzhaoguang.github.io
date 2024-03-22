import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "鲨瓜",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],

});
