import { isEqual } from 'lodash-es';
import { LineLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import useEvents from '../../../events';
import { LayerEvents, LineLayerProps } from '../types';

const FIllLayer: FC<LineLayerProps & LayerEvents> = (props) => {
  const {
    id,
    source,
    sourceLayer,
    filter,
    maxzoom = 24,
    minzoom = 0,
    slot,
    beforeId,
    visibility = 'visible',
    imgUrl,

    blur = 0,
    cap = 'butt',
    color = '#000000',
    dasharray,
    emissiveStrength = 0,
    gapWidth = 0,
    gradient,
    join = 'miter',
    miterLimit = 2,
    occlusionOpacity = 0,
    offset = 0,
    opacity = 1,
    roundLimit = 1.05,
    sortKey,
    translate = [0, 0],
    translateAnchor = 'map',

    trimOffset,
    width = 1,
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<LineLayerProps | null>(null);
  const { updateEvents, offEvents } = useEvents(props);

  const loadImage = (imgUrl: string): Promise<string> => {
    return new Promise((reslove) => {
      map!.loadImage(imgUrl, (error, image) => {
        if (error) throw error;
        if (map!.hasImage(id)) map!.removeImage(id);
        if (image) map!.addImage(id, image);
        reslove(id);
      });
    });
  };

  useEffect(() => {
    if (!map) return;

    const layerOptions: LineLayerSpecification = {
      id,
      type: 'line',
      source: id,
    };
    const paint: LineLayerSpecification['paint'] = {};
    const layout: LineLayerSpecification['layout'] = {};

    if (sourceLayer) {
      layerOptions['source-layer'] = sourceLayer;
    }

    if (filter) {
      layerOptions.filter = filter;
    }

    if (slot) {
      layerOptions.slot = slot;
    }
    if (dasharray) {
      paint['line-dasharray'] = dasharray;
    }
    if (gradient) {
      paint['line-gradient'] = gradient;
    }

    if (sortKey) {
      layout['line-sort-key'] = sortKey;
    }

    if (trimOffset) {
      paint['line-trim-offset'] = trimOffset;
    }

    layerOptions.maxzoom = maxzoom;
    layerOptions.minzoom = minzoom;
    paint['line-blur'] = blur;
    paint['line-color'] = color;
    paint['line-emissive-strength'] = 0;
    paint['line-gap-width'] = gapWidth;

    paint['line-occlusion-opacity'] = occlusionOpacity;
    paint['line-offset'] = offset;
    paint['line-opacity'] = opacity;
    paint['line-translate'] = translate;
    paint['line-translate-anchor'] = translateAnchor;
    paint['line-width'] = width;
    layout['line-round-limit'] = roundLimit;
    layout['line-miter-limit'] = miterLimit;
    layout['line-join'] = join;
    layout['line-cap'] = cap;
    layout['visibility'] = visibility;

    layerOptions.paint = paint;
    layerOptions.layout = layout;

    if (imgUrl) {
      loadImage(imgUrl).then((res) => {
        layerOptions.paint!['line-pattern'] = res;
        if (map.getLayer(id)) map.removeLayer(id);
        if (map.getSource(id)) map.removeSource(id);
        map.addSource(id, source);
        map.addLayer(layerOptions, beforeId);
      });
    } else {
      if (map.getLayer(id)) map.removeLayer(id);
      if (map.getSource(id)) map.removeSource(id);

      map.addSource(id, source);
      map.addLayer(layerOptions, beforeId);
    }

    return () => {
      if (map.getLayer(id)) map.removeLayer(id);
      if (map.getSource(id)) map.removeSource(id);
      offEvents(map, id);

      prevProps.current = null;
    };
  }, [map, id]);

  useEffect(() => {
    if (!map) return;
    const layerOptions = map.getLayer(id);
    if (!layerOptions) return;

    if (!prevProps.current) {
      prevProps.current = props; // 初始化
      return;
    }

    if (!isEqual(source, prevProps.current.source)) {
      map.removeLayer(id);
      map.removeSource(id);
      map.addSource(id, source);
      map.addLayer(layerOptions);
    }

    if (sourceLayer !== prevProps.current.sourceLayer) {
      layerOptions['source-layer'] = sourceLayer;
      map.removeLayer(id);
      map.addLayer(layerOptions);
    }

    if (!isEqual(filter, prevProps.current.filter)) {
      map.setFilter(id, filter);
    }

    if (
      maxzoom !== prevProps.current.maxzoom ||
      minzoom !== prevProps.current.minzoom
    ) {
      map.setLayerZoomRange(id, minzoom, maxzoom);
    }

    if (slot !== prevProps.current.slot) {
      map.setSlot(id, slot);
    }
    if (!isEqual(blur, prevProps.current.blur)) {
      map.setPaintProperty(id, 'line-blur', blur);
    }

    if (cap !== prevProps.current.cap) {
      map.setLayoutProperty(id, 'line-cap', cap);
    }
    if (!isEqual(color, prevProps.current.color)) {
      map.setPaintProperty(id, 'line-color', color);
    }

    if (!isEqual(dasharray, prevProps.current.dasharray)) {
      map.setPaintProperty(id, 'line-dasharray', dasharray);
    }

    if (emissiveStrength !== prevProps.current.emissiveStrength) {
      map.setPaintProperty(id, 'line-emissive-strength', emissiveStrength);
    }

    if (!isEqual(gapWidth, prevProps.current.gapWidth)) {
      map.setPaintProperty(id, 'line-gap-width', gapWidth);
    }
    if (!isEqual(gradient, prevProps.current.gradient)) {
      map.setPaintProperty(id, 'line-gradient', gradient);
    }
    if (join !== prevProps.current.join) {
      map.setLayoutProperty(id, 'line-join', join);
    }

    if (!isEqual(miterLimit, prevProps.current.miterLimit)) {
      map.setLayoutProperty(id, 'line-miter-limit', miterLimit);
    }
    if (!isEqual(occlusionOpacity, prevProps.current.occlusionOpacity)) {
      map.setPaintProperty(id, 'line-occlusion-opacity', occlusionOpacity);
    }
    if (!isEqual(offset, prevProps.current.offset)) {
      map.setPaintProperty(id, 'line-offset', offset);
    }

    if (!isEqual(opacity, prevProps.current.opacity)) {
      map.setPaintProperty(id, 'line-opacity', opacity);
    }

    if (!isEqual(roundLimit, prevProps.current.roundLimit)) {
      map.setLayoutProperty(id, 'line-round-limit', roundLimit);
    }

    if (sortKey !== prevProps.current.sortKey) {
      map.setLayoutProperty(id, 'line-sort-key', sortKey);
    }

    if (!isEqual(translate, prevProps.current.translate)) {
      map.setPaintProperty(id, 'line-translate', translate);
    }
    if (translateAnchor !== prevProps.current.translateAnchor) {
      map.setPaintProperty(id, 'line-translate-anchor', translateAnchor);
    }

    if (!isEqual(trimOffset, prevProps.current.trimOffset)) {
      map.setPaintProperty(id, 'line-trim-offset', trimOffset);
    }
    if (!isEqual(width, prevProps.current.width)) {
      map.setPaintProperty(id, 'line-width', width);
    }

    if (visibility !== prevProps.current.visibility) {
      map.setLayoutProperty(id, 'visibility', visibility);
    }

    if (beforeId !== prevProps.current.beforeId) {
      map.moveLayer(id, beforeId);
    }

    if (imgUrl && imgUrl !== prevProps.current.imgUrl) {
      loadImage(imgUrl);
    }

    prevProps.current = props;
  }, [
    source,
    sourceLayer,
    JSON.stringify(filter),
    maxzoom,
    minzoom,
    slot,
    visibility,
    beforeId,

    JSON.stringify(blur),
    cap,
    JSON.stringify(color),
    JSON.stringify(dasharray),
    JSON.stringify(emissiveStrength),
    gapWidth,
    JSON.stringify(gradient),
    join,
    JSON.stringify(miterLimit),
    JSON.stringify(occlusionOpacity),
    JSON.stringify(offset),
    JSON.stringify(opacity),
    JSON.stringify(roundLimit),
    sortKey,
    JSON.stringify(translate),
    translateAnchor,
    JSON.stringify(trimOffset),
    JSON.stringify(width),
    imgUrl,
  ]);

  if (map) updateEvents(map, id);

  return null;
};

export default FIllLayer;
