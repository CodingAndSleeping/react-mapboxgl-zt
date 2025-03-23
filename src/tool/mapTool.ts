import * as turf from '@turf/turf';

export type BBox =
  | [number, number, number, number]
  | [number, number, number, number, number, number];

class MapUtils {
  // 几何计算

  /**
   * 计算两个坐标之间的距离
   * @param from - 起始坐标
   * @param to - 目标坐标
   * @param options - 选项
   * @returns 返回计算后的距离
   */
  distance(
    from: number[] | GeoJSON.Feature<GeoJSON.Point>,
    to: number[] | GeoJSON.Feature<GeoJSON.Point>,
    options: {
      units?: turf.Units;
      formatter?: (val: number) => number;
    } = {},
  ): number {
    const { units, formatter } = options;

    const _from = Array.isArray(from) ? turf.point(from) : from;

    const _to = Array.isArray(to) ? turf.point(to) : to;

    const distance = turf.distance(_from, _to, {
      units: units || 'kilometers',
    });

    if (formatter) return formatter(distance);
    return distance;
  }

  /**
   * 计算点到线的距离
   * @param point - 点
   * @param line - 线
   * @param options - 选项
   * @returns  返回计算后的距离
   */
  pointToLineDistance(
    point: number[] | GeoJSON.Feature<GeoJSON.Point>,
    line: number[][] | GeoJSON.Feature<GeoJSON.LineString>,
    options: {
      units?: turf.Units;
      method?: 'geodesic' | 'planar';
      formatter?: (val: number) => number;
    },
  ): number {
    const { units, method, formatter } = options;

    const _point = Array.isArray(point) ? turf.point(point) : point;
    const _line = Array.isArray(line) ? turf.lineString(line) : line;

    let res = turf.pointToLineDistance(_point, _line, {
      units: units || 'kilometers',
      method: method || 'geodesic',
    });

    if (formatter) res = formatter(res);
    return res;
  }

  /**
   * 计算多段坐标的总长度或线的长度
   * @param line - 多段坐标或线
   * @param  options - 选项
   * @returns 返回计算后的长度
   */
  length(
    line: number[][] | GeoJSON.Feature<GeoJSON.LineString>,
    options: {
      units?: turf.Units;
      formatter?: (val: number) => number;
    } = {},
  ): number {
    const { units, formatter } = options;
    const _line = Array.isArray(line) ? turf.lineString(line) : line;
    let res = turf.length(_line, {
      units: units || 'kilometers',
    });

    if (formatter) return formatter(res);
    return res;
  }

  /**
   * 计算多边形面积
   * @param  polygon - 多边形
   * @param  options - 选项
   * @returns 返回计算后的面积
   */
  area(
    polygon: number[][][] | GeoJSON.Feature<GeoJSON.Polygon>,
    options: {
      formatter?: (val: number) => number;
    } = {},
  ): number {
    const { formatter } = options;
    const _polygon = Array.isArray(polygon) ? turf.polygon(polygon) : polygon;
    let res = turf.area(_polygon);
    if (formatter) res = formatter(res);
    return res;
  }

  // 空间计算

  /**
   * 计算点到线最近的点
   * @param point - 点
   * @param line - 线
   * @returns 返回最近点的坐标
   */
  nearestPointOnLine(
    point: number[] | GeoJSON.Feature<GeoJSON.Point>,
    line: number[][] | GeoJSON.Feature<GeoJSON.LineString>,
  ): GeoJSON.Feature<GeoJSON.Point> {
    const _point = Array.isArray(point) ? turf.point(point) : point;
    const _line = Array.isArray(line) ? turf.lineString(line) : line;

    const res = turf.nearestPointOnLine(_line, _point);
    return res;
  }

  /**
   * 计算沿线的点
   * @param line - 线
   * @param percent - 百分比
   * @returns 返回沿线的点坐标
   */
  pointAlongLine(
    line: number[][] | GeoJSON.Feature<GeoJSON.LineString>,
    percent: number,
  ): GeoJSON.Feature<GeoJSON.Point> {
    const _line = Array.isArray(line) ? turf.lineString(line) : line;
    const length = this.length(line) * percent;
    const res = turf.along(_line, length);
    return res;
  }

  /**
   * 缓冲区计算
   * @param feature - 要缓冲的要素
   * @param distance - 缓冲距离
   * @param options - 选项
   * @returns 返回缓冲区结果
   */
  buffer(
    feature: GeoJSON.Feature,
    distance: number,
    options: {
      units?: turf.Units;
      steps?: number;
    } = {},
  ): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon> | undefined {
    return turf.buffer(feature, distance, options);
  }

  /**
   * 相交计算
   * @param feature1
   * @param feature2
   * @param properties
   * @returns 返回相交结果
   */
  intersection(
    feature1: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
    feature2: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
    properties?: GeoJSON.GeoJsonProperties,
  ): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null {
    return turf.intersect(
      turf.featureCollection([feature1, feature2]),
      properties || {},
    );
  }

