---
path: "/MR+CR流程梳理"
title: "Merge request, Code review 流程梳理"
date: "2019-04-23"
tags: [""]
---

提升代码质量可以通过 Merge request + Code review 来做, 但是在实施中会遇到一些问题, 在这里梳理出一个流程来清晰整个过程

## 第一期规范

https://7k6qrzpnq.codesandbox.io

存在的问题:

* 目前前端资源发布系统 dynamic 分支目前不支持单独发布文件, 但是 insight 项目的标新文件在 tutorial 文件夹下, 需要单独发布
* 环境的切换比较复杂, 需要产品测试的时候手动切换, 前端无法控制整体的切换环境, 无法避免有时候忘记切换环境的问题
