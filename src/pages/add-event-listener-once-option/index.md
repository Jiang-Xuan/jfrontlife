---
path: "/add-event-listener-once-option"
title: "addEventListener 方法只触发一次的方法"
date: "2019-03-28"
tags: []
---

由于 [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 的 [options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters) 的兼容性问题, 可以自己创建一个 once 监听器.

<https://stackoverflow.com/questions/3393686/only-fire-an-event-once>

```js
addEventListenerOnce(target, type, listener) {
  target.addEventListener(type, function fn(event) {
    target.removeEventListener(fn)
    listener(event)
  })
}
```
