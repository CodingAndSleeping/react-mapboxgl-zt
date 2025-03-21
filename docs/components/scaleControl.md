---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 比例尺控件
order: 1

toc: content
---

## 比例尺控件

:::info{title=介绍}
比例尺控件可以用来显示地图上的距离与实际距离的比例。
:::

### 1.基本使用

这是一个 `ScaleControl` 的基本使用示例。

<code src="../examples/scaleControl/demo1.tsx" compact="true"></code>

### 2.设置位置

可以通过 `position` 属性设置比例尺控件的位置。

<code src="../examples/scaleControl/demo2.tsx" compact="true"></code>

### 3.设置单位

可以通过 `unit` 属性设置比例尺控件的单位。

<code src="../examples/scaleControl/demo3.tsx" compact="true"></code>

### 4.获取比例尺控件实例

可以通过 `onAdd` 事件回调函数获取比例尺控件实例。

<code src="../examples/scaleControl/demo4.tsx" compact="true"></code>

## API

### ScaleControl API

| 参数       | 类型                                   | 默认值          | 说明                                                                                                                                      |
| ---------- | -------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `position` | `ControlPosition`                      | `'bottom-left'` | 控制比例尺控件在地图上的位置。可选值有`'left'`,`'right'`,`'top'`,`'bottom'`,`'top-left'`,`'top-right'`,`'bottom-left'`,`'bottom-right'`。 |
| `maxWidth` | `number`                               | `100`           | 比例尺控件的最大宽度（单位：像素）。                                                                                                      |
| `unit`     | `'imperial'`\|`'metric'`\|`'nautical'` | `'metric'`      | 设置比例尺的单位。                                                                                                                        |

### ScaleControl Methods

| 方法名    | 参数                                       | 返回值 | 描述               |
| --------- | ------------------------------------------ | ------ | ------------------ |
| `setUnit` | `'imperial'` \| `'metric'` \| `'nautical'` | `void` | 设置比例尺的单位。 |
