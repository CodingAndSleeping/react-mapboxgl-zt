import * as turf from '@turf/turf';

class SfmapUtils {
  constructor() {}

  /**
   * 计算两个坐标之间的距离
   * @param {[Number, Number]} from - 起始坐标
   * @param {[Number, Number]} to - 目标坐标
   * @param {Object={units: "kilometers", formatter: (val) => val.toFixed(2)}} params - 参数
   * @returns {Number} 返回计算后的距离
   */
  distance(from, to, params = {}) {
    const _params = {
      units: 'kilometers',
      formatter: (val) => val.toFixed(2),
      ...params,
    };
    const options = {
      units: _params.units === 'meters' ? 'kilometers' : _params.units,
    };
    let res = turf.distance(turf.point(from), turf.point(to), options);
    if (_params.units === 'meters') res = res * 1000;
    if (_params.formatter) res = _params.formatter(res);
    return res;
  }

  /**
   * 计算多段坐标的总长度或线的长度
   * @param {[Array] | LineString} line - 多段坐标或线
   * @param {Object={units: "kilometers", formatter: (val) => val.toFixed(2)}} params - 参数
   * @returns {Number} 返回计算后的长度
   */
  length(line, params = {}) {
    const _params = {
      units: 'kilometers',
      formatter: (val) => val.toFixed(2),
      ...params,
    };
    const options = {
      units: _params.units === 'meters' ? 'kilometers' : _params.units,
    };
    line = Array.isArray(line) ? turf.lineString(line) : line;
    let res = turf.length(line, options);
    if (_params.units === 'meters') res = res * 1000;
    if (_params.formatter) res = _params.formatter(res);
    return res;
  }

  /**
   * 计算多边形面积
   * @param {[Array] | Polygon | MultiPolygon} polygon - 多边形
   * @param {Object={units: "meters", formatter: (val) => val.toFixed(2)}} params - 参数
   * @returns {Number} 返回计算后的面积
   */
  area(polygon, params = {}) {
    const _params = {
      units: 'meters',
      formatter: (val) => val.toFixed(2),
      ...params,
    };
    polygon = Array.isArray(polygon) ? turf.polygon([polygon]) : polygon;
    let res = turf.area(polygon);
    if (_params.units === 'kilometers') res = res / (1000 * 1000);
    if (_params.formatter) res = _params.formatter(res);
    return res;
  }

  /**
   * 计算点到线的距离
   * @param {[Number, Number]} point - 点
   * @param {[Number] | LineString} line - 线
   * @param {Object={units: "kilometers", formatter: (val) => val.toFixed(2)}} params - 参数
   * @returns {Number} 返回计算后的距离
   */
  pointToLineDistance(point, line, params = {}) {
    const _params = {
      units: 'kilometers',
      formatter: (val) => val.toFixed(2),
      ...params,
    };
    const options = {
      units: _params.units === 'meters' ? 'kilometers' : _params.units,
    };
    line = Array.isArray(line) ? turf.lineString(line) : line;

    let res = turf.pointToLineDistance(turf.point(point), line, options);
    if (_params.units === 'meters') res = res * 1000;
    if (_params.formatter) res = _params.formatter(res);
    return res;
  }

  /**
   * 计算点到线最近的点
   * @param {[Number, Number]} point - 点
   * @param {[Number] | LineString} line - 线
   * @returns {[Number, Number]} 返回最近点的坐标
   */
  nearestPointOnLine(point, line) {
    line = Array.isArray(line) ? turf.lineString(line) : line;

    const res = turf.nearestPointOnLine(line, turf.point(point));
    return res.geometry.coordinates;
  }

  /**
   * 计算沿线的点
   * @param {[Number] | LineString} line - 线
   * @param {Number} percent - 百分比
   * @returns {[Number, Number]} 返回沿线的点坐标
   */
  pointAlongLine(line, percent) {
    line = Array.isArray(line) ? turf.lineString(line) : line;
    const length = this.length(line) * percent;
    const res = turf.along(line, length);
    return res.geometry.coordinates;
  }

  /**
   * 点是否在线上
   * @param {[Number, Number]} point - 点
   * @param {[Number] | LineString} line - 线
   * @returns {Boolean} 返回布尔值
   */
  booleanPointOnLine(point, line) {
    line = Array.isArray(line) ? turf.lineString(line) : line;
    const res = turf.booleanPointOnLine(turf.point(point), line);
    return res;
  }

  /**
   * 点是否在多边形内
   * @param {[Number, Number]} point - 点
   * @param {[Array] | Polygon | MultiPolygon} polygon - 多边形
   * @returns {Boolean} 返回布尔值
   */
  booleanPointInPolygon(point, polygon) {
    polygon = Array.isArray(polygon) ? turf.polygon([polygon]) : polygon;
    const res = turf.booleanPointInPolygon(turf.point(point), polygon);
    return res;
  }

  /**
   * 判断是否相交
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Boolean} 返回布尔值
   */
  booleanIntersects(feature1, feature2) {
    return turf.booleanIntersects(feature1, feature2);
  }

  /**
   * 判断feature1是否被feature2包含
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Boolean} 返回布尔值
   */
  booleanWithin(feature1, feature2) {
    return turf.booleanWithin(feature1, feature2);
  }

  /**
   * 判断feature1是否包含feature2
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Boolean} 返回布尔值
   */
  booleanContains(feature1, feature2) {
    return turf.booleanContains(feature1, feature2);
  }

  /**
   * 判断feature1和feature2是否有重叠部分
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Boolean} 返回布尔值
   */
  booleanOverlap(feature1, feature2) {
    return turf.booleanOverlap(feature1, feature2);
  }

  /**
   * 缓冲区计算
   * @param {*} feature
   * @param {*} distance
   * @param {*} params
   * @returns {Feature} 返回缓冲区结果
   */
  buffer(feature, distance, params) {
    const _params = {
      units: 'kilometers',
      ...params,
    };
    const options = {
      units: _params.units === 'meters' ? 'kilometers' : _params.units,
    };
    distance = _params.units === 'meters' ? distance / 1000 : distance;
    return turf.buffer(feature, distance, options);
  }

  /**
   * 相交计算
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Feature} 返回相交结果
   */
  intersection(feature1, feature2) {
    return turf.intersect(turf.featureCollection([feature1, feature2]));
  }

  /**
   * 合并计算
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Feature} 返回合并结果
   */
  union(feature1, feature2) {
    return turf.union(turf.featureCollection([feature1, feature2]));
  }

  /**
   * 差异计算
   * @param {*} feature1
   * @param {*} feature2
   * @returns {Feature} 返回差异结果
   */
  difference(feature1, feature2) {
    return turf.difference(turf.featureCollection([feature1, feature2]));
  }

  /**
   * 计算四至
   * @param {*} feature
   * @returns {Array} 返回四至范围
   */
  bbox(feature) {
    return turf.bbox(feature);
  }

  /**
   * 计算四至围成的多边形
   * @param {*} bbox
   * @returns {Feature} 返回多边形
   */
  bboxPolygon(bbox) {
    return turf.bboxPolygon(bbox);
  }

  /**
   * 获取质心
   * @param {*} feature
   * @returns {[Number, Number]} 返回质心坐标
   */
  centroid(feature) {
    return turf.centroid(feature).geometry.coordinates;
  }

  /**
   * 获取中心点
   * @param {*} feature
   * @returns {[Number, Number]} 返回中心点坐标
   */
  center(feature) {
    return turf.center(feature).geometry.coordinates;
  }
}

export default SfmapUtils;
