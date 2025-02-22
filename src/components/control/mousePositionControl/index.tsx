import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import { MousePositionControlProps } from '../types';
import './index.scss';
import MousePositionControlClass from './mousePositionControlClass';
const MousePositionControl: FC<MousePositionControlProps> = (props) => {
  const { position = 'bottom', decimals = 6 } = props;
  const map = useContext(MapContext);

  const mousePositionControl = useRef<MousePositionControlClass>();

  useEffect(() => {
    if (!map) return;

    mousePositionControl.current = new MousePositionControlClass({
      decimals,
    });

    map.addControl(mousePositionControl.current, position);

    return () => {
      if (mousePositionControl.current)
        map.removeControl(mousePositionControl.current);
    };
  }, [map, position, decimals]);

  return null;
};

export default MousePositionControl;
