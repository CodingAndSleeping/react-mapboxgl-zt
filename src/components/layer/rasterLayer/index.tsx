import { MapContext } from '@react-mapbox/context';
import { isEqual } from 'lodash-es';
import { RasterLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { RasterLayerProps } from '../types';

const TileLayer: FC<RasterLayerProps> = (props) => {
  const {
    id,
    source,
    maxzoom = 24,
    minzoom = 0,
    slot,
    filter,
    beforeId,
    visibility = 'visible',

    brightnessMax = 1,
    brightnessMin = 0,
    color,
    colorMix = [0.2126, 0.7152, 0.0722, 0],
    colorRange,
    contrast = 0,
    emissiveStrength = 0,
    fadeDuration = 300,
    hueRotate = 0,
    opacity = 1,
    resampling = 'linear',
    saturation = 0,
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<RasterLayerProps>();

  useEffect(() => {
    if (!map) return;

    const layerOptions: RasterLayerSpecification = {
      id,
      type: 'raster',
      source: id,
    };
    const paint: RasterLayerSpecification['paint'] = {};
    const layout: RasterLayerSpecification['layout'] = {};
    if (filter) {
      layerOptions.filter = filter as never;
    }
    if (slot) {
      layerOptions.slot = slot;
    }

    layerOptions.maxzoom = maxzoom;
    layerOptions.minzoom = minzoom;

    if (color) {
      paint['raster-color'] = color;
    }
    if (colorRange) {
      paint['raster-color-range'] = colorRange;
    }

    paint['raster-brightness-max'] = brightnessMax;
    paint['raster-brightness-min'] = brightnessMin;
    paint['raster-color-mix'] = colorMix;

    paint['raster-contrast'] = contrast;
    paint['raster-emissive-strength'] = emissiveStrength;
    paint['raster-fade-duration'] = fadeDuration;
    paint['raster-hue-rotate'] = hueRotate;
    paint['raster-opacity'] = opacity;
    paint['raster-resampling'] = resampling;
    paint['raster-saturation'] = saturation;

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
    const layer = map.getLayer(id);
    if (!layer) return;

    if (!prevProps.current) {
      prevProps.current = props;
      return;
    }

    if (!isEqual(source, prevProps.current.source)) {
      map.removeLayer(id);
      map.removeSource(id);
      map.addSource(id, source);
      map.addLayer(layer, beforeId);
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

    if (resampling !== prevProps.current.resampling) {
      map.setPaintProperty(id, 'raster-resampling', resampling);
    }

    if (!isEqual(brightnessMax, prevProps.current.brightnessMax)) {
      map.setPaintProperty(id, 'raster-brightness-max', brightnessMax);
    }
    if (!isEqual(brightnessMin, prevProps.current.brightnessMin)) {
      map.setPaintProperty(id, 'raster-brightness-min', brightnessMin);
    }
    if (!isEqual(color, prevProps.current.color)) {
      map.setPaintProperty(id, 'raster-color', color);
    }
    if (!isEqual(colorMix, prevProps.current.colorMix)) {
      map.setPaintProperty(id, 'raster-color-mix', colorMix);
    }
    if (!isEqual(colorRange, prevProps.current.colorRange)) {
      map.setPaintProperty(id, 'raster-color-range', colorRange);
    }
    if (!isEqual(contrast, prevProps.current.contrast)) {
      map.setPaintProperty(id, 'raster-contrast', contrast);
    }
    if (!isEqual(emissiveStrength, prevProps.current.emissiveStrength)) {
      map.setPaintProperty(id, 'raster-emissive-strength', emissiveStrength);
    }
    if (!isEqual(fadeDuration, prevProps.current.fadeDuration)) {
      map.setPaintProperty(id, 'raster-fade-duration', fadeDuration);
    }
    if (!isEqual(hueRotate, prevProps.current.hueRotate)) {
      map.setPaintProperty(id, 'raster-hue-rotate', hueRotate);
    }
    if (!isEqual(opacity, prevProps.current.opacity)) {
      map.setPaintProperty(id, 'raster-opacity', opacity);
    }
    if (!isEqual(saturation, prevProps.current.saturation)) {
      map.setPaintProperty(id, 'raster-saturation', saturation);
    }
    if (beforeId !== prevProps.current.beforeId) {
      map.moveLayer(id, beforeId);
    }

    prevProps.current = props;
  }, [
    source,
    maxzoom,
    minzoom,
    slot,
    JSON.stringify(filter),
    beforeId,
    visibility,
    resampling,
    JSON.stringify(brightnessMax),
    JSON.stringify(brightnessMin),
    JSON.stringify(color),
    JSON.stringify(colorMix),
    JSON.stringify(colorRange),
    JSON.stringify(contrast),
    JSON.stringify(emissiveStrength),
    JSON.stringify(fadeDuration),
    JSON.stringify(hueRotate),
    JSON.stringify(opacity),
    JSON.stringify(saturation),
  ]);

  return null;
};

export default TileLayer;
