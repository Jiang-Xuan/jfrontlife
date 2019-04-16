---
path: "/jsdoc规范"
title: "jsdoc规范"
date: "2019-04-16"
tags: ["规范"]
---

在写 js 代码的时候经常会写 jsdoc, 这里记录下常用的 jsdoc

## 数组

### 指定数据元素的数据类型

```js
/**
 * @param {Array.<Object>} foo
 * @return {Array.<Object>}
 */
```

### 仅仅指定类型为数组, 数组元素为任意类型

```js
/**
 * @param {Array} foo
 */
```

### 指定数组元素为 Object 时, Object 的结构

```js
/**
 * @param {Array.<{foo: Number, bar: String}>} foo
 *?
```