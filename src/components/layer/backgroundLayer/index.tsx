import { isEqual } from 'lodash-es';
import { BackgroundLayerSpecification } from 'mapbox-gl';
import { FC, useContext, useEffect } from 'react';
import { MapContext } from '../../../context/index';
import { BackgroundLayerProps } from './types';

const BackgroundLayer: FC<BackgroundLayerProps> = (props) => {
  const {
    id,
    filter,
    maxzoom = 24,
    minzoom = 0,
    slot,
    color,
    emissiveStrength,
    opacity,
    imgUrl,
    visibility,
    beforeId,

    onLayerLoad,
  } = props;

  const map = useContext(MapContext);

  const layerOptions: BackgroundLayerSpecification = {
    id,
    type: 'background',
  };
  const paint: BackgroundLayerSpecification['paint'] = {};
  const layout: BackgroundLayerSpecification['layout'] = {};

  if (filter) {
    layerOptions.filter = filter as never;
  }
  if (maxzoom) {
    layerOptions.maxzoom = maxzoom;
  }
  if (minzoom) {
    layerOptions.minzoom = minzoom;
  }

  if (slot) {
    layerOptions.slot = slot;
  }

  if (color) {
    paint['background-color'] = color;
  }
  if (emissiveStrength) {
    paint['background-emissive-strength'] = emissiveStrength;
  }
  if (opacity) {
    paint['background-opacity'] = opacity;
  }

  if (visibility) {
    layout['visibility'] = visibility;
  }

  layerOptions.paint = paint;
  layerOptions.layout = layout;

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

  const addLayer = async () => {
    if (!map) return;
    if (imgUrl) {
      loadImage(imgUrl).then((res) => {
        layerOptions.paint!['background-pattern'] = res;
        map.addLayer(layerOptions, beforeId);
        if (onLayerLoad)
          onLayerLoad(map.getLayer<BackgroundLayerSpecification>(id)!);
      });
    } else {
      if (map.getLayer(id)) map.removeLayer(id);
      map.addLayer(layerOptions);
      if (onLayerLoad)
        onLayerLoad(map.getLayer<BackgroundLayerSpecification>(id)!);
    }
  };

  useEffect(() => {
    addLayer();
    return () => {
      if (map?.getLayer(id)) map.removeLayer(id);
    };
  }, [map, id, imgUrl]);

  useEffect(() => {
    if (!map) return;
    const layer = map.getLayer<BackgroundLayerSpecification>(id);
    if (!layer) return;

    if (filter && isEqual(filter, layer.filter)) {
      map.setFilter(id, filter);
    }

    if (
      maxzoom &&
      minzoom &&
      (maxzoom !== layer.maxzoom || minzoom !== layer.minzoom)
    ) {
      map.setLayerZoomRange(id, minzoom, maxzoom);
    }

    if (slot && slot !== layer.slot) {
      map.setSlot(id, slot);
    }

    if (color && color !== layer.paint?.['background-color']) {
      map.setPaintProperty(id, 'background-color', color);
    }

    if (
      emissiveStrength &&
      emissiveStrength !== layer.paint?.['background-emissive-strength']
    ) {
      map.setPaintProperty(
        id,
        'background-emissive-strength',
        emissiveStrength,
      );
    }

    if (opacity && opacity !== layer.paint?.['background-opacity']) {
      map.setPaintProperty(id, 'background-opacity', opacity);
    }
    if (visibility && visibility !== layer.layout?.visibility) {
      map.setLayoutProperty(id, 'visibility', visibility);
    }

    if (beforeId) {
      map.moveLayer(id, beforeId);
    }
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
  ]);

  return null;
};

export default BackgroundLayer;
