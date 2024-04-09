import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/LeetCode/",
  "/MySQL/",
  {
    text: "Microservices",
    icon: "flex",
    prefix: "/Microservices/",
    children: [
      {
        text: "SpringCloud",
        // icon: "lightbulb",
        // prefix: "SpringCloud/",
        link: "SpringCloud.md",
      },
      {
        text: "SpringCloud Alibaba",
        link: "SpringCloud Alibaba.md",
        // icon: "lightbulb",
        // prefix: "foo/",
      },
    ],
  },
]);

