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

## 点图层

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

可以通过`click`、`mouseover`等事件监听图层的交互行为。仅当点击或移入具体的要素才有效。

<code src="../examples/lineLayer/demo5.tsx" compact="true"></code>

### CircleLayer API

| 参数               | 类型                                                                           | 默认值       | 描述                                                                            |
| ------------------ | ------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------- |
| `id`               | `string`                                                                       | **必填**     | 图层 ID                                                                         |
| `source`           | `string`                                                                       | **必填**     | 数据源，具体查看[source](https://docs.mapbox.com/style-spec/reference/sources/) |
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

| 事件            | 类型                         | 说明     |
| --------------- | ---------------------------- | -------- |
| `onMouseDown`   | `(e: MapMouseEvent) => void` | 鼠标按下 |
| `onMouseUp`     | `(e: MapMouseEvent) => void` | 鼠标抬起 |
| `onMouseOver`   | `(e: MapMouseEvent) => void` | 鼠标悬停 |
| `onMouseMove`   | `(e: MapMouseEvent) => void` | 鼠标移动 |
| `onMouseEnter`  | `(e: MapMouseEvent) => void` | 鼠标进入 |
| `onMouseLeave`  | `(e: MapMouseEvent) => void` | 鼠标离开 |
| `onMouseOut`    | `(e: MapMouseEvent) => void` | 鼠标移出 |
| `onClick`       | `(e: MapMouseEvent) => void` | 鼠标点击 |
| `onTouchStart`  | `(e: MapTouchEvent) => void` | 触摸开始 |
| `onTouchEnd`    | `(e: MapTouchEvent) => void` | 触摸结束 |
| `onTouchCancel` | `(e: MapTouchEvent) => void` | 触摸取消 |

---
