#!/bin/bash

set -ex

if [ ! "$1" ]; then
    msg="null"
else
    msg="$1"
fi

githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

# git pull origin master

# npm install && npm run build  # npm install 有毒
yarn && yarn build  
# yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist


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

