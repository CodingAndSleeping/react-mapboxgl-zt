import { isEqual } from 'lodash-es';
import { CircleLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context/index';
import { updateEvents } from '../events';
import { Events } from '../events/types';
import { CircleLayerProps } from './types';

const CircleLayer: FC<CircleLayerProps & Events> = (props) => {
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

    blur = 0,
    color = '#000000',
    emissiveStrength = 0,
    opacity = 1,
    pitchAlignment = 'viewport',
    pitchScale = 'map',
    radius = 5,
    sortKey,
    strokeColor = '#000000',
    strokeOpacity = 1,
    strokeWidth = 0,
    translate = [0, 0],
    translateAnchor = 'map',
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<CircleLayerProps>();

  useEffect(() => {
    if (!map) return;

    const layerOptions: CircleLayerSpecification = {
      id,
      type: 'circle',
      source: id,
    };
    const paint: CircleLayerSpecification['paint'] = {};
    const layout: CircleLayerSpecification['layout'] = {};

    if (sourceLayer) {
      layerOptions['source-layer'] = sourceLayer;
    }

    if (filter) {
      layerOptions.filter = filter;
    }

    if (slot) {
      layerOptions.slot = slot;
    }
    if (sortKey) {
      layout['circle-sort-key'] = sortKey;
    }

    layerOptions.maxzoom = maxzoom;

    layerOptions.minzoom = minzoom;

    paint['circle-blur'] = blur;
    paint['circle-color'] = color;
    paint['circle-emissive-strength'] = emissiveStrength;
    paint['circle-opacity'] = opacity;
    paint['circle-pitch-alignment'] = pitchAlignment;
    paint['circle-pitch-scale'] = pitchScale;
    paint['circle-radius'] = radius;
    paint['circle-stroke-color'] = strokeColor;
    paint['circle-stroke-opacity'] = strokeOpacity;
    paint['circle-stroke-width'] = strokeWidth;
    paint['circle-translate'] = translate;
    paint['circle-translate-anchor'] = translateAnchor;

    layout['visibility'] = visibility;

    layerOptions.paint = paint;
    layerOptions.layout = layout;

    if (map.getLayer(id)) map.removeLayer(id);
    if (map.getSource(id)) map.removeSource(id);
    map.addSource(id, source);
    map.addLayer(layerOptions, beforeId);

    return () => {
      if (map?.getLayer(id)) map.removeLayer(id);
      if (map?.getSource(id)) map.removeSource(id);
    };
  }, [map, id]);

  useEffect(() => {
    if (!map) return;

    const layerOptions = map.getLayer(id);
    if (!layerOptions) return;

    if (!prevProps.current) {
      prevProps.current = props;
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
      maxzoom &&
      minzoom &&
      (maxzoom !== prevProps.current.maxzoom ||
        minzoom !== prevProps.current.minzoom)
    ) {
      map.setLayerZoomRange(id, minzoom, maxzoom);
    }

    if (slot !== prevProps.current.slot) {
      map.setSlot(id, slot);
    }

    if (visibility !== prevProps.current.visibility) {
      map.setLayoutProperty(id, 'visibility', visibility);
    }

    if (!isEqual(blur, prevProps.current.blur)) {
      map.setPaintProperty(id, 'circle-blur', blur);
    }

    if (!isEqual(color, prevProps.current.color)) {
      map.setPaintProperty(id, 'circle-color', color);
    }

    if (emissiveStrength !== prevProps.current.emissiveStrength) {
      map.setPaintProperty(id, 'circle-emissive-strength', emissiveStrength);
    }

    if (!isEqual(opacity, prevProps.current.opacity)) {
      map.setPaintProperty(id, 'circle-opacity', opacity);
    }
    if (pitchAlignment !== prevProps.current.pitchAlignment) {
      map.setPaintProperty(id, 'circle-pitch-alignment', pitchAlignment);
    }

    if (pitchScale !== prevProps.current.pitchScale) {
      map.setPaintProperty(id, 'circle-pitch-scale', pitchScale);
    }

    if (!isEqual(radius, prevProps.current.radius)) {
      map.setPaintProperty(id, 'circle-radius', radius);
    }
    if (sortKey !== prevProps.current.sortKey) {
      map.setLayoutProperty(id, 'circle-sort-key', sortKey);
    }

    if (!isEqual(strokeColor, prevProps.current.strokeColor)) {
      map.setPaintProperty(id, 'circle-stroke-color', strokeColor);
    }
    if (!isEqual(strokeOpacity, prevProps.current.strokeOpacity)) {
      map.setPaintProperty(id, 'circle-stroke-opacity', strokeOpacity);
    }

    if (!isEqual(strokeWidth, prevProps.current.strokeWidth)) {
      map.setPaintProperty(id, 'circle-stroke-width', strokeWidth);
    }
    if (!isEqual(translate, prevProps.current.translate)) {
      map.setPaintProperty(id, 'circle-translate', translate);
    }
    if (translateAnchor !== prevProps.current.translateAnchor) {
      map.setPaintProperty(id, 'circle-translate-anchor', translateAnchor);
    }

    if (beforeId !== prevProps.current.beforeId) {
      map.moveLayer(id, beforeId);
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
    JSON.stringify(blur),
    JSON.stringify(color),
    JSON.stringify(emissiveStrength),
    JSON.stringify(opacity),
    pitchAlignment,
    pitchScale,
    JSON.stringify(radius),
    sortKey,
    JSON.stringify(strokeColor),
    JSON.stringify(strokeOpacity),
    JSON.stringify(strokeWidth),
    JSON.stringify(translate),
    translateAnchor,
    beforeId,
  ]);

  if (map) updateEvents(props, map, id);

  return null;
};

export default CircleLayer;
