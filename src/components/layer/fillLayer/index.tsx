import { isEqual } from 'lodash-es';
import { FillLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import useEvents from '../../../events';
import { FillLayerProps, LayerEvents } from '../types';

const FIllLayer: FC<FillLayerProps & LayerEvents> = (props) => {
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

    antialias = true,
    color = '#000000',
    emissiveStrength = 0,
    opacity = 1,
    outlineColor,
    imgUrl,
    sortKey,
    translate = [0, 0],
    translateAnchor = 'map',
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<FillLayerProps | null>(null);
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

    const layerOptions: FillLayerSpecification = {
      id,
      type: 'fill',
      source: id,
    };
    const paint: FillLayerSpecification['paint'] = {};
    const layout: FillLayerSpecification['layout'] = {};

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
      layout['fill-sort-key'] = sortKey;
    }

    if (outlineColor) {
      paint['fill-outline-color'] = outlineColor;
    }

    layerOptions.maxzoom = maxzoom;
    layerOptions.minzoom = minzoom;

    paint['fill-antialias'] = antialias;
    paint['fill-color'] = color;
    paint['fill-emissive-strength'] = emissiveStrength;
    paint['fill-opacity'] = opacity;
    paint['fill-translate'] = translate;
    paint['fill-translate-anchor'] = translateAnchor;

    layout['visibility'] = visibility;

    layerOptions.paint = paint;
    layerOptions.layout = layout;

    if (imgUrl) {
      loadImage(imgUrl).then((res) => {
        layerOptions.paint!['fill-pattern'] = res;
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
    if (antialias !== prevProps.current.antialias) {
      map.setPaintProperty(id, 'fill-antialias', antialias);
    }

    if (!isEqual(color, prevProps.current.color)) {
      map.setPaintProperty(id, 'fill-color', color);
    }

    if (emissiveStrength !== prevProps.current.emissiveStrength) {
      map.setPaintProperty(id, 'fill-emissive-strength', emissiveStrength);
    }

    if (!isEqual(opacity, prevProps.current.opacity)) {
      map.setPaintProperty(id, 'fill-opacity', opacity);
    }

    if (!isEqual(outlineColor, prevProps.current.outlineColor)) {
      map.setPaintProperty(id, 'fill-outline-color', outlineColor);
    }

    if (sortKey !== prevProps.current.sortKey) {
      map.setLayoutProperty(id, 'fill-sort-key', sortKey);
    }

    if (!isEqual(translate, prevProps.current.translate)) {
      map.setPaintProperty(id, 'fill-translate', translate);
    }
    if (translateAnchor !== prevProps.current.translateAnchor) {
      map.setPaintProperty(id, 'fill-translate-anchor', translateAnchor);
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
    antialias,
    JSON.stringify(color),
    JSON.stringify(emissiveStrength),
    JSON.stringify(opacity),
    JSON.stringify(outlineColor),
    sortKey,
    JSON.stringify(translate),
    translateAnchor,
    imgUrl,
  ]);

  if (map) updateEvents(map, id);

  return null;
};

export default FIllLayer;
