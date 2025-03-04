---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 线图层
order: 3

toc: content
---

## 线图层

:::info{title=介绍}
线图层可以在地图上绘制线要素。
:::

### 1.基本使用

线图层通过`source`配置数据源，其中数据源包含以下两种：

- `GeoJSONSource`：使用 `GeoJSON` 对象作为数据源。可以是一个 `GeoJSON` 对象，也可以是一个 `URL` 地址。
- `VectorSource`：使用矢量切片数据作为数据源。

<code src="../examples/lineLayer/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给线图层设置颜色、透明度、宽度等样式。

<code src="../examples/lineLayer/demo2.tsx" compact="true"></code>

### 3.渐变颜色

可以通过设置`gradient`属性设置渐变颜色。

使用条件表达式给线图层设置渐变颜色，其中`line-progress`为线的进度，范围为`0`到`1`。

<code src="../examples/lineLayer/demo3.tsx" compact="true"></code>

> 注意： 设置了`gradient`属性时，`source`必须为`geojson`数据源，并且`source`中的`lineMetrics`必须设置为`true`。

### 4.高级样式

可以通过条件表达式的方式设置高级样式。

<code src="../examples/lineLayer/demo4.tsx" compact="true"></code>

### 5.图层事件

可以通过设置`imgUrl`属性设置线的图片样式。

<code src="../examples/lineLayer/demo5.tsx" compact="true"></code>

### 6.图层事件

可以通过`click`、`mouseover`等事件监听图层的交互行为。仅当点击或移入具体的要素才有效。

<code src="../examples/lineLayer/demo6.tsx" compact="true"></code>

## API

### LineLayer API

| 属性               | 类型                                                      | 默认值      | 说明                                                                                                               |
| ------------------ | --------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `id`               | `string`                                                  | `-`         | 图层 ID                                                                                                            |
| `source`           | `GeoJSONSourceSpecification \| VectorSourceSpecification` | `-`         | 数据源                                                                                                             |
| `sourceLayer`      | `string`                                                  | `-`         | 数据源层                                                                                                           |
| `filter`           | `any`                                                     | `-`         | 过滤条件                                                                                                           |
| `maxzoom`          | `number`                                                  | `24`        | 最大缩放级别                                                                                                       |
| `minzoom`          | `number`                                                  | `0`         | 最小缩放级别                                                                                                       |
| `slot`             | `any`                                                     | `-`         | 该层被分配到的图层槽位                                                                                             |
| `beforeId`         | `string`                                                  | `-`         | 插入到指定 ID 之前                                                                                                 |
| `visibility`       | `'visible' \| 'none'`                                     | `'visible'` | 可见性                                                                                                             |
| `imgUrl`           | `string`                                                  | `-`         | 图片 URL                                                                                                           |
| `blur`             | `number \| ExpressionSpecification`                       | `0`         | 模糊度                                                                                                             |
| `cap`              | `'butt' \| 'round' \| 'square'`                           | `'butt'`    | 端点样式                                                                                                           |
| `color`            | `string \| ExpressionSpecification`                       | `'#000000'` | 颜色                                                                                                               |
| `dasharray`        | `number[]`                                                | `-`         | 虚线数组                                                                                                           |
| `emissiveStrength` | `number \| ExpressionSpecification`                       | `0`         | 自发光强度                                                                                                         |
| `gapWidth`         | `number`                                                  | `0`         | 间隙宽度                                                                                                           |
| `gradient`         | `ExpressionSpecification`                                 | `-`         | 渐变。设置了`gradient`属性时，`source`必须为`geojson`数据源，并且`source`中的`lineMetrics`必须设置为`true`         |
| `join`             | `'bevel' \| 'round' \| 'miter' \| 'none'`                 | `'miter'`   | 连接样式                                                                                                           |
| `miterLimit`       | `number \| ExpressionSpecification`                       | `2`         | 斜接限制                                                                                                           |
| `occlusionOpacity` | `number \| ExpressionSpecification`                       | `0`         | 遮挡透明度                                                                                                         |
| `offset`           | `number \| ExpressionSpecification`                       | `0`         | 偏移量                                                                                                             |
| `opacity`          | `number \| ExpressionSpecification`                       | `1`         | 透明度                                                                                                             |
| `roundLimit`       | `number \| ExpressionSpecification`                       | `1.05`      | 圆角限制                                                                                                           |
| `sortKey`          | `number`                                                  | `-`         | 排序键                                                                                                             |
| `translate`        | `[number, number] \| ExpressionSpecification`             | `[0, 0]`    | 平移量                                                                                                             |
| `translateAnchor`  | `'map' \| 'viewport'`                                     | `'map'`     | 平移锚点                                                                                                           |
| `trimOffset`       | `[number, number]`                                        | `-`         | 修剪偏移量。设置了`trimOffset`属性时，`source`必须为`geojson`数据源，并且`source`中的`lineMetrics`必须设置为`true` |
| `width`            | `number \| ExpressionSpecification`                       | `1`         | 线宽                                                                                                               |

### LineLayer Event

| 事件 | 参数 ｜ 返回值 | 说明 |
| --------------- | ----------------｜------------ | -------------- |
| `onMouseUp` | `MapMouseEvent` ｜ `void` | 鼠标抬起时触发 |
| `onMouseDown` | `MapMouseEvent` ｜ `void` | 鼠标按下时触发 |
| `onMouseOver` | `MapMouseEvent` ｜ `void` | 鼠标悬停时触发 |
| `onMouseMove` | `MapMouseEvent` ｜ `void` | 鼠标移动时触发 |
| `onMouseEnter` | `MapMouseEvent` ｜ `void` | 鼠标移入时触发 |
| `onMouseLeave` | `MapMouseEvent` ｜ `void` | 鼠标离开时触发 |
| `onMouseOut` | `MapMouseEvent` ｜ `void` | 鼠标移出时触发 |
| `onClick` | `MapMouseEvent` ｜ `void` | 鼠标点击时触发 |
| `onTouchStart` | `MapTouchEvent` ｜ `void` | 触摸开始时触发 |
| `onTouchEnd` | `MapTouchEvent` ｜ `void` | 触摸结束时触发 |
| `onTouchCancel` | `MapTouchEvent` ｜ `void` | 触摸取消时触发 |
