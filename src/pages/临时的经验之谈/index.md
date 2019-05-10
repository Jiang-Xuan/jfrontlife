---
path: "/临时的经验之谈"
title: "临时的经验之谈"
tags: []
date: "2019-05-07"
---

## 测试代码的实际用处

* 在开发的过程中发现在修复功能的时候会影响目前已经存在的功能, 想要保证已经存在的功能是正常的, 就必须来测试一遍, 手工的测试无疑太过于繁琐, 希望能程序化, 在我修复 bug 的时候尽量的不要引入新的 bug

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

在 jquery 时代, 数据的获取一般通过 `$.ajax` 来获取, 获取之后进行拼接 HTML 字符串

https://codesandbox.io/s/pmkjmx8lxm

DOM 和 数据的同步需要手动的 js 操作, 在新数据到达的时候, 必须用 jquery 操作 DOM 来实现视图和数据的同步

使用 React 可以让你只用关心数据, 在数据变化的时候视图会同步变化
