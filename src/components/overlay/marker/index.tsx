import mapboxgl from 'mapbox-gl';
import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { MapContext } from '../../../context';
import useEvents from '../../../events';
import { MarkerEvents, MarkerProps } from '../types';

const Marker: FC<PropsWithChildren<MarkerProps & MarkerEvents>> = (props) => {
  const {
    lngLat = [180, 90],
    anchor = 'center',
    className,
    clickTolerance = 0,
    color = '#3FB1CE',
    draggable = false,
    occludedOpacity = 0.2,
    offset,
    pitchAlignment = 'auto',
    rotation = 0,
    rotationAlignment = 'auto',
    scale = 1,
    onAdd,
    children,
  } = props;

  const map = useContext(MapContext);

  const marker = useRef<mapboxgl.Marker | null>(null);

  const container = useRef<HTMLDivElement | null>(null);

  const { updateEvents, offEvents } = useEvents(props);

  const [, setReady] = useState(false);

  useEffect(() => {
    if (!map) return;

    if (marker.current) marker.current.remove();

    const options: mapboxgl.MarkerOptions = {};

    if (anchor) {
      options.anchor = anchor;
    }
    if (className) {
      options.className = className;
    }
    if (offset) {
      options.offset = offset;
    }
    options.clickTolerance = clickTolerance;
    options.color = color;
    options.draggable = draggable;
    options.occludedOpacity = occludedOpacity;
    options.pitchAlignment = pitchAlignment;
    options.rotation = rotation;
    options.rotationAlignment = rotationAlignment;
    options.scale = scale;

    if (children) {
      const div = document.createElement('div');
      div.classList.add('mapboxgl-marker-content__inner');
      container.current = div;
      options.element = container.current;
    }

    marker.current = new mapboxgl.Marker(options);

    marker.current.setLngLat(lngLat);

    marker.current.addTo(map);

    if (onAdd) onAdd(marker.current);
    setReady(true);
    return () => {
      if (marker.current) {
        marker.current.remove();
        offEvents(marker.current);
      }

      marker.current = null;
      container.current = null;
    };
  }, [
    map,
    anchor,
    className,
    clickTolerance,
    color,
    draggable,
    occludedOpacity,
    pitchAlignment,
    rotation,
    rotationAlignment,
    scale,
    JSON.stringify(offset),
  ]);

  useEffect(() => {
    if (!map) return;
    if (!marker.current) return;

    if (lngLat) {
      marker.current.setLngLat(lngLat);
    }
  }, [JSON.stringify(lngLat)]);

  if (marker.current) updateEvents(marker.current);

  return container.current ? createPortal(children, container.current) : null;
};

export default Marker;
