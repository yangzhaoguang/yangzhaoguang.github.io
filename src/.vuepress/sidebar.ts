import { sidebar } from "vuepress-theme-hope";



export default sidebar({
  "/LeetCode/": [
    {
      text: "LeetCode",
      icon: "/assets/icon/leetcode.png",

      // 是否可以折叠，默认为false
      collapsible: true,
      // children 选项设置链接列表。和导航栏一样: children: ["/posts/apple/1.md","/posts/apple/2.md"],
      children: "structure",
    },
  ],
  //
  "/MySQL/": [
    {
      text: "MySQL",
      icon: "/assets/icon/mysql.png",
      //  前缀
      // prefix: "MySQL/",
      //  链接
      // link: "MySQL/",
      // 是否可以折叠，默认为false
      collapsible: true,
      // children 选项设置链接列表。和导航栏一样: children: ["/posts/apple/1.md","/posts/apple/2.md"],
      children: "structure",
    },
  ],

  "/Microservices/": [
    {
      text: "Microservices",
      icon: "/assets/icon/microservices.png",
      //  前缀
      // prefix: "MySQL/",
      //  链接
      // link: "MySQL/",
      // 是否可以折叠，默认为false
      collapsible: true,
      // children 选项设置链接列表。和导航栏一样: children: ["/posts/apple/1.md","/posts/apple/2.md"],
      children: "structure",
    },
  ]
});
