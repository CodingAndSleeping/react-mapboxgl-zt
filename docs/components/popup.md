---
nav:
  title: 组件
  order: 3
group:
  title: 地图覆盖物
  order: 4

title: 地图弹窗
order: 2

toc: content
---

## 地图标记

:::info{title=介绍}
`Popup`组件用来在地图上展示弹窗信息。
:::

### 1.基本使用

`Popup`组件的基本使用。

<code src="../examples/popup/demo1.tsx" compact="true"></code>

### 2.设置样式

可以给`Popup`进行一些基本配置。

<code src="../examples/popup/demo2.tsx" compact="true"></code>

### 3.弹窗事件

给`Popup`组件绑定事件。

<code src="../examples/popup/demo3.tsx" compact="true"></code>

### 4.获取 Popup 实例

可以通过 `onAdd` 事件回调函数获取 `Popup` 实例。

点击地图显示弹窗。

<code src="../examples/popup/demo4.tsx" compact="true"></code>

## API

### Popup API

| 参数名           | 类型         | 默认值    | 说明                     |
| ---------------- | ------------ | --------- | ------------------------ |
| `lngLat`         | `LngLatLike` | `-`       | 弹出框的地理位置         |
| `anchor`         | `Anchor`     | `-`       | 弹出框的锚点位置         |
| `className`      | `string`     | `-`       | 自定义 CSS 类名          |
| `closeButton`    | `boolean`    | `true`    | 是否显示关闭按钮         |
| `closeOnClick`   | `boolean`    | `false`   | 点击地图时是否关闭弹出框 |
| `closeOnMove`    | `boolean`    | `false`   | 移动地图时是否关闭弹出框 |
| `focusAfterOpen` | `boolean`    | `true`    | 打开后是否自动获取焦点   |
| `maxWidth`       | `string`     | `'240px'` | 弹出框的最大宽度         |
| `offset`         | `Offset`     | `-`       | 弹出框的偏移量           |

### Popup Event

| 事件名    | 参数                        | 返回值 | 说明           |
| --------- | --------------------------- | ------ | -------------- |
| `onAdd`   | `Popup`                     | `void` | 弹窗打开时触发 |
| `onOpen`  | `OverlayEventParams<Popup>` | `void` | 弹窗打开时触发 |
| `onClose` | `OverlayEventParams<Popup>` | `void` | 弹窗关闭时触发 |

### Popup Method

| 方法名            | 参数                            | 返回值        | 说明                   |
| ----------------- | ------------------------------- | ------------- | ---------------------- |
| `addTo`           | `Map`                           | `Popup`       | 将弹出框添加到地图     |
| `isOpen`          | `-`                             | `boolean`     | 检查弹出框是否打开     |
| `remove`          | `-`                             | `Popup`       | 从地图上移除弹出框     |
| `getLngLat`       | `-`                             | `LngLat`      | 获取弹出框的地理位置   |
| `setLngLat`       | `LngLatLike`                    | `Popup`       | 设置弹出框的位置       |
| `trackPointer`    | `-`                             | `Popup`       | 使弹出框跟随鼠标       |
| `getElement`      | `-`                             | `HTMLElement` | 获取弹出框的 HTML 元素 |
| `setText`         | `string`                        | `Popup`       | 设置文本内容           |
| `setHTML`         | `string`                        | `Popup`       | 设置 HTML 内容         |
| `getMaxWidth`     | `-`                             | `string`      | 获取弹出框最大宽度     |
| `setMaxWidth`     | `string`                        | `Popup`       | 设置弹出框最大宽度     |
| `setDOMContent`   | `Element`                       | `Popup`       | 设置 HTML 元素作为内容 |
| `addClassName`    | `string`                        | `Popup`       | 添加 CSS 类            |
| `removeClassName` | `string`                        | `Popup`       | 移除 CSS 类            |
| `setOffset`       | `number \| PointLike \| Object` | `Popup`       | 设置偏移量             |
| `toggleClassName` | `string`                        | `boolean`     | 切换 CSS 类            |
