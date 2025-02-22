import {
  Map,
  MapDataEvent,
  MapMouseEvent,
  MapTouchEvent,
  MapWheelEvent,
} from 'mapbox-gl';
import type { MapEvents } from './types';

export const eventMap: { [T in keyof MapEvents]: string } = {
  onResize: 'resize',
  onIdle: 'idle',
  onRemove: 'remove',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseOver: 'mouseover',
  onMouseMove: 'mousemove',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseOut: 'mouseout',
  onPreClick: 'preclick',
  onClick: 'click',
  onDblClick: 'dblclick',
  onContextMenu: 'contextmenu',
  onWheel: 'wheel',
  onTouchStart: 'touchstart',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchCancel: 'touchcancel',
  onMoveStart: 'movestart',
  onMove: 'move',
  onMoveEnd: 'moveend',
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onZoomStart: 'zoomstart',
  onZoom: 'zoom',
  onZoomEnd: 'zoomend',
  onRotateStart: 'rotatestart',
  onRotate: 'rotate',
  onRotateEnd: 'rotateend',
  onPitchStart: 'pitchstart',
  onPitch: 'pitch',
  onPitchEnd: 'pitchend',
  onBoxZoomStart: 'boxzoomstart',
  onBoxZoomEnd: 'boxzoomend',
  onBoxZoomCancel: 'boxzoomcancel',
  onRenderStart: 'renderstart',
  onRender: 'render',
  onError: 'error',
  onWebglContextLost: 'webglcontextlost',
  onWebglContextRestored: 'webglcontextrestored',
  onData: 'data',
  onStyleData: 'styledata',
  onSourceData: 'sourcedata',
  onDataLoading: 'dataloading',
  onStyleDataLoading: 'styledataloading',
  onSourceDataLoading: 'sourcedataloading',
  onStyleImageMissing: 'styleimagemissing',
  onStyleLoad: 'style.load',
  onStyleImportLoad: 'style.import.load',
};

const listeners: {
  [T in keyof MapEvents]: (
    e: MapMouseEvent | MapTouchEvent | MapWheelEvent | MapDataEvent,
  ) => void;
} = {};

// 事件更新
export const updateEvents = (props: MapEvents, map: Map) => {
  // 需要解除绑定的事件 即 下次渲染中 props 中减少的事件
  const listenersOff = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof MapEvents] &&
      typeof props[key as keyof MapEvents] !== 'function'
    );
  });

  // 需要增加绑定的事件 即 下次渲染中 props 中增加的事件
  const listenersOn = Object.keys(eventMap).filter((key) => {
    return (
      !listeners[key as keyof MapEvents] &&
      typeof props[key as keyof MapEvents] === 'function'
    );
  });

  // 需要更新绑定的事件 即 下次渲染中 props 中变化的事件
  const listenersUpdate = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof MapEvents] &&
      typeof props[key as keyof MapEvents] === 'function' &&
      listeners[key as keyof MapEvents] !== props[key as keyof MapEvents]
    );
  });

  // 解除绑定的事件
  listenersOff.forEach((key) => {
    map.off(
      eventMap[key as keyof MapEvents]!,
      listeners[key as keyof MapEvents]!,
    );
  });

  // 增加绑定的事件
  listenersOn.forEach((key) => {
    const event = eventMap[key as keyof MapEvents];
    const handleFunc = props[key as keyof MapEvents];

    if (event && typeof handleFunc === 'function') {
      const listener = (
        e: MapMouseEvent | MapTouchEvent | MapWheelEvent | MapDataEvent,
      ) => {
        handleFunc(e);
      };
      map.on(event, listener);

      listeners[key as keyof MapEvents] = listener;
    }
  });

  // 更新绑定的事件
  listenersUpdate.forEach((key) => {
    map.off(
      eventMap[key as keyof MapEvents]!,
      listeners[key as keyof MapEvents]!,
    );

    const event = eventMap[key as keyof MapEvents];
    const handleFunc = props[key as keyof MapEvents];

    if (event && typeof handleFunc === 'function') {
      const listener = (
        e: MapMouseEvent | MapTouchEvent | MapWheelEvent | MapDataEvent,
      ) => {
        handleFunc(e);
      };

      map.on(event, listener);

      listeners[key as keyof MapEvents] = listener;
    }
  });
};
