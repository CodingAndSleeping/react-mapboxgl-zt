import { Map, MapMouseEvent, MapTouchEvent } from 'mapbox-gl';
import type { LayerEvent, LayerEvents } from '../types';

export const eventMap: { [T in keyof LayerEvents]: string } = {
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseOver: 'mouseover',
  onMouseMove: 'mousemove',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseOut: 'mouseout',
  onClick: 'click',
  onTouchStart: 'touchstart',
  onTouchEnd: 'touchend',
  onTouchCancel: 'touchcancel',
};

const listeners: {
  [T in keyof LayerEvents]: LayerEvent;
} = {};

// 事件更新
export const updateEvents = (props: LayerEvents, map: Map, layerId: string) => {
  // 需要解除绑定的事件 即 下次渲染中 props 中减少的事件
  const listenersOff = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof LayerEvents] &&
      typeof props[key as keyof LayerEvents] !== 'function'
    );
  });

  // 需要增加绑定的事件 即 下次渲染中 props 中增加的事件
  const listenersOn = Object.keys(eventMap).filter((key) => {
    return (
      !listeners[key as keyof LayerEvents] &&
      typeof props[key as keyof LayerEvents] === 'function'
    );
  });

  // 需要更新绑定的事件 即 下次渲染中 props 中变化的事件
  const listenersUpdate = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof LayerEvents] &&
      typeof props[key as keyof LayerEvents] === 'function' &&
      listeners[key as keyof LayerEvents] !== props[key as keyof LayerEvents]
    );
  });

  // 解除绑定的事件
  listenersOff.forEach((key) => {
    map.off(
      eventMap[key as keyof LayerEvents]!,
      layerId,
      listeners[key as keyof LayerEvents]!,
    );
  });

  // 增加绑定的事件
  listenersOn.forEach((key) => {
    const event = eventMap[key as keyof LayerEvents];
    const handleFunc = props[key as keyof LayerEvents];

    if (event && typeof handleFunc === 'function') {
      const listener = (e: MapMouseEvent | MapTouchEvent) => {
        handleFunc(e);
      };
      map.on(event, layerId, listener);

      listeners[key as keyof LayerEvents] = listener;
    }
  });

  // 更新绑定的事件
  listenersUpdate.forEach((key) => {
    map.off(
      eventMap[key as keyof LayerEvents]!,
      layerId,
      listeners[key as keyof LayerEvents]!,
    );

    const event = eventMap[key as keyof LayerEvents];
    const handleFunc = props[key as keyof LayerEvents];

    if (event && typeof handleFunc === 'function') {
      const listener = (e: MapMouseEvent | MapTouchEvent) => {
        handleFunc(e);
      };

      map.on(event, layerId, listener);

      listeners[key as keyof LayerEvents] = listener;
    }
  });
};
