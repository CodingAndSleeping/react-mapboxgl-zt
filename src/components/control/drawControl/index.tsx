import MapboxDraw, { MapboxDrawControls } from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
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
import useEvents from '../../../events';
import { DrawControlEvents, DrawControlProps } from '../types';
import './index.scss';

import staticMode from './modes/staticMode';
import defaultStyles from './styles';
const defaultControls: MapboxDrawControls = {
  point: true,
  line_string: true,
  polygon: true,
  trash: true,
  combine_features: false,
  uncombine_features: false,
};

function insertCustmeButton(className: string, onClickFun: () => void) {
  const controlButtons = document.getElementsByClassName(
    'mapbox-gl-draw_ctrl-draw-btn',
  );
  const controlContainter = controlButtons[0].parentElement;
  if (controlContainter) {
    const staticButton = document.createElement('button');
    staticButton.classList.add('mapbox-gl-draw_ctrl-draw-btn', className);
    staticButton.onclick = onClickFun;
    controlContainter.appendChild(staticButton);
  }
}

const DrawControl: ForwardRefRenderFunction<
  MapboxDraw,
  DrawControlProps & DrawControlEvents
> = (props, ref) => {
  const {
    position = 'top-right',
    displayControlsDefault = true,
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
  } = props;

  const map = useContext(MapContext);

  const drawControl = useRef<MapboxDraw | null>(null);

  const [ready, setReady] = useState(false);

  const { updateEvents, offEvents } = useEvents(props);

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

    insertCustmeButton('mapbox-gl-draw_static', () => {
      drawControl.current?.changeMode('static');
    });

    setReady(true);

    return () => {
      if (drawControl.current) map.removeControl(drawControl.current);
      drawControl.current = null;
      offEvents(map);
    };
  }, [
    map,
    position,
    displayControlsDefault,
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
