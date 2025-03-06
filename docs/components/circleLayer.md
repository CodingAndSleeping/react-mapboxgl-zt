---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 点图层
order: 2

toc: content
---

## 点图层

:::info{title=介绍}
点图层是一种最简单的图层类型，它可以用来绘制点、圆点等符号
:::

### 1.基本使用

点图层通过`source`配置数据源，其中数据源包含以下两种：

- `GeoJSONSource`：使用 `GeoJSON` 对象作为数据源。可以是一个 `GeoJSON` 对象，也可以是一个 `URL` 地址。
- `VectorSource`：使用矢量切片数据作为数据源。

<code src="../examples/circleLayer/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给点图层设置颜色、透明度、半径等样式。

<code src="../examples/circleLayer/demo2.tsx" compact="true"></code>

### 3.高级样式

可以通过条件表达式的方式设置高级样式。

<code src="../examples/circleLayer/demo3.tsx" compact="true"></code>

### 4.图层事件

可以通过`click`、`mouseover`等事件监听图层的交互行为。仅当点击或移入具体的要素才有效。

<code src="../examples/circleLayer/demo4.tsx" compact="true"></code>

## API

### CircleLayer API

| 参数               | 类型                                                                           | 默认值       | 说明                                                                            |
| ------------------ | ------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------- |
| `id`               | `string`                                                                       | 必填         | 图层 ID                                                                         |
| `source`           | `string`                                                                       | 必填         | 数据源，具体查看[source](https://docs.mapbox.com/style-spec/reference/sources/) |
| `sourceLayer`      | `string`                                                                       | `-`          | 数据源的子图层 ID                                                               |
| `filter`           | `ExpressionSpecification`                                                      | `-`          | 过滤条件                                                                        |
| `maxzoom`          | `number`                                                                       | `24`         | 最大缩放级别                                                                    |
| `minzoom`          | `number`                                                                       | `0`          | 最小缩放级别                                                                    |
| `visibility`       | `'visible'` \| `'none'`                                                        | `'visible'`  | 是否可见                                                                        |
| `beforeId`         | `string`                                                                       | `-`          | 该图层应插入到的图层 ID 之前                                                    |
| `slot`             | `string`                                                                       | `-`          | 该层被分配到的图层槽位                                                          |
| `blur`             | `number` \| `ExpressionSpecification`                                          | `0`          | 模糊程度, 正数为外圈模糊度，负数为内圈模糊度                                    |
| `color`            | `string` \| `ExpressionSpecification`                                          | `'#000000'`  | 颜色                                                                            |
| `emissiveStrength` | `number` \| `ExpressionSpecification`                                          | `0`          | 发光强度                                                                        |
| `opacity`          | `number` \| `ExpressionSpecification`                                          | `1`          | 透明度                                                                          |
| `pitchAlignment`   | `'map'` \| `'viewport'`                                                        | `'viewport'` | 俯仰对齐方式。 `'map'`:与地图对齐；`'viewport'`:与视窗对齐                      |
| `pitchScale`       | `'map'` \| `'viewport'`                                                        | `'map'`      | 俯仰缩放方式。`'map'`:根据相机的视距进行缩放；`'viewport'`:不缩放               |
| `radius`           | `number` \| `ExpressionSpecification`                                          | `5`          | 半径                                                                            |
| `sortKey`          | `number`                                                                       | `-`          | 排序关键字                                                                      |
| `strokeColor`      | `string` \| `ExpressionSpecification`                                          | `'#000000'`  | 边框颜色                                                                        |
| `strokeOpacity`    | `number` \| `ExpressionSpecification`                                          | `1`          | 边框透明度                                                                      |
| `strokeWidth`      | `number` \| `ExpressionSpecification`                                          | `0`          | 边框宽度                                                                        |
| `translate`        | `[number, number]` \| `ExpressionSpecification`                                | `[0, 0]`     | 偏移量                                                                          |
| `translateAnchor`  | `'map'` \| '`viewport'`。`'map'`:相对于地图平移；`'viewport'`：相对于视窗平移: | `'map'`      | 偏移锚点                                                                        |

### CircleLayer Event

| 事件            | 参数            | 返回值 | 说明           |
| --------------- | --------------- | ------ | -------------- |
| `onMouseUp`     | `MapMouseEvent` | `void` | 鼠标抬起时触发 |
| `onMouseDown`   | `MapMouseEvent` | `void` | 鼠标按下时触发 |
| `onMouseOver`   | `MapMouseEvent` | `void` | 鼠标悬停时触发 |
| `onMouseMove`   | `MapMouseEvent` | `void` | 鼠标移动时触发 |
| `onMouseEnter`  | `MapMouseEvent` | `void` | 鼠标移入时触发 |
| `onMouseLeave`  | `MapMouseEvent` | `void` | 鼠标离开时触发 |
| `onMouseOut`    | `MapMouseEvent` | `void` | 鼠标移出时触发 |
| `onClick`       | `MapMouseEvent` | `void` | 鼠标点击时触发 |
| `onTouchStart`  | `MapTouchEvent` | `void` | 触摸开始时触发 |
| `onTouchEnd`    | `MapTouchEvent` | `void` | 触摸结束时触发 |
| `onTouchCancel` | `MapTouchEvent` | `void` | 触摸取消时触发 |
