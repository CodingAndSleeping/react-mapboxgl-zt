---
nav:
  title: 组件
  order: 3
group:
  title: 地图工具
  order: 5

title: 几何计算
order: 1

toc: content
---

## 几何计算

:::info{title=介绍}
几何计算是用来计算空间要素的距离、长度和面积。
:::

`MapTool` 工具类提供了对要素进行几何计算的方法。

### distance

计算两点之间的距离。

**参数**

- `from`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 起点。
- `to`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 终点。
- `options?`:`object`
  - `units?`:`turf.Units` 计算距离的单位，默认值：`kilometers`。
  - `formatter?`:`(val: number) => number` 格式化距离的函数。

**返回值**

- `distance`:`number` 距离。

<code src="../examples/geometry/demo1.tsx" compact="true" ></code>

### pointToLineDistance

计算点到线的距离。

**参数**

- `point`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 点。
- `line`:`number[][] | GeoJSON.Feature<GeoJSON.LineString>` 线。
- `options?`:`object`
  - `units?`:`turf.Units` 计算距离的单位，默认值：`kilometers`。
  - `method?`:`'geodesic' | 'planar'` 计算距离的方法，默认值：`geodesic`。
  - `formatter?`:`(val: number) => number` 格式化距离的函数。

**返回值**

- `distance`:`number` 距离。

<code src="../examples/geometry/demo2.tsx" compact="true" ></code>

### length

计算线的长度。

**参数**

- `line`:`number[][] | GeoJSON.Feature<GeoJSON.LineString>` 线。
- `options?`:`object`
  - `units?`:`turf.Units` 计算距离的单位，默认值：`kilometers`。
  - `formatter?`:`(val: number) => number` 格式化距离的函数。

**返回值**

- `length`:`number` 长度。

<code src="../examples/geometry/demo3.tsx" compact="true" ></code>

### area

计算多边形的面积。

**参数**

- `polygon`:`number[][][] | GeoJSON.Feature<GeoJSON.Polygon>` 多边形。
- `options?`:`object`
  - `formatter?`:`(val: number) => number` 格式化面积的函数。

**返回值**

- `area`:`number` 面积。

<code src="../examples/geometry/demo4.tsx" compact="true" ></code>
