import { isEqual } from 'lodash-es';
import { BackgroundLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context/index';
import { BackgroundLayerProps } from '../types';

const BackgroundLayer: FC<BackgroundLayerProps> = (props) => {
  const {
    id,
    filter,
    maxzoom = 24,
    minzoom = 0,
    slot,
    color = '#000000',
    emissiveStrength = 0,
    opacity = 1,
    imgUrl,

    visibility = 'visible',
    beforeId,
  } = props;

  const map = useContext(MapContext);

  const prevProps = useRef<BackgroundLayerProps | null>(null);

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

    const layerOptions: BackgroundLayerSpecification = {
      id,
      type: 'background',
    };
    const paint: BackgroundLayerSpecification['paint'] = {};
    const layout: BackgroundLayerSpecification['layout'] = {};

    if (filter) {
      layerOptions.filter = filter as never;
    }
    if (slot) {
      layerOptions.slot = slot;
    }

    layerOptions.maxzoom = maxzoom;

    layerOptions.minzoom = minzoom;

    paint['background-color'] = color;

    paint['background-emissive-strength'] = emissiveStrength;

    paint['background-opacity'] = opacity;

    layout['visibility'] = visibility;

    layerOptions.paint = paint;
    layerOptions.layout = layout;

    if (imgUrl) {
      loadImage(imgUrl).then((res) => {
        layerOptions.paint!['background-pattern'] = res;
        if (map.getLayer(id)) map.removeLayer(id);
        map.addLayer(layerOptions, beforeId);
      });
    } else {
      if (map.getLayer(id)) map.removeLayer(id);
      map.addLayer(layerOptions);
    }

    return () => {
      if (map?.getLayer(id)) map.removeLayer(id);
    };
  }, [map, id]);

  useEffect(() => {
    if (!map) return;

    if (!prevProps.current) {
      prevProps.current = props; // 初始化
      return;
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

    if (color !== prevProps.current.color) {
      map.setPaintProperty(id, 'background-color', color);
    }

    if (emissiveStrength !== prevProps.current.emissiveStrength) {
      map.setPaintProperty(
        id,
        'background-emissive-strength',
        emissiveStrength,
      );
    }

    if (opacity !== prevProps.current.opacity) {
      map.setPaintProperty(id, 'background-opacity', opacity);
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
    JSON.stringify(filter),
    maxzoom,
    minzoom,
    slot,
    color,
    emissiveStrength,
    opacity,
    visibility,
    beforeId,
    imgUrl,
  ]);

  return null;
};

export default BackgroundLayer;
