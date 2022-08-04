// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: "算法", link: "/algorithm/", items:[
      {text: "算法基础", items:[
        {text: "图论", link: "/pages/5a514b/"},
        {text: "字符串", link: "/pages/3ce601/"},
        {text: "动态规划", link: "/pages/37ebac/"},
        {text: "二分", link: "/pages/cc5f84/"},
        {text: "滑动窗口", link: "/pages/30b0a0/"},
        {text: "排序", link: "/pages/a0391b/"}
      ]}
    ],
  },
  {
    text: "C++", link: "/cplusplus/", items:[
      {text: "相关书籍", items:[
          {text: "现代C++编程", link: "/modern_cpp_programming/"}
      ]}
    ]
  },
  {
    text: '分类', link: '/categories/'
  },
  {
    text: '标签', link: '/tags/'
  },
  {
    text: '归档', link: '/archives/'
  }
]
