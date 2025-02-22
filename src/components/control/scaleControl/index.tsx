import mapboxgl from 'mapbox-gl';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { MapContext } from '../../../context';
import { ScaleControlInstance, ScaleControlProps, Unit } from '../types';
import './index.scss';

const ScaleControl: ForwardRefRenderFunction<
  ScaleControlInstance,
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

    return () => {
      if (scaleControl.current) map.removeControl(scaleControl.current);
    };
  }, [map, position, maxWidth, unit]);

  return null;
};
export default forwardRef(ScaleControl);
