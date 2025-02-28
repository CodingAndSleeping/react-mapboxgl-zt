---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 全屏控件
order: 3

toc: content
---

## 全屏控件

:::info{title=介绍}
全屏控件可以用来切换地图的全屏显示状态。
:::

### 1.基本使用

这是一个 `FullscreenControl` 的基本使用示例。

<code src="../examples/fullscreenControl/demo1.tsx" compact="true"></code>

### 2.设置位置

可以通过 `position` 属性设置比例尺控件的位置。

<code src="../examples/fullscreenControl/demo2.tsx" compact="true"></code>

### 3.设置全屏 dom 元素

可以通过 `container` 属性设置全屏显示的 dom 元素。

<code src="../examples/fullscreenControl/demo3.tsx" compact="true"></code>

## API

### FullscreenControl API

| 参数        | 类型              | 默认值          | 描述                                                                                                                                    |
| ----------- | ----------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `position`  | `ControlPosition` | `'bottom-left'` | 控制全屏控件在地图上的位置。可选值有`'left'`,`'right'`,`'top'`,`'bottom'`,`'top-left'`,`'top-right'`,`'bottom-left'`,`'bottom-right'`。 |
| `container` | `HTMLElement`     | -               | 全屏显示的 [兼容的 DOM 元素](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen#compatible_elements)            |
|             |
