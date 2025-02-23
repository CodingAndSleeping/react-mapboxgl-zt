import { isEqual } from 'lodash-es';
import { HeatmapLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { HeatmapLayerProps, LayerEvents } from '../types';

const FIllLayer: FC<HeatmapLayerProps & LayerEvents> = (props) => {
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

    color = [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(0, 0, 255, 0)',
      0.1,
      'royalblue',
      0.3,
      'cyan',
      0.5,
      'lime',
      0.7,
      'yellow',
      1,
      'red',
    ],
    intensity = 1,
    opacity = 1,
    radius = 30,
    weight = 1,
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<HeatmapLayerProps | null>(null);

  useEffect(() => {
    if (!map) return;

    const layerOptions: HeatmapLayerSpecification = {
      id,
      type: 'heatmap',
      source: id,
    };
    const paint: HeatmapLayerSpecification['paint'] = {};
    const layout: HeatmapLayerSpecification['layout'] = {};

    if (sourceLayer) {
      layerOptions['source-layer'] = sourceLayer;
    }

    if (filter) {
      layerOptions.filter = filter;
    }
    if (slot) {
      layerOptions.slot = slot;
    }

    layerOptions.maxzoom = maxzoom;
    layerOptions.minzoom = minzoom;

    paint['heatmap-color'] = color;
    paint['heatmap-intensity'] = intensity;
    paint['heatmap-opacity'] = opacity;
    paint['heatmap-radius'] = radius;
    paint['heatmap-weight'] = weight;

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

    if (visibility !== prevProps.current.visibility) {
      map.setLayoutProperty(id, 'visibility', visibility);
    }

    if (beforeId !== prevProps.current.beforeId) {
      map.moveLayer(id, beforeId);
    }

    if (!isEqual(color, prevProps.current.color)) {
      map.setPaintProperty(id, 'heatmap-color', color);
    }
    if (!isEqual(intensity, prevProps.current.intensity)) {
      map.setPaintProperty(id, 'heatmap-intensity', intensity);
    }
    if (!isEqual(opacity, prevProps.current.opacity)) {
      map.setPaintProperty(id, 'heatmap-opacity', opacity);
    }
    if (!isEqual(radius, prevProps.current.radius)) {
      map.setPaintProperty(id, 'heatmap-radius', radius);
    }
    if (!isEqual(weight, prevProps.current.weight)) {
      map.setPaintProperty(id, 'heatmap-weight', weight);
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

    JSON.stringify(color),
    JSON.stringify(intensity),
    JSON.stringify(opacity),
    JSON.stringify(radius),
    JSON.stringify(weight),
  ]);

  return null;
};

export default FIllLayer;
