---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 绘图控件
order: 5

toc: content
---

## 绘图控件

:::info{title=介绍}
绘图控件可以用来显示地图上绘制的图形，比如点、线、面、矩形、圆形等。
:::

### 1.基本使用

这是一个 `DrawControl` 的基本使用示例。

<code src="../examples/drawControl/demo1.tsx" compact="true"></code>

### 2.自定义按钮展示

可以通过 `controls`属性来控制绘图控件按钮的展示。默认情况下 `static`、`point`、`line_string`、`polygon`、`trash` 按钮会展示，`combine_features`、`uncombine_features` 按钮不会展示。

<code src="../examples/drawControl/demo2.tsx" compact="true"></code>

:::info{title=注意}
这里的 `controls` 属性是一个对象，并不会覆盖默认配置，而是会与默认配置进行合并。
:::

### 3.修改样式

可以通过 `styles` 属性来修改绘图控件的样式。

`styles`支持`mapbox`的图层配置，有以下几点需要注意：

- 不需要提供 `source`，控件内部会自动添加 `source`。
- 样式必须提供 id。`DrawControl`会在`id`上添加后缀`.hot`和`.cold`。

有以下图形属性可以用来自定义样式：

- `meta`： 控制具体要素的样式，可选值：`feature`, `midpoint`, `vertex`。
- `active`： 是否选中状态。可选值：`true`, `false`。
- `$type`： 图形类型。可选值：`Point`, `LineString`, `Polygon`。
- `mode`：绘图模式。 可选值：`static`, `draw_line_string`, `draw_polygon`, `direct_select`, `simple_select`, `direct_select_radius`, `static`。

