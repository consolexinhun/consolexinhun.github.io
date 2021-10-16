msg='添加评论插件'
githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github gh-pages分支