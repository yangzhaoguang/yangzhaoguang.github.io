import { navbar } from "vuepress-theme-hope";

//  图标地址：https://fontawesome.com/search?q=Memory&o=r
export default navbar([
  "/",
  "/MySQL/",
  {
    text: "LeetCode",
    icon: "code",
    link: "LeetCode/数组.md"
  },
  {
    text: "缓存中间件",
    icon: "fa-solid fa-database",
    // prefix: "/Microservices/",
    children: [
      {
        text: "Redis",
        // icon: "lightbulb",
        // prefix: "SpringCloud/",
        link: "Redis/缓存双写一致性问题.md",
      }
    ],
  },
  {
    text: "Microservices",
    icon: "leaf",
    // prefix: "/Microservices/",
    children: [
      {
        text: "SpringCloud",
        // icon: "lightbulb",
        // prefix: "SpringCloud/",
        link: "Microservices/SpringCloud.md",
      },
      {
        text: "SpringCloud Alibaba",
        link: "Microservices/SpringCloud Alibaba.md",
        // icon: "lightbulb",
        // prefix: "foo/",
      },
    ],
  },
]);