具体配置项可以参考[官方文档](https://github.com/mapbox/mapbox-gl-draw/blob/main/docs/API.md#styling-draw)。

本示例演示修改点的样式，包括选中和未选择的样式。

<code src="../examples/drawControl/demo3.tsx" compact="true"></code>

### 4.获取绘图组件实例

可以通过 `onAdd` 事件回调函数获取绘图控件实例。

<code src="../examples/drawControl/demo4.tsx" compact="true"></code>

### 5.添加事件

可以给 `DrawControl` 添加事件，包括 `onDrawCreate`、`onDrawUpdate`、`onDrawDelete`、`onCombine`、`onUncombine`等。

<code src="../examples/drawControl/demo5.tsx" compact="true"></code>

## API

### DrawControl API

| 参数                | ​ 类型          | ​ 默认值          | 说明                                                                                             |
| ------------------- | --------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `keybindings`       | `boolean`       | `true`            | 是否启用键盘交互进行绘制。                                                                       |
| `touchEnabled`      | `boolean`       | `true`            | 是否启用触摸交互进行绘制。                                                                       |
| `boxSelect`         | `boolean`       | `true`            | 是否启用通过 `shift+click+drag` 进行框选功能。如果为 `false`，则 `shift+click+drag` 会放大区域。 |
| `clickBuffer`       | `number`        | `2`               | 任何要素或顶点周围（每个方向）的像素数，用于响应点击。                                           |
| `touchBuffer`       | `number`        | `25`              | 任何要素或顶点周围（每个方向）的像素数，用于响应触摸。                                           |
| `controls`          | `Object`        | `-`               | 隐藏或显示单个控件。每个属性的名称是一个控件，值是一个布尔值，表示控件是否开启。                 |
| `styles`            | `Array<Object>` | `-`               | 地图样式对象的数组。默认情况下，`DrawControl` 会提供一个地图样式。                               |
| `modes`             | `Object`        | `-`               | 添加模式。可以使用 `MapboxDraw.modes` 查看已有模式。                                             |
| `defaultMode`       | `String`        | `'simple_select'` | 用户初始进入的模式（来自 `modes`）。                                                             |
| `userProperties`    | `boolean`       | `false`           | 要素的属性也将可用于样式化，并前缀为 `user_`，例如 `['==', 'user_custom_label', 'Example']`。    |
| `suppressAPIEvents` | `boolean`       | `true`            | 是否在调用方法时触发事件。如果为 `false`，则会触发事件。                                         |

### DrawControl Event

| ​ 事件                  | ​ 参数                     | ​ 返回值 | ​ 说明                                 |
| ----------------------- | -------------------------- | -------- | -------------------------------------- |
| `onAdd`                 | `DrawControl`              | `void`   | 控件添加时触发                         |
| `onDrawCreate`          | `DrawCreateEvent`          | `void`   | 当要素创建时触发。                     |
| `onDrawUpdate`          | `DrawUpdateEvent`          | `void`   | 当要素被更新时触发。                   |
| `onDrawDelete`          | `DrawDeleteEvent`          | `void`   | 当要素被删除时触发。                   |
| `onDrawCombine`         | `DrawCombineEvent`         | `void`   | 当要素被合并时触发。                   |
| `onDrawUncombine`       | `DrawUncombineEvent`       | `void`   | 当复合要素被拆分时触发。               |
| `onDrawSelectionChange` | `DrawSelectionChangeEvent` | `void`   | 当选择状态改变时触发。                 |
| `onDrawModeChange`      | `DrawModeChangeEvent`      | `void`   | 当模式改变时触发。                     |
| `onDrawRender`          | `DrawRenderEvent`          | `void`   | 当调用 `setData` 更新地图时触发。      |
| `onDrawActionable`      | `DrawActionableEvent`      | `void`   | 当状态改变以启用或禁用某些操作时触发。 |

### DrawControl Method

| 方法名               | 参数                                                      | 返回值                                                       | 说明                                                                                     |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `add`                | `GeoJSON Feature \| FeatureCollection \|  Geometry`       | `Array<string>`                                              | 将 `GeoJSON` 要素添加到地图中。返回要素的 `id` 数组。如果要素没有 `id`，则自动生成一个。 |
| `get`                | `string`                                                  | `Feature \| undefined`                                       | 获取指定 `id` 的 `GeoJSON` 要素。如果 `id` 不存在，则返回 `undefined`。                  |
| `getFeatureIdsAt`    | `{x: number, y: number}`                                  | `Array<string>`                                              | 根据坐标获取要素，返回在指定点渲染的要素的 `id` 数组。                                   |
| `getSelectedIds`     | `void`                                                    | `Array<string>`                                              | 获取当前选中的要素的 `id` 数组。                                                         |
| `getSelected`        | `void`                                                    | `FeatureCollection`                                          | 获取当前选中的所有要素的 FeatureCollection。                                             |
| `getSelectedPoints`  | `void`                                                    | `FeatureCollection`                                          | 获取当前选中的所有顶点的 FeatureCollection。                                             |
| `getAll()`           | `void`                                                    | `FeatureCollection`                                          | 获取所有要素的 FeatureCollection。                                                       |
| `delete`             | `string \| Array<string>`                                 | `ids`: 要删除的要素的 `id` 或 `id` 数组 \| `drDrawControlaw` | 删除指定 `id` 的要素。返回 `DrawControl` 实例以便链式调用。 \|                           |
| `deleteAll`          | `void`                                                    | `MapboxDraw`                                                 | 删除所有要素。返回 `DrawControl` 实例以便链式调用。                                      |
| `set`                | `FeatureCollection`                                       | `Array<string>`                                              | 将 绘制的图形设置为指定的 `FeatureCollection`。返回添加的要素的 `id` 数组。              |
| `trash`              | `void`                                                    | `DrawControl`                                                | 调用当前模式的删除操作。返回 `DrawControl` 实例以便链式调用。                            |
| `combineFeatures`    | `void`                                                    | `DrawControl`                                                | 调用当前模式的合并要素操作。返回 `DrawControl` 实例以便链式调用。                        |
| `uncombineFeatures`  | `void`                                                    | `DrawControl`                                                | 调用当前模式的拆分要素操作。返回 `DrawControl` 实例以便链式调用。                        |
| `getMode`            | `void`                                                    | `string`                                                     | 返回 `DrawControl` 的当前模式。                                                          |
| `changeMode`         | `mode`: `string`;`options?`: `object`                     | `DrawControl`                                                | 更改 `DrawControl` 的模式。返回 `DrawControl` 实例以便链式调用。                         |
| `setFeatureProperty` | `featureId`: `string`;`property`: `string`;`value`: `any` | `DrawControl`                                                | 设置指定要素的属性的值。返回 `DrawControl` 实例以便链式调用。                            |
