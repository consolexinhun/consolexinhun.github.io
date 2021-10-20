#!/bin/bash

set -e

msg='欧拉图'
githubUrl=git@github.com:consolexinhun/consolexinhun.github.io.git

git pull origin master

git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github gh-pages分支