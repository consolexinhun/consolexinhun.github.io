#!/bin/bash

set -e

msg='背包'

githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

git pull origin master

# npm install && npm run build  # npm install 有毒
# yarn && yarn build  
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# GITHUB_TOKEN="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"


# githubUrl=https://consolexinhun:${GITHUB_TOKEN}@github.com/consolexinhun/consolexinhun.github.io.git

# git config --global user.name "consolexinhun"
# git config --global user.email "consolexin@gmail.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支


# cd -
cd ../../..
rm -rf docs/.vuepress/dist


git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github gh-pages分支

