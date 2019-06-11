---
path: "/insight沉淀"
date: "2019-06-05"
title: "insight 沉淀"
tags: [""]
---

该文件包含所有的在 insight 项目组中的沉淀的 `组件`, `包`

## SearchList 高阶组件

该组件用于 insight 管理后台中, 负责处理通用的 筛选项 和 展示列表

并且该组件将同步筛选条件至 url 之上

#### caveat

* <details><summary>该组件需要成为 umi 的配置式路由的的直接组件, 因为依赖 location props</summary><image src="https://i.loli.net/2019/06/10/5cfe115e92a9f52062.png" /><details>

<details>
  <summary>图片 example</summary>
  <image src="https://i.loli.net/2019/06/05/5cf770011c7a420747.png" />
</details>
<details>
  <summary>实际使用的地址</summary>
  TODO:
</details>

<details>
  <summary>依赖项</summary>
  <ul>
    <li>react</li>
    <li>react-dom</li>
    <li>dva</li>
    <li>antd</li>
    <li>moment</li>
    <li>history</li>
    <li>insight 项目常量 TABLE_DEFAULT_PAGE_SIZE</li>
    <li>前后端交互规范</li>
  </ul>
</details>

### 代码

TODO: gitlab 的链接
