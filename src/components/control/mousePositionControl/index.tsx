import { FC, useContext, useEffect } from 'react';
import { MapContext } from '../../../context';
import { MousePositionControlProps } from '../types';
import './index.scss';
import MousePositionControlClass from './mousePositionControlClass';
const MousePositionControl: FC<MousePositionControlProps> = (props) => {
  const { position = 'bottom', decimals = 6 } = props;
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    const mousePositionControl = new MousePositionControlClass({
      decimals,
    });

    map.addControl(mousePositionControl, position);
  }, [map, position, decimals]);

  return null;
};

export default MousePositionControl;
