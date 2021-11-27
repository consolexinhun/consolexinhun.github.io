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
      ]},
      {text: "相关书籍", items:[
        {text: "《算法导论》", link: "/introduction_to_algorithm/"}
      ]}
    ],
  },
  {
    text: "C++", link: "/cplusplus/", items:[
      {text: "基础知识", items: [
        {text: "c++基础", link: "/pages/aa80a1/"},
      ]},
      {text: "相关书籍", items:[
          {text: "《c++与数据结构》", link: "/cplusplus_and_data_struct/"}
      ]}
    ]
  },{
    text: "基本功", link: "/base/", items:[
      {text: "计算机网络", items:[
        {text: "计算机网络", link: "/pages/353f94/"},
      ]},
      {text: "计算机系统", items:[
        {text: "计算机系统", link: "/pages/5c7a4b/"},
      ]},
      {text: "数据库", items: [
        {text: "数据库", link: "/pages/666851/"},
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
