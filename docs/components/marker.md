---
nav:
  title: 组件
  order: 2
group:
  title: 地图覆盖物
  order: 4

title: 地图标记
order: 4

toc: content
---

## 地图标记

:::info{title=介绍}
地图标记可以用来在地图上展示图形或者元素。
:::

### 1.基本使用

`marker`组件的基本使用。默认样式为定位图标。

<code src="../examples/marker/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给`marker`设置颜色、锚点、旋转角度和缩放比例等样式。

<code src="../examples/marker/demo2.tsx" compact="true"></code>

### 3.自定义内容

可以在通过给`marker`组件传递子组件或 HTML 元素来自定义`marker`的内容。

<code src="../examples/marker/demo3.tsx" compact="true"></code>

### 4.拖拽与事件

可通过设置`draggable`属性为`true`来开启拖拽功能，并可以监听`marker`的拖拽事件。

<code src="../examples/marker/demo4.tsx" compact="true"></code>

### 5.获取 marker 实例

可以通过 `useRef` 获取`marker`实例。以便获取组件身上的属性和方法。

<code src="../examples/marker/demo5.tsx" compact="true"></code>

:::warning{title="注意！！！"}
由于`marker`是在地图组件的`load`事件完成后才渲染的，所以在使用时会出现在`useEffect`函数中获取不到的问题！
:::

## API

### Marker API

| 参数              | 类型         | 默认值      | 说明               |
| ----------------- | ------------ | ----------- | ------------------ |
| lngLat            | `LngLatLike` | `[180, 90]` | 坐标位置（经纬度） |
| anchor            | `Anchor`     | `'center'`  | 锚点位置           |
| className         | `string`     | `-`         | 自定义 CSS 类名    |
| clickTolerance    | `number`     | `0`         | 点击容差（像素）   |
| color             | `string`     | `'#3FB1CE'` | 颜色               |
| draggable         | `boolean`    | `false`     | 是否可拖拽         |
| occludedOpacity   | `number`     | `0.2`       | 被遮挡时的不透明度 |
| offset            | `PointLike`  | `-`         | 偏移量             |
| pitchAlignment    | `string`     | `'auto'`    | 俯仰对齐方式       |
| rotation          | `number`     | `0`         | 旋转角度（度）     |
| rotationAlignment | `string`     | `'auto'`    | 旋转对齐方式       |
| scale             | `number`     | `1`         | 缩放比例           |

### Marker Events

| 事件名      | 参数                                  | 返回值 | 说明           |
| ----------- | ------------------------------------- | ------ | -------------- |
| onDragStart | `OverlayEventParams<mapboxgl.Marker>` | `void` | 拖拽开始事件   |
| onDrag      | `OverlayEventParams<mapboxgl.Marker>` | `void` | 拖拽过程中触发 |
| onDragEnd   | `OverlayEventParams<mapboxgl.Marker>` | `void` | 拖拽结束事件   |

### Marker Methods

| 方法名                 | 参数            | 返回值        | 说明                     |
| ---------------------- | --------------- | ------------- | ------------------------ |
| `addTo`                | `Map`           | `Marker`      | 将标记添加到地图         |
| `remove`               | `-`             | `Marker`      | 从地图上移除标记         |
| `getLngLat`            | `-`             | `LngLat`      | 获取标记的地理位置       |
| `setLngLat`            | `LngLat`        | `Marker`      | 设置标记的位置           |
| `getElement`           | `-`             | `HTMLElement` | 返回标记的 HTML 元素     |
| `setPopup`             | `Popup \| null` | `Marker`      | 绑定一个弹出框到标记     |
| `getPopup`             | `-`             | `Popup`       | 获取绑定到标记的弹出框   |
| `togglePopup`          | `-`             | `Marker`      | 打开或关闭标记的弹出框   |
| `getOffset`            | `-`             | `Point`       | 获取标记的偏移量         |
| `setOffset`            | `PointLike`     | `Marker`      | 设置标记的偏移量         |
| `addClassName`         | `string`        | `Marker`      | 添加 CSS 类到标记元素    |
| `removeClassName`      | `string`        | `Marker`      | 从标记元素移除 CSS 类    |
| `toggleClassName`      | `string`        | `boolean`     | 切换标记元素的 CSS 类    |
| `setDraggable`         | `boolean`       | `Marker`      | 设置标记是否可拖动       |
| `isDraggable`          | `-`             | `boolean`     | 检查标记是否可拖动       |
| `setRotation`          | `number`        | `Marker`      | 设置标记的旋转角度       |
| `getRotation`          | `-`             | `number`      | 获取标记的旋转角度       |
| `setRotationAlignment` | `string`        | `Marker`      | 设置标记的旋转对齐方式   |
| `getRotationAlignment` | `-`             | `string`      | 获取标记的旋转对齐方式   |
| `setPitchAlignment`    | `string?`       | `Marker`      | 设置标记的俯仰对齐方式   |
| `getPitchAlignment`    | `-`             | `string`      | 获取标记的俯仰对齐方式   |
| `setOccludedOpacity`   | `number`        | `Marker`      | 设置标记被遮挡时的透明度 |
| `getOccludedOpacity`   | `-`             | `number`      | 获取标记被遮挡时的透明度 |
