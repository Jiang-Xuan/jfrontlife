---
path: "/the-rule-of-ecmascript"
title: "ECMAScript 代码规范 - 主要表现为 ESLint 规范"
date: "2019-03-29"
tags: ["eslint", "规范"]
---

## [comma-dangle 规则]([https://eslint.org/docs/rules/comma-dangle](https://eslint.org/docs/rules/comma-dangle))

为了方便 git 来对比每次提交的差异, 该规则必须遵守, ECMAScript 规范添加该语法就是为了 git 追踪代码变化.

## [semi 规则]([https://eslint.org/docs/rules/semi](https://eslint.org/docs/rules/semi))

强烈推荐所有的语句都加上分号, 防止一些[意外 bug]([https://mislav.net/2010/05/semicolons/](https://mislav.net/2010/05/semicolons/)) 的出现.

## [perfer const 规则]([https://eslint.org/docs/rules/prefer-const.html](https://eslint.org/docs/rules/prefer-const.html))

在不改变变量的情况下, 必须使用 `const` 赋值变量. 如果需要改变变量的值, 则使用 `let`. 禁用 `var` [no-var 规则]([https://eslint.org/docs/rules/no-var.html](https://eslint.org/docs/rules/no-var.html)).

## [object shorthand 规则]([https://eslint.org/docs/rules/object-shorthand.html](https://eslint.org/docs/rules/object-shorthand.html))

对象的缩写形式, 必须遵循.

## [group shorthand property 规则]

对象的缩写必须在声明对象字面量的前面

```js
const bar = 'bar';
const quz = 'quz';
const foo = {
  bar,
  quz,
  quzz: 'quzz',
};
```

## [group rest spread 规则]

使用 rest spread 操作符 + shorthand property + property 时的排序. rest spread 操作符 > shorthand property > property. 这样可以保证你可以确定你手动赋予给该对象的属性不会被覆盖.

```js
const foo = { foo: 1, bar: 2, quz: 3, quzz: 4 };
const bar = {};
const quz = 2;

// 直接就可以看出来该对象拥有 foo 属性, 并且其值为 4
const copy = {
  ...foo,
  quz,
  foo: 4,
};
```

> 例外: 内部封装的参数对象允许被外部覆盖的时候需要将 rest spread 放置在最后

```js
function foo(argus = {}) {
  const params = {
    is: true,
    who: 'j',
    // 允许外部对默认参数进行修改
    ...argus,
  }

  console.log(params)
}

foo({ who: 'x' })
```

## [no prototype builtins 规则]([https://eslint.org/docs/rules/no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins))

不要直接调用 `Object.prototype` 上面的方法, 例如 `hasOwnProperty`, `propertyIsEnumerable`, `isPrototypeOf`

> 为什么? 这些属性有可能被对象覆盖, 如: { hasOwnProperty: false }, 或者 Object.create(null)

## 推荐使用 object rest operator 而不是 `Object.assign` 来浅拷贝 对象

使用 object rest operator 来获取一个新的对象但是省略某一个或几个属性.

```js
// very bad
const original = { foo: 1, bar: 2 };
const copy = Object.assign(original, { quz: 3 });
delete copy.a;

// bad
const original = { foo: 1, bar: 2 };
const copy = Object.assign({}, { quz: 3 });

// good
const original = { foo: 1, bar: 2 };
const copy = { ...original, quz: 3 };
const { quz, ...noQuz } = copy;
```

## 命名规范

### class 命名

* 带有大写缩写名词(EMA, ECMA, DXY, FBI)的命名, 以首字母大写驼峰式命名, 并且大写缩写名词只有首字母大写, 其余的大写字母转为小写

  ```js
  class FooFbiClass extends React.Component {
    constructor(props) { super(props); }
  }
  class FbiFooClass extends React.Component {
    constructor(props) { super(props); }
  }
  ```

* 正常的单词命名, 采用首字母大写的驼峰式命名

      ```js
      class FooBarQuzQuzz extends React.Component {
        constructor(props) { super(props); }
      }
      ```

### 变量命名

* 带有大写缩写名词(EMA, ECMA, DXY, FBI)的命名, 采用驼峰式命名, 并且大写缩写名词只有首字母大写, 其余的大写字母转为小写. 如果大写缩写名词需要放在变量命名的开始, 则该大写缩写名词全部小写.

  ```js
  const fooFbiVar = 'foo fbi var';
  const fbiFooVar = 'fbi foo var';
  ```

* 正常的单词命名, 采用驼峰式命名.

  ```js
  const fooBarQuzQuzz = 'foo bar quz quzz';
  ```
