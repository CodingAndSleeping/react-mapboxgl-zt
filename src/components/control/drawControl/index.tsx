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
import { DrawControlProps } from '../types';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const DrawControl: ForwardRefRenderFunction<MapboxDraw, DrawControlProps> = (
  props,
  ref,
) => {
  const {
    position = 'top-right',
    displayControlsDefault = true,
    keybindings = true,
    touchEnabled = true,
    boxSelect = true,
    clickBuffer = 2,
    touchBuffer = 25,
    controls,
    styles,
    modes,
    defaultMode = 'simple_select',
    userProperties = false,
  } = props;

  const map = useContext(MapContext);

  const drawControl = useRef<MapboxDraw | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!map) return;

    if (drawControl.current) map.removeControl(drawControl.current);

    const options: DrawControlProps = {
      displayControlsDefault,
      keybindings,
      touchEnabled,
      boxSelect,
      clickBuffer,
      touchBuffer,
      controls,
      defaultMode,
      userProperties,
    };

    if (styles) {
      options.styles = styles;
    }

    if (modes) {
      options.modes = modes;
    }

    drawControl.current = new MapboxDraw(options);

    map.addControl(drawControl.current, position);

    setReady(true);

    return () => {
      if (drawControl.current) map.removeControl(drawControl.current);
      drawControl.current = null;
    };
  }, [map, position]);

  useImperativeHandle(
    ref,
    () => {
      return ready ? drawControl.current! : (null as unknown as MapboxDraw);
    },
    [ready],
  );
  return null;
};

export default forwardRef(DrawControl);
