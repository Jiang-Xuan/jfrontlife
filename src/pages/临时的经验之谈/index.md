---
path: "/临时的经验之谈"
title: "临时的经验之谈"
tags: []
date: "2019-05-07"
---

## 测试代码的实际用处

* 在开发的过程中发现在修复功能的时候会影响目前已经存在的功能, 想要保证已经存在的功能是正常的, 就必须来测试一遍, 手工的测试无疑太过于繁琐, 希望能程序化, 在修复 bug 的时候尽量的不要引入新的 bug

## type 的实际用处

* vscode 的智能提示功能

## 你为什么使用当前的技术栈来写代码

前端在做什么?

* 增加新功能
* 网站改版
* 修复 bug
* 优化用户体验

常见的业务

* 登录, 注册系统
* 表格数据展示, 搜索, 编辑
* 导航

数据来源

* 后端从数据库中读出的数据, 从接口返回
* 用户在页面上的输入

MVC

* Modal 数据结构
* View 界面展示
* Controller 控制器(控制着数据), 一般由用户的交互发起

frameworks

* emberjs
* angular
* react
* vue
* jquery

### React ? 为什么, 你要解决什么问题

[facebook - why did we build react](https://reactjs.org/blog/2013/06/05/why-react.html)

#### 第一个案列, 一个可翻页的数据展示表格

jquery: 在 jquery 时代, 数据的获取一般通过 `$.ajax` 来获取, 获取之后进行拼接 HTML 字符串, https://codesandbox.io/s/pmkjmx8lxm. DOM 和 数据的同步需要手动的 js 操作, 在新数据到达的时候, 必须用 jquery 操作 DOM 来实现视图和数据的同步, 目前所知, 需要一次性的 `$.html(html)`, 有损性能. jquery 和 babel, eslint, webpack 等前端的开发工具配合不完善

backbone: 实现方式同样是使用 HTML template 来绑定数据, 类 jquery 方式绑定事件, 目前所知, 还是需要一次性 `$.html(html)`,这样的方式会有损性能. 不过 backbone 不绑定使用 view 的工具, 你可以选择自己喜欢的模板甚至是实现一个 virtual dom 来更新视图, backbone 和 babel, eslint, webpack 等前端的开发工具配合不完善

react: ~~使用 React 可以让你只用关心数据, 在数据变化的时候视图会同步变化~~ `Update: 这不是 React 的优点, 所有的 MVC 框架都有`. virtual dom 可以让操作的 dom 的性能消耗降到最低, 但是 React 其实并不是一个完整的 MVC 框架

## 为什么使用 lodash.flow/lodash.flowRight

https://lodash.com/docs/4.17.11#flow
https://lodash.com/docs/4.17.11#flowRight

在嵌套调用函数的时候非常有用, 比如以下代码:

```js
connect(dispatch, location)(SearchList({
  listRequestType: 'test/getList'
})(OriginComponent))
```

以上的代码看得懂吗? 可读性非常差劲, 使用 lodash.flowRight

```js
const compose = _.flowRight(
  connect(dispatch, location),
  SearchList({
    listRequestType: 'test/getList',
  })
)

compose(OriginComponent)
```

可读性是不是好了很多?

flow 是从左到右进行调用, flowRight 是右向左调用

flow 符合人类阅读习惯, 从左至右.

flowRight 更符合写代码时候的逻辑, 从右至左.
