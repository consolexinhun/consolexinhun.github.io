// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端', link: '/web/', items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章', items: [
          { text: 'JavaScript', link: '/pages/0f6a0ac99b62ede5/' },
        ],
      },
    ],
  },
  {
    text: '页面', link: '/ui/', items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
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
