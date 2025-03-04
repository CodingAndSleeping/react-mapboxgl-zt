---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 背景图层
order: 2

toc: content
---

## 背景图层

:::info{title=介绍}
背景图层是一种最简单的图层类型，它可以用来绘制背景，并覆盖到地图上。
:::

### 1.基本使用

背景图层的基本使用示例：

<code src="../examples/backgroundLayer/demo1.tsx" compact="true"></code>

### 2.设置样式

可以通过设置颜色、透明度等属性来设置背景图层的样式。

<code src="../examples/backgroundLayer/demo2.tsx" compact="true"></code>

### 3.设置图片

可以为背景图层添加图片。

<code src="../examples/backgroundLayer/demo3.tsx" compact="true"></code>

## API

### BackgroundLayer API

| 参数               | 类型                      | 默认值      | 说明                         |
| ------------------ | ------------------------- | ----------- | ---------------------------- |
| `id`               | `string`                  | **必填**    | 图层 ID                      |
| `filter`           | `ExpressionSpecification` | `-`         | 过滤条件                     |
| `maxzoom`          | `number`                  | `24`        | 最大缩放级别                 |
| `minzoom`          | `number`                  | `0`         | 最小缩放级别                 |
| `visibility`       | `'visible' \| 'none'`     | `'visible'` | 可见性                       |
| `beforeId`         | `string`                  | `-`         | 该图层应插入到的图层 ID 之前 |
| `slot`             | `string`                  | `-`         | 该层被分配到的图层槽位       |
| `color`            | `string`                  | `'#000000'` | 颜色                         |
| `emissiveStrength` | `number`                  | `0`         | 发光强度                     |
| `opacity`          | `number`                  | `1`         | 透明度                       |
| `imgUrl`           | `string`                  | `-`         | 纹理图片 URL                 |
