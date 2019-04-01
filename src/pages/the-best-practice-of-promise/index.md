---
path: "/the-best-practice-of-promise"
title: "promise 最佳实践"
date: "2019-03-29"
tags: ["最佳实践"]
---

可以看看这篇文章<http://www.datchley.name/es6-promises/>

Promise.all
============

* `Promise.all` 可以用于依赖多项异步操作的返回结果才能继续, 如果有任何一个异步操作发生了错误都无法再继续执行下去.

Promise.race
============

`Promise.race` 可以用于在发起异步请求的时候创建一个`setTimeout` 异步操作, 如果异步请求迟迟没有返回, 我们不能一直 Loading 下去, 让 `setTimeout` 返回, 来处理异步请求超时的情况.
