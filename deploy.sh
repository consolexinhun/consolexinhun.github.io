#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist


msg='deploy'

GITHUB_TOKEN="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"

githubUrl=https://consolexinhun:${GITHUB_TOKEN}@github.com/consolexinhun/consolexinhun.github.io.git

# githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

git config --global user.name "consolexinhun"
git config --global user.email "consolexin@gmail.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支


cd -
rm -rf docs/.vuepress/dist

git init
git add -A 
git commit -m "deploy 侧边栏 push"

git push -f $githubUrl master:master
