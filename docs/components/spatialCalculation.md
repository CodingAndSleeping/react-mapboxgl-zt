---
nav:
  title: 组件
  order: 3
group:
  title: 地图工具
  order: 5

title: 空间计算
order: 2

toc: content
---

## 空间计算

:::info{title=介绍}
空间计算是通过要素的空间关系来计算空间要素的过程。
:::

`MapTool` 工具类提供了对要素进行空间计算的方法。

### nearestPointOnLine

计算点到线上最近的点。

**参数**

- `point`:`number[] | GeoJSON.Feature<GeoJSON.Point>` 点。
- `line`:`number[] | GeoJSON.Feature<GeoJSON.LineString>` 线。

**返回值**

- `point`:`GeoJSON.Feature<GeoJSON.Point>` 点到线上最近的点。

<code src="../examples/spatialCalculation/demo1.tsx" compact="true" ></code>

### pointAlongLine

计算线上指定百分比处的点。

**参数**

- `line`:`number[] | GeoJSON.Feature<GeoJSON.LineString>` 线。
- `percent`:`number` 百分比。

**返回值**

- `point`:`GeoJSON.Feature<GeoJSON.Point>` 线上指定百分比处的点。

<code src="../examples/spatialCalculation/demo2.tsx" compact="true" ></code>

### buffer

计算缓冲区。

**参数**

- `feature`:`GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>` 要素。
- `distance`:`number` 缓冲区距离。
- `options`: `object`
  - `units`:`string` 缓冲区单位，默认值：`kilometers`。
  - `steps`:`number` 缓冲区步长，默认值：`8`。

**返回值**

- `feature`:`GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>` 缓冲区。

<code src="../examples/spatialCalculation/demo3.tsx" compact="true"  ></code>

### intersection

相交计算。

**参数**

- `feature1`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 1。
- `feature2`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 2。
- `properties`:`GeoJSON.GeoJsonProperties,): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 属性。

**返回值**

- `feature`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null` 交集。

<code src="../examples/spatialCalculation/demo4.tsx" compact="true"  ></code>

### union

合并计算。

**参数**

- `feature1`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 1。
- `feature2`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 2。
- `properties`:`GeoJSON.GeoJsonProperties,): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 属性。

**返回值**

- `feature`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 并集。

<code src="../examples/spatialCalculation/demo5.tsx" compact="true"  ></code>

### difference

差集计算。

**参数**

- `feature1`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 1。
- `feature2`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 要素 2。
- `properties`:`GeoJSON.GeoJsonProperties,): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 属性。

**返回值**

- `feature`:`GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>` 第一个图形减去第二个图形的部分。

<code src="../examples/spatialCalculation/demo6.tsx" compact="true"  ></code>

### bbox

计算四至。

**参数**

- `feature`:`GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>` 要素。

**返回值**

- `bbox`:`BBox` 边界框。

<code src="../examples/spatialCalculation/demo7.tsx" compact="true" ></code>

### bboxPolygon

计算边界多边形。

**参数**

- `feature`:`GeoJSON.Feature | GeoJSON.FeatureCollection` 要素。

**返回值**

- `feature`:`GeoJSON.Feature<any>` 边界多边形。

<code src="../examples/spatialCalculation/demo8.tsx" compact="true"  ></code>

### centroid

计算质心。

**参数**

- `feature`:`GeoJSON.Feature | GeoJSON.FeatureCollection` 要素。

**返回值**

- `point`:`GeoJSON.Feature<GeoJSON.Point>` 质心点。

<code src="../examples/spatialCalculation/demo9.tsx" compact="true"  ></code>

### center

计算中心点。

**参数**

- `feature`:`GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>` 要素。

**返回值**

- `point`:`GeoJSON.Feature<GeoJSON.Point>` 几何中心。

<code src="../examples/spatialCalculation/demo10.tsx" compact="true"  ></code>
