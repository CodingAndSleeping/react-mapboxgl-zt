---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 导航控件
order: 2

toc: content
---

## 导航控件

:::info{title=介绍}
导航控件可以用来控制地图的缩放级别、俯仰角度和旋转角度。
:::

### 1.基本使用

这是一个 `NavigationControl` 的基本使用示例。

<code src="../examples/navigationControl/demo1.tsx" compact="true"></code>

### 2.设置位置

可以通过 `position` 属性设置导航控件的位置。

<code src="../examples/navigationControl/demo2.tsx" compact="true"></code>

### 3.显示设置

可以通过 `showCompass` 和 `showZoom` 属性来控制是否显示指南针和缩放按钮。

<code src="../examples/navigationControl/demo3.tsx" compact="true"></code>

### 4.指针控制俯仰角度

可以通过 `visualizePitch` 属性来控制是否可以通过指针控制俯仰角度。 将 `visualizePitch` 设置为 `false` 后，指针无法控制俯仰角度。

<code src="../examples/navigationControl/demo4.tsx" compact="true"></code>

## API

### NavigationControl API

| 参数             | 类型              | 默认值       | 说明                                                                                                                                    |
| ---------------- | ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `position`       | `ControlPosition` | `'top-left'` | 控制导航控件在地图上的位置。可选值有`'left'`,`'right'`,`'top'`,`'bottom'`,`'top-left'`,`'top-right'`,`'bottom-left'`,`'bottom-right'`。 |
| `showCompass`    | `boolean`         | `true`       | 是否显示指南针按钮。                                                                                                                    |
| `showZoom`       | `boolean`         | `true`       | 是否显示缩放按钮。                                                                                                                      |
| `visualizePitch` | `boolean`         | `true`       | 是否在指南针按钮中可视化地图俯仰角度。                                                                                                  |
