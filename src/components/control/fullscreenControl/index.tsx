import mapboxgl from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { FullscreenControlProps } from '../types';
import './index.scss';

const FullscreenControl: FC<FullscreenControlProps> = (props) => {
  const { position = 'top-right', container } = props;

  const map = useContext(MapContext);

  const fullscreenControl = useRef<mapboxgl.FullscreenControl>();

  useEffect(() => {
    if (!map) return;

    fullscreenControl.current = new mapboxgl.FullscreenControl({
      container,
    });

    map.addControl(fullscreenControl.current, position);

    return () => {
      if (fullscreenControl.current)
        map.removeControl(fullscreenControl.current);
    };
  }, [map, position, container]);

  return null;
};
export default FullscreenControl;