  /**
   * 合并计算
   * @param feature1
   * @param feature2
   * @returns 返回合并结果
   */
  union(
    feature1: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
    feature2: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
    properties?: GeoJSON.GeoJsonProperties,
  ): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null {
    return turf.union(
      turf.featureCollection([feature1, feature2]),
      properties || {},
    );
  }

  /**
   * 差异计算
   * @param feature1
   * @param feature2
   * @returns 返回差异结果
   */
  difference(
    feature1: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
    feature2: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
  ): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null {
    return turf.difference(turf.featureCollection([feature1, feature2]));
  }

  /**
   * 计算四至
   * @param feature
   * @returns 返回四至范围
   */
  bbox(feature: GeoJSON.Feature | GeoJSON.FeatureCollection): BBox {
    return turf.bbox(feature);
  }

  /**
   * 计算四至围成的多边形
   * @param feature
   * @returns 返回多边形
   */
  bboxPolygon(
    feature: GeoJSON.Feature | GeoJSON.FeatureCollection,
  ): GeoJSON.Feature<GeoJSON.Polygon> {
    const bbox = this.bbox(feature);
    return turf.bboxPolygon(bbox);
  }

  /**
   * 获取质心
   * @param feature
   * @returns 返回质心坐标
   */
  centroid(
    feature: GeoJSON.Feature | GeoJSON.FeatureCollection,
  ): GeoJSON.Feature<GeoJSON.Point> {
    return turf.centroid(feature);
  }

  /**
   * 获取中心点
   * @param {*} feature
   * @returns {[Number, Number]} 返回中心点坐标
   */
  center(
    feature: GeoJSON.Feature | GeoJSON.FeatureCollection,
  ): GeoJSON.Feature<GeoJSON.Point> {
    return turf.center(feature);
  }

  // 空间分析

  /**
   * 点是否在线上
   * @param  point - 点
   * @param  line - 线
   * @returns  返回布尔值
   */
  isPointOnLine(
    point: number[] | GeoJSON.Feature<GeoJSON.Point>,
    line: number[][] | GeoJSON.Feature<GeoJSON.LineString>,
  ): boolean {
    const _point = Array.isArray(point) ? turf.point(point) : point;
    const _line = Array.isArray(line) ? turf.lineString(line) : line;
    const res = turf.booleanPointOnLine(_point, _line);
    return res;
  }

  /**
   * 点是否在多边形内
   * @param point - 点
   * @param polygon - 多边形
   * @returns 返回布尔值
   */
  isPointInPolygon(
    point: number[] | GeoJSON.Feature<GeoJSON.Point>,
    polygon: number[][][] | GeoJSON.Feature<GeoJSON.Polygon>,
    options: {
      ignoreBoundary?: boolean;
    } = {},
  ): boolean {
    const { ignoreBoundary } = options;
    const _point = Array.isArray(point) ? turf.point(point) : point;
    const _polygon = Array.isArray(polygon) ? turf.polygon(polygon) : polygon;
    const res = turf.booleanPointInPolygon(_point, _polygon, {
      ignoreBoundary: ignoreBoundary || false,
    });
    return res;
  }

  /**
   * 判断是否相交
   * @param feature1
   * @param feature2
   * @returns {Boolean} 返回布尔值
   */
  isIntersects(
    feature1: GeoJSON.Feature | GeoJSON.Geometry,
    feature2: GeoJSON.Feature | GeoJSON.Geometry,
  ): boolean {
    return turf.booleanIntersects(feature1, feature2);
  }

  /**
   * 判断feature1是否被feature2包含
   * @param  feature1
   * @param  feature2
   * @returns {Boolean} 返回布尔值
   */
  isWithin(
    feature1: GeoJSON.Feature | GeoJSON.Geometry,
    feature2: GeoJSON.Feature | GeoJSON.Geometry,
  ): boolean {
    return turf.booleanWithin(feature1, feature2);
  }

  /**
   * 判断feature1是否包含feature2
   * @param feature1
   * @param feature2
   * @returns 返回布尔值
   */
  isContains(
    feature1: GeoJSON.Feature | GeoJSON.Geometry,
    feature2: GeoJSON.Feature | GeoJSON.Geometry,
  ): boolean {
    return turf.booleanContains(feature1, feature2);
  }

  /**
   * 判断feature1和feature2是否有重叠部分
   * @param feature1
   * @param feature2
   * @returns 返回布尔值
   */
  isOverlap(
    feature1: GeoJSON.Feature | GeoJSON.Geometry,
    feature2: GeoJSON.Feature | GeoJSON.Geometry,
  ): boolean {
    return turf.booleanOverlap(feature1, feature2);
  }
}

export default MapUtils;
