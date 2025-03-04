---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 面图层
order: 4

toc: content
---

## 面图层

:::info{title=介绍}
面图层可以在地图上绘制面要素。
:::

### 1.基本使用

面图层通过`source`配置数据源，其中数据源包含以下两种：

- `GeoJSONSource`：使用 `GeoJSON` 对象作为数据源。可以是一个 `GeoJSON` 对象，也可以是一个 `URL` 地址。
- `VectorSource`：使用矢量切片数据作为数据源。

<code src="../examples/fillLayer/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给线图层设置颜色、透明度、边框颜色等样式。

<code src="../examples/fillLayer/demo2.tsx" compact="true"></code>

### 3.高级样式

可以通过条件表达式的方式设置高级样式。

<code src="../examples/fillLayer/demo3.tsx" compact="true"></code>

### 4.设置图片

可以通过设置`imgUrl`属性设置线的图片样式。

<code src="../examples/fillLayer/demo4.tsx" compact="true"></code>

### 5.图层事件

可以通过`click`、`mouseover`等事件监听图层的交互行为。仅当点击或移入具体的要素才有效。

<code src="../examples/fillLayer/demo5.tsx" compact="true"></code>

## API

### FillLayer API

| 参数             | 类型                                          | 默认值      | 说明                         |
| ---------------- | --------------------------------------------- | ----------- | ---------------------------- |
| id               | `string`                                      | 必填        | 图层的唯一标识符             |
| source           | `string`                                      | 必填        | 数据源 ID                    |
| sourceLayer      | `string`                                      | `-`         | 数据源的具体图层（如果适用） |
| filter           | `ExpressionSpecification`                     | `-`         | 过滤表达式                   |
| maxzoom          | `number`                                      | `24`        | 最大缩放级别                 |
| minzoom          | `number`                                      | `0`         | 最小缩放级别                 |
| slot             | `string`                                      | `-`         | 该层被分配到的图层槽位       |
| beforeId         | `string`                                      | `-`         | 在某个图层之前渲染           |
| visibility       | `'visible' \| 'none'`                         | `'visible'` | 是否可见                     |
| antialias        | `boolean`                                     | `true`      | 是否抗锯齿                   |
| color            | `string \| ExpressionSpecification`           | `'#000000'` | 填充颜色                     |
| emissiveStrength | `number \| ExpressionSpecification`           | `0`         | 自发光强度                   |
| opacity          | `number \| ExpressionSpecification`           | `1`         | 不透明度                     |
| outlineColor     | `string \| ExpressionSpecification`           | `-`         | 轮廓颜色                     |
| imgUrl           | `string`                                      | `-`         | 纹理图片 URL                 |
| sortKey          | `number`                                      | `-`         | 渲染顺序                     |
| translate        | `[number, number] \| ExpressionSpecification` | `[0, 0]`    | 平移量                       |
| translateAnchor  | `'map' \| 'viewport'`                         | `'map'`     | 平移锚点                     |

### FillLayer Event

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
