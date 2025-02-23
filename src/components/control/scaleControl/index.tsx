import mapboxgl from 'mapbox-gl';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { MapContext } from '../../../context';
import { ScaleControlProps } from '../types';
import './index.scss';

const ScaleControl: ForwardRefRenderFunction<
  mapboxgl.ScaleControl,
  ScaleControlProps
> = (props, ref) => {
  const { position = 'bottom-left', maxWidth = 100, unit = 'metric' } = props;

  const map = useContext(MapContext);

  const scaleControl = useRef<mapboxgl.ScaleControl | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!map) return;
    if (scaleControl.current) map.removeControl(scaleControl.current);

    scaleControl.current = new mapboxgl.ScaleControl({
      maxWidth,
      unit,
    });
    map.addControl(scaleControl.current, position);

    setReady(true);

    return () => {
      if (scaleControl.current) map.removeControl(scaleControl.current);
      scaleControl.current = null;
    };
  }, [map, position, maxWidth, unit]);

  useImperativeHandle(
    ref,
    () => {
      return ready
        ? scaleControl.current!
        : (null as unknown as mapboxgl.ScaleControl);
    },
    [ready],
  );

  return null;
};
export default forwardRef(ScaleControl);
