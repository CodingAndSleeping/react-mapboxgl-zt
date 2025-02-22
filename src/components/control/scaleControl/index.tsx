import { MapContext } from '@react-mapbox/context';
import mapboxgl from 'mapbox-gl';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { ScaleControlMethods, ScaleControlProps, Unit } from '../types';
import './index.scss';

const ScaleControl: ForwardRefRenderFunction<
  ScaleControlMethods,
  ScaleControlProps
> = (props, ref) => {
  const { position = 'bottom-left', maxWidth = 100, unit = 'metric' } = props;

  const map = useContext(MapContext);

  const scaleControl = useRef<mapboxgl.ScaleControl>();

  useImperativeHandle(
    ref,
    () => ({
      setUnit(unit: Unit) {
        scaleControl.current?.setUnit(unit);
      },
    }),
    [],
  );

  useEffect(() => {
    if (!map) return;

    scaleControl.current = new mapboxgl.ScaleControl({
      maxWidth,
      unit,
    });

    map.addControl(scaleControl.current, position);
  }, [map, position, maxWidth, unit]);

  return null;
};
export default forwardRef(ScaleControl);
