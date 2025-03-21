import mapboxgl from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { ScaleControlEvents, ScaleControlProps } from '../types';
import './index.scss';

const ScaleControl: FC<ScaleControlProps & ScaleControlEvents> = (props) => {
  const {
    position = 'bottom-left',
    maxWidth = 100,
    unit = 'metric',
    onAdd,
  } = props;

  const map = useContext(MapContext);

  const scaleControl = useRef<mapboxgl.ScaleControl | null>(null);

  useEffect(() => {
    if (!map) return;
    if (scaleControl.current) map.removeControl(scaleControl.current);

    scaleControl.current = new mapboxgl.ScaleControl({
      maxWidth,
      unit,
    });
    map.addControl(scaleControl.current, position);

    if (onAdd) onAdd(scaleControl.current);

    return () => {
      if (scaleControl.current) map.removeControl(scaleControl.current);
      scaleControl.current = null;
    };
  }, [map, position, maxWidth, unit]);

  return null;
};
export default ScaleControl;
