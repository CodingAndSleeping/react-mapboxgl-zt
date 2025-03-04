---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 鼠标位置控件
order: 4

toc: content
---

## 鼠标位置控件

:::info{title=介绍}
鼠标位置控件可以用来显示当前鼠标所在的地理位置。
:::

### 1.基本使用

这是一个 `MousePositionControl` 的基本使用示例。

<code src="../examples/mousePositionControl/demo1.tsx" compact="true"></code>

### 2.设置位置

可以通过 `position` 属性设置比例尺控件的位置。

<code src="../examples/mousePositionControl/demo2.tsx" compact="true"></code>

### 3.设置单位

可以通过 `decimals` 属性设置鼠标位置控件的精度。

<code src="../examples/mousePositionControl/demo3.tsx" compact="true"></code>

## API

### MousePositionControl API

| 参数       | 类型              | 默认值          | 说明                                                                                                                                        |
| ---------- | ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `position` | `ControlPosition` | `'bottom-left'` | 控制鼠标位置控件在地图上的位置。可选值有`'left'`,`'right'`,`'top'`,`'bottom'`,`'top-left'`,`'top-right'`,`'bottom-left'`,`'bottom-right'`。 |
| `decimals` | `number`          | `6`             | 坐标的精度。                                                                                                                                |
