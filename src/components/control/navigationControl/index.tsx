import mapboxgl from 'mapbox-gl';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { NavigationControlProps } from '../types';
import './index.scss';

const NavigationControl: FC<NavigationControlProps> = (props) => {
  const {
    showCompass = true,
    showZoom = true,
    visualizePitch = true,
    position = 'top-left',
  } = props;

  const map = useContext(MapContext);

  const navigationControl = useRef<mapboxgl.NavigationControl | null>(null);

  useEffect(() => {
    if (!map) return;
    if (navigationControl.current) map.removeControl(navigationControl.current);

    navigationControl.current = new mapboxgl.NavigationControl({
      showCompass,
      showZoom,
      visualizePitch,
    });

    map.addControl(navigationControl.current, position);

    return () => {
      if (navigationControl.current)
        map.removeControl(navigationControl.current);
    };
  }, [map, position, showCompass, showZoom, visualizePitch]);

  return null;
};
export default NavigationControl;
