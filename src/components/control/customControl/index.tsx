import { IControl } from 'mapbox-gl';
import { useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { CustomControlEvents, CustomControlProps } from '../types';

const CustomControl = <T extends IControl>(
  props: CustomControlProps<T> & CustomControlEvents<T>,
) => {
  const { controlClass, position = 'bottom-right', onAdd, ...rest } = props;

  const map = useContext(MapContext);

  const control = useRef<T | null>(null);

  useEffect(() => {
    if (!map) return;
    if (control.current) map.removeControl(control.current);

    control.current = new controlClass(rest);
    map.addControl(control.current, position);

    if (onAdd) onAdd(control.current);

    return () => {
      if (control.current) map.removeControl(control.current);
      control.current = null;
    };
  }, [map, position]);

  return null;
};

export default CustomControl;
