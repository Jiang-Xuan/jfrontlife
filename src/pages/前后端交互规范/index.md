---
path: "/前后端交互规范"
date: "2019-04-02"
title: "前后端交互规范"
tags: ["规范"]
---

## 请求方法规范

采用 REST 规范

* 获取数据 `GET`
* 修改数据 `POST`

## 接口格式规范

接口根字段包含 `success<boolean>`, `code<number?>`, `message<string?>`, `data<{}>` 字段

* success 字段表示接口请求的业务后端是否处理成功
* code 一个的接口响应会出现多场景, 用该 code 区分多场景, 注意该 code 必须是一个数字
* message 表示接口响应当前的状态信息, 提示信息
* data 接口响应的数据, 默认必须为一个空对象, 即便在错误的情况下也需要返回一个空对象

### 列表接口格式规范

#### 请求规范

**这是一个 `GET` 请求**

一个表格的数据展示一般会有筛选项的出现, 复杂的筛选项会导致请求的复杂, 所以必须有一个规范来约束请求的数据格式

表格的筛选项一般分为 input 筛选, 也就是文字筛选

```text
drugName=foo&drugType=barbar
```

单选项筛选, radio 式的筛选, 一般用于非是即否的选项, 禁止使用数组来提交单选项式的筛选, 如果考虑后续有可能升级为多选项式的筛选, 也应该重新评估, 不需要做向后兼容.

由于 url 参数不支持 Boolean, 所以字符串 `'-1'` 代表 false, `'1'` 代表 true.

```text
// bad
hasFoo[0]='1'&hasBar[0]='-1'

// good
hasFoo='1'&hasBar='-1'
```

多选项式筛选, multiple radio 式的筛选, 一般用于多个选项的筛选, 必须用数组进行提交, 即使目前只有一个选项

```text
drugType[0]='化药'&drugType[1]='生物制药'
```

#### 响应规范

大量的数据, 需要翻页

该规范分为两种:

* 用 head 来控制整个表格的数据展示

在表格的结构由接口控制的时候尤为有用, 此时数据的渲染的主动权是 head 字段控制.

渲染数据的方式为遍历 head 字段, head 字段为一个数组, 内部的 对象 中的 dataIndex 来标识这从 list 内部的对象中的哪一个字段中拿取数据

```typescript
{
  // 业务是否成功
  success: boolean,
  // 业务 code
  code?: number,
  // 接口信息
  message?: string,
  // 业务数据
  data: {
    head?: {
      name: string,
      dataIndex: string,
      ...
    }[],
    // 列表数据
    list: [{
      // list 数据一般都会需要 id 字段, 建议返回!!
      id: string,
    }],
    // 列表翻页数据
    pagination: {
      current: number,
      pageSize: number,
      total: number,
    },
  },
}
```

* 用 list 来控制整个表格的数据展示

接口的表格头不需要接口来控制, 表格的结构是由前端来写在代码中的, 此时数据的渲染的主动权在 前端

渲染数据的方式为, 前端写定表格的结构, 然后从 list 中拿取对应的数据, 但是此时表格的头部有可能需要一部分的数据由接口返回, 所以 head 不再是一个数组类型

```typescript
{
  // 业务是否成功
  success: boolean,
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
