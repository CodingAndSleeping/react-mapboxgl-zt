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
import { PopupEvents, PopupProps } from '../types';

const Popup: FC<PropsWithChildren<PopupProps & PopupEvents>> = (props) => {
  const {
    lngLat,
    anchor,
    className,
    closeButton = true,
    closeOnClick = false,
    closeOnMove = false,
    focusAfterOpen = false,
    maxWidth = '240px',
    offset,
    onAdd,
    children,
  } = props;

  const map = useContext(MapContext);

  const popup = useRef<mapboxgl.Popup | null>(null);

  const container = useRef<HTMLDivElement | null>(null);

  const { updateEvents, offEvents } = useEvents(props);

  const [, setReady] = useState(false);

  useEffect(() => {
    if (!map) return;

    if (popup.current) popup.current.remove();

    const options: mapboxgl.PopupOptions = {};

    if (anchor) {
      options.anchor = anchor;
    }
    if (className) {
      options.className = className;
    }
    if (offset) {
      options.offset = offset;
    }
    options.closeButton = closeButton;
    options.closeOnClick = closeOnClick;
    options.closeOnMove = closeOnMove;
    options.focusAfterOpen = focusAfterOpen;
    options.maxWidth = maxWidth;

    popup.current = new mapboxgl.Popup(options);

    if (lngLat) {
      popup.current.setLngLat(lngLat);
    }
    if (children) {
      const div = document.createElement('div');
      div.classList.add('mapboxgl-popup-content__inner');
      container.current = div;
      popup.current.setDOMContent(container.current);
    }

    popup.current.addTo(map);
    if (onAdd) onAdd(popup.current);
    setReady(true);
    return () => {
      if (popup.current) {
        popup.current.remove();
        offEvents(popup.current);
      }

      popup.current = null;
      container.current = null;
    };
  }, [
    map,
    anchor,
    className,
    closeButton,
    closeOnClick,
    closeOnMove,
    focusAfterOpen,
    maxWidth,
    JSON.stringify(offset),
  ]);

  useEffect(() => {
    if (!map) return;
    if (!popup.current) return;

    if (lngLat) {
      popup.current.setLngLat(lngLat);
    }
  }, [JSON.stringify(lngLat)]);

  if (popup.current) updateEvents(popup.current);

  return container.current ? createPortal(children, container.current) : null;
};

export default Popup;
