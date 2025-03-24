---
nav:
  title: 组件
  order: 3
group:
  title: 地图工具
  order: 5

title: 空间分析
order: 3

toc: content
---

## 空间分析

:::info{title=介绍}
空间分析是用来分析空间要素之间的空间关系。
:::

`MapTool` 工具类提供了对要素进行空间分析的方法。

### isPointOnLine

判断点是否在线上。

**参数**

- `point`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 点。
- `line`:`number[][] | GeoJSON.Feature<GeoJSON.LineString>` 线。

**返回值**

- `isOnLine`:`boolean` 是否在线上。

<code src="../examples/spatialAnalysis/demo1.tsx" compact="true" ></code>

### isPointOnPolygon

判断点是否在多边形内。

**参数**

- `point`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 点。
- `polygon`:`number[][][] | GeoJSON.Feature<GeoJSON.Polygon>` 多边形。
  - `options?`:`object`
    - `ignoreBoundary?`:`boolean` 是否忽略边界，默认值：`false`。

**返回值**

- `isInPolygon`:`boolean` 是否在多边形内。

<code src="../examples/spatialAnalysis/demo2.tsx" compact="true" ></code>

### isIntersects

判断两个要素是否相交。

**参数**

- `feature1`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 1。
- `feature2`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 2。

**返回值**

- `isIntersects`:`boolean` 是否相交。

<code src="../examples/spatialAnalysis/demo3.tsx" compact="true" ></code>

### isWithin

判断第一个要素是否被第二个要素包含。

**参数**

- `feature1`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 1。
- `feature2`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 2。

**返回值**

- `isWithin`:`boolean` 是否被包含。

<code src="../examples/spatialAnalysis/demo4.tsx" compact="true" ></code>

### isContains

判断第一个要素是否包含第二个要素。

**参数**

- `feature1`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 1。
- `feature2`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 2。

**返回值**

- `isContains`:`boolean` 是否包含。

<code src="../examples/spatialAnalysis/demo5.tsx" compact="true" ></code>

### isOverlap

判断两个要素是否有重叠部分。

**参数**

- `feature1`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 1。
- `feature2`:`GeoJSON.Feature | GeoJSON.Geometry` 要素 2。

**返回值**

- `isOverlap`:`boolean` 是否有重叠部分。

<code src="../examples/spatialAnalysis/demo6.tsx" compact="true" ></code>
