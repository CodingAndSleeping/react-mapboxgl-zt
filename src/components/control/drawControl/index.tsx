import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { FC, useContext, useEffect, useRef } from 'react';
import { MapContext } from '../../../context';
import useEvents from '../../../events';
import {
  DrawControlButtons,
  DrawControlEvents,
  DrawControlProps,
} from '../types';
import './index.scss';
import { insertCustmeButton } from './utils/index';

import staticMode from './modes/staticMode';
import defaultStyles from './styles';
const defaultControls: DrawControlButtons = {
  static: true,
  point: true,
  line_string: true,
  polygon: true,
  trash: true,
  combine_features: false,
  uncombine_features: false,
};

const DrawControl: FC<DrawControlProps & DrawControlEvents> = (props) => {
  const {
    position = 'top-right',
    keybindings = true,
    touchEnabled = true,
    boxSelect = true,
    clickBuffer = 2,
    touchBuffer = 25,
    controls = {},
    styles = [],
    modes = {},
    defaultMode = 'static',
    userProperties = false,
    onAdd,
  } = props;

  const map = useContext(MapContext);

  const drawControl = useRef<MapboxDraw | null>(null);

  const { updateEvents, offEvents } = useEvents(props);

  useEffect(() => {
    if (!map) return;

    if (drawControl.current) map.removeControl(drawControl.current);

    const options = {
      keybindings,
      touchEnabled,
      boxSelect,
      clickBuffer,
      touchBuffer,
      controls: { ...defaultControls, ...controls },
      modes: {
        ...MapboxDraw.modes,
        ...modes,
        static: staticMode,
      },
      styles: [...defaultStyles, ...styles],
      defaultMode,
      userProperties,
    };

    drawControl.current = new MapboxDraw(options);

    map.addControl(drawControl.current, position);
    if (onAdd) onAdd(drawControl.current);
    options.controls.static &&
      insertCustmeButton(
        map.getContainer(),
        0,
        'mapbox-gl-draw_static',
        {
          title: 'static',
        },
        () => {
          if (drawControl.current?.getMode() === 'static') {
            drawControl.current?.changeMode('simple_select');
          } else {
            drawControl.current?.changeMode('static');
          }
        },
      );

    return () => {
      if (drawControl.current) map.removeControl(drawControl.current);
      drawControl.current = null;
      offEvents(map);
    };
  }, [
    map,
    position,
    keybindings,
    touchEnabled,
    boxSelect,
    clickBuffer,
    touchBuffer,
    JSON.stringify(controls),
    JSON.stringify(styles),
    JSON.stringify(modes),
    defaultMode,
    userProperties,
  ]);

  if (map) updateEvents(map);

  return null;
};

export default DrawControl;
