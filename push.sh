msg='加在线编辑'
githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github gh-pages分支