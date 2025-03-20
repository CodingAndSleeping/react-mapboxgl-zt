---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 绘图控件
order: 5

toc: content
---

## 绘图控件

:::info{title=介绍}
绘图控件可以用来显示地图上绘制的图形，比如点、线、面、矩形、圆形等。
:::

### 1.基本使用

这是一个 `DrawControl` 的基本使用示例。

<code src="../examples/drawControl/demo1.tsx" compact="true"></code>

### 2.自定义按钮展示

可以通过 `controls`属性来控制绘图控件按钮的展示。默认情况下 `static`、`point`、`line_string`、`polygon`、`trash` 按钮会展示，`combine_features`、`uncombine_features` 按钮不会展示。

<code src="../examples/drawControl/demo2.tsx" compact="true"></code>

:::info{title=注意}
这里的 `controls` 属性是一个对象，并不会覆盖默认配置，而是会与默认配置进行合并。
:::

###
