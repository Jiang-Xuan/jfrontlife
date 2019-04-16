---
path: "/前后端交互规范"
date: "2019-04-02"
title: "前后端交互规范"
tags: ["规范"]
---

## 接口格式规范

接口根字段包含 `success<boolean>`, `code<number?>`, `message<string?>`, `data<object = {}>` 字段

* success 字段表示接口请求的业务后端是否处理成功
* code 一个的接口响应会出现多场景, 用该 code 区分多场景, 注意该 code 必须是一个数字
* message 表示接口响应当前的状态信息, 提示信息
* data 接口响应的数据, 默认必须为一个空对象, 即便在错误的情况下也需要返回一个空对象

### 列表接口格式规范

大量的数据, 需要翻页

该规范分为两种:

* 用 head 来控制整个表格的数据展示

在表格的结构由接口控制的时候尤为有用, 此时数据的渲染的主动权是 head 字段控制.

渲染数据的方式为遍历 head 字段, head 字段为一个数组, 内部的 对象 中的 dataIndex 来标识这从 list 内部的对象中的哪一个字段中拿取数据

```js
{
  // 业务是否成功
  success<boolean>,
  // 业务 code
  code<number?>,
  // 接口信息
  message<string?>,
  // 业务数据
  data<{
    head?: <array<{
      name: <string>,
      dataIndex: <string>,
      ...
    } : object>?>,
    // 列表数据
    list: <array<object>>,
    // 列表翻页数据
    pagination: <{
      current: <number>,
      pageSize: <number>,
      total: <number>,
    } : object>,
  } : object>,
}
```

* 用 list 来控制整个表格的数据展示

接口的表格头不需要接口来控制, 表格的结构是由前端来写在代码中的, 此时数据的渲染的主动权在 前端

渲染数据的方式为, 前端写定表格的结构, 然后从 list 中拿取对应的数据, 但是此时表格的头部有可能需要一部分的数据由接口返回, 所以 head 不再是一个数组类型

```js
{
  // 业务是否成功
  success<boolean>,
  // 业务 code
  code<number?>,
  // 接口信息
  message<string?>,
  // 业务数据
  data<{
    head: {
      dataIndex: {
        filters: <any>
      }
    },
    // 列表数据
    list: <array<object>>,
    // 列表翻页数据
    pagination: <{
      current: <number>,
      pageSize: <number>,
      total: <number>,
    } : object>,
  } : object>,
}
```

## 接口命名规范

### 单个名词接口

```shell
https://example.com/api/list
````

### 多个名词接口

- 连字符命名法 (👍 最推荐)

```shell
https://example.com/api/foo-list
```

- 驼峰式命名法 (🤔 可以接受)

```shell
https://example.com/api/fooList
```

- 下划线式命名法 (😔 不推荐)

```shell
  https://example.com/api/foo_list
```
