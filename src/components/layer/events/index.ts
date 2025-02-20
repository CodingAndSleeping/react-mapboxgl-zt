import { Map, MapMouseEvent, MapTouchEvent } from 'mapbox-gl';
import type { Event, Events } from './types';

export const eventMap: { [T in keyof Events]: string } = {
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
  [T in keyof Events]: Event;
} = {};

// 事件更新
export const updateEvents = (props: Events, map: Map, layerId: string) => {
  // 需要解除绑定的事件 即 下次渲染中 props 中减少的事件
  const listenersOff = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof Events] &&
      typeof props[key as keyof Events] !== 'function'
    );
  });

  // 需要增加绑定的事件 即 下次渲染中 props 中增加的事件
  const listenersOn = Object.keys(eventMap).filter((key) => {
    return (
      !listeners[key as keyof Events] &&
      typeof props[key as keyof Events] === 'function'
    );
  });

  // 需要更新绑定的事件 即 下次渲染中 props 中变化的事件
  const listenersUpdate = Object.keys(listeners).filter((key) => {
    return (
      listeners[key as keyof Events] &&
      typeof props[key as keyof Events] === 'function' &&
      listeners[key as keyof Events] !== props[key as keyof Events]
    );
  });

  // 解除绑定的事件
  listenersOff.forEach((key) => {
    map.off(
      eventMap[key as keyof Events]!,
      layerId,
      listeners[key as keyof Events]!,
    );
  });

  // 增加绑定的事件
  listenersOn.forEach((key) => {
    const event = eventMap[key as keyof Events];
    const handleFunc = props[key as keyof Events];

    if (event && typeof handleFunc === 'function') {
      const listener = (e: MapMouseEvent | MapTouchEvent) => {
        handleFunc(e);
      };
      map.on(event, layerId, listener);

      listeners[key as keyof Events] = listener;
    }
  });

  // 更新绑定的事件
  listenersUpdate.forEach((key) => {
    map.off(
      eventMap[key as keyof Events]!,
      layerId,
      listeners[key as keyof Events]!,
    );

    const event = eventMap[key as keyof Events];
    const handleFunc = props[key as keyof Events];

    if (event && typeof handleFunc === 'function') {
      const listener = (e: MapMouseEvent | MapTouchEvent) => {
        handleFunc(e);
      };

      map.on(event, layerId, listener);

      listeners[key as keyof Events] = listener;
    }
  });
};
