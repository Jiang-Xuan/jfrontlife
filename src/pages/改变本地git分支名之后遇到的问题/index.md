---
path: "/改变本地git分支名之后遇到的问题"
date: "2019-04-10"
title: "改变本地git分支名之后遇到的问题"
tags: []
---

## 问题 reproduce

1. checkout 出来一个 git 分支并命名 `git checkout -b feat-helol`
2. 将该分支 push 至远程 `git push origin feat-helol`
3. 不断的 commit
4. 发现 typo, `hello` 拼写成了 `helol`

## 开始的解决办法

1. 重命名本地分支 `git branch -m feat-hello`
2. 继续 push 的时候遇到了错误

```bash
jiangxuandeMacBook-Pro:insight_v2 jiangxuan 🍇  (feat-hello)
$git push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push origin HEAD:feat-helol

To push to the branch of the same name on the remote, use

    git push origin feat-hello

To choose either option permanently, see push.default in 'git help config'.
```

??? 什么情况

## 解决办法

来源于 https://stackoverflow.com/questions/24864700/fatal-the-upstream-branch-of-your-current-branch-does-not-match-the-name-of-you#answer-36281487

```bash
# 创建正确的远程分支
git push origin feat-hello
# 移除错误的远程分支
git push origin :feat-helol
# 修改该分支的上游分支
# git 官方文档 https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--ultupstreamgt
git branch feat-hello -u feat-hello
```

## 原理分析

导致git报错的配置是 `git config push.default`, [这里](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)是 git 关于该配置的官方文档

> By default, git config push.default is set to simple, meaning it will never be happy if the remote branch doesn't match the local branch's name, even if the remote is set as the upstream. Setting git config push.default upstream will suppress those errors.
> 引用于: https://stackoverflow.com/questions/24864700/fatal-the-upstream-branch-of-your-current-branch-does-not-match-the-name-of-you#comment-64377707

> 默认下, `git config push.default` 设置为 `smple`, 意味着如果远程的分之命名和本地分支的命名不一致, git 将永远不会'开心', 即使该远程分支被设置为上游分支. 设置 `git config push.default upstream` 可以抑制住该错误

上诉的解释虽然可以抑制错误, 但是不是预期的结果, 预期的结果为上游的分支命名也被修改

所以解决方案为 创建正确的远程分支, 删除错误的远程分支, 配置本地分支的上游分支
