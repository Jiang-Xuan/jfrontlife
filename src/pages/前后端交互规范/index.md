---
path: "/前后端交互规范"
date: "2019-04-02"
title: "前后端交互规范"
tags: ["规范"]
---

## 接口格式规范

接口根字段包含 `success<boolean>`, `code<number>?`, `message<string?>`, `data<object = {}>` 字段

* success 字段表示接口请求的业务后端是否处理成功
* code 一个的接口响应会出现多场景, 用该 code 区分多场景, 注意该 code 必须是一个数字
* message 表示接口响应当前的状态信息, 提示信息
* data 接口响应的数据, 默认必须为一个空对象, 即便在错误的情况下也需要返回一个空对象

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
