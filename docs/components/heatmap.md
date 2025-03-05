---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 热力图图层
order: 4

toc: content
---

## 热力图图层

:::info{title=介绍}
热力图图层可以用来展示大量的点数据，通过颜色的深浅来表现数据密度。
:::

### 1.基本使用

热力图图层通过`source`配置数据源，其中数据源包含以下两种：

- `GeoJSONSource`：使用 `GeoJSON` 对象作为数据源。可以是一个 `GeoJSON` 对象，也可以是一个 `URL` 地址。
- `VectorSource`：使用矢量切片数据作为数据源。

<code src="../examples/heatmapLayer/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给热力图设置颜色、透明度、半径等样式。

<code src="../examples/heatmapLayer/demo2.tsx" compact="true"></code>

## API

### HeatmapLayer API

| 参数        | 类型                                                      | 默认值      | 说明                   |
| ----------- | --------------------------------------------------------- | ----------- | ---------------------- |
| id          | `string`                                                  | 必填        | 图层的唯一标识符       |
| source      | `GeoJSONSourceSpecification \| VectorSourceSpecification` | 必填        | 数据源                 |
| sourceLayer | `string`                                                  | `-`         | 矢量数据源的图层名称   |
| filter      | `ExpressionSpecification`                                 | `-`         | 过滤表达式             |
| maxzoom     | `number`                                                  | `24`        | 最大缩放级别           |
| minzoom     | `number`                                                  | `0`         | 最小缩放级别           |
| slot        | `string`                                                  | `-`         | 该层被分配到的图层槽位 |
| beforeId    | `string`                                                  | `-`         | 在某个图层之前渲染     |
| visibility  | `'visible' \| 'none'`                                     | `'visible'` | 是否可见               |
| color       | `ExpressionSpecification`                                 | `-`         | 颜色梯度               |
| intensity   | `number \| ExpressionSpecification`                       | `1`         | 热力图强度             |
| opacity     | `number \| ExpressionSpecification`                       | `1`         | 不透明度               |
| radius      | `number \| ExpressionSpecification`                       | `30`        | 热力点半径             |
| weight      | `number \| ExpressionSpecification`                       | `1`         | 热力图权重             |
