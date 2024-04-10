import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/MySQL/",
  {
    text: "LeetCode",
    icon: "code",
    link: "LeetCode/数组.md"
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

