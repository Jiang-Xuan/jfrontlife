---
path: "/常用的变量名规范"
date: "2019-04-01"
title: "常用的变量名规范"
tags: ["规范"]
---

一些变量名在不同的项目中都会有涉及, 但是没有一个规范, 总是做起来的时候才临时起意, 起一个什么名字

## 用户注册的用户名

使用 `username`. `username` 是一个单词, 所以不使用 `userName`, [bing 词典中 username](https://cn.bing.com/dict/search?q=username&qs=n&form=Z9LH5&sp=-1&pq=username&sc=2-8&sk=&cvid=8E5F5BD580FC41D49F6083637FC5FAC4)

## 用户手机号码

使用 `phoneNumber`. `phone`, `number` 是两个单词, 所以不使用 `phonenumber`

## 验证码 captcha

直接使用 `captcha`, 而不是使用 `capchaCode`, `captcha` 的意思就是验证码, 这是一个专用名词. [bing 词典中 captcha](https://cn.bing.com/dict/search?q=captcha&qs=n&form=Z9LH5&sp=-1&pq=captcha&sc=2-7&sk=&cvid=D822011928834B489EEC58D85D1DA17B)

## 涉及处理事件的方法命名

> 参考
> https://jaketrent.com/post/naming-event-handlers-react/
>

### React

#### Props

定义 props 名时, 使用 `on*`, 比如 `onClick`. 这和内置的事件处理约定一致. 自定义的组件也同样遵守该约定

```js
<button onClick={() => console.log('foooooooo')}>Click me.</button>
```

#### 处理函数命名

函数命名遵循相同的模式, 但是把 `on` 替换 `handle`, 比如 `handleClick`. 一个完整的例子:

```js
<MyComponent onClick={handleClick} />
```

更多:

* 提交表单 `handleSubmit`
* 点击按钮 `handleClick`, 同一个组件中有可能会监听多个和业务相关的 click 事件, 命名为 `onClick + 相关联的业务名称`, 例如
  * `handleClickRefresh`
  * `handleClickBack`
  * `handleClickChangeTab`
  * `handleClickGetTimeline`
  * `handleClickGetCaptcha`
* input 内容输入 [`handleInput`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput)
* input 内容变化 [`handleChange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange)

Notes: 有可能不止 handleClick 事件会发生一个组件内监听多个相同类型的事件, 命名方案和 `handleClick` 相同. `事件类型 + 相关联的业务名称`

## [Promise][promise] 变量名

* Promise 的参数 executor 函数接受到的两个参数, 第一个命名为 **resolve**, 第二个命名为 **reject**. 非特殊情况下不得使用其他命名
* Promise 的 than 方法的 executor 函数接收到一个参数, 命名为 **value**, 为 resolve 传递过来的数据. 非特殊情况下不得使用其他命名
* Promise 的 catch 方法的 executor 函数接收到一个参数, 命名为 **reason**, 为 reject 传递过来的数据. 非特殊情况下不得使用其他命名

Notes: 以上几点中的特殊情况, 必须在使用的时候阐述出合理的理由, 否则不得变更

```js
const foo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 5000)
})

foo
  .then(value => {})
  .catch(reason => {})
```

## url 变量规范

在代码的书写中经常会遇到 url 的拼接, `/` 的位置放置是一个痛点, 这里规范下自己在各个场景下的 url 拼接规范

* constant 变量 - 要访问的是某一个资源本身, 而不是 `/`, `/` 代表着访问的是某资源下的子资源

```js
// bad
const PREFIX = 'https://www.example.com/'
const FOO_PREFIX = 'https://www.example.com/foo/'

// good
const PREFIX = 'https://www.example.com'
const FOO_PREFIX = 'https://www.example.com/foo'
```

* 函数传参 - 明确参数为一个 url 片段

```js
// bad
function foo(path) {
  return `https://www.example.com/foo/${path}`
}

foo('bar')

// good
function foo(path) {
  return `https://www.example.com/foo${path}`
}

foo('/bar')
```

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
