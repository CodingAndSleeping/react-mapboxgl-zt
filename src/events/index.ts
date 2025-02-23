const mapEventMap: Record<string, string> = {
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

const layerEventMap: Record<string, string> = {
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

const overlayEventMap: Record<string, string> = {
  onOpen: 'open',
  onClose: 'close',
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
};

const eventMap = {
  ...mapEventMap,
  ...layerEventMap,
  ...overlayEventMap,
};

// 事件更新
export const updateEvents = (
  listeners: Record<string, (e: any) => void>,
  props: Record<string, any>,
  target: any,
  layerId?: string,
) => {
  // 需要解除绑定的事件 即 下次渲染中 props 中减少的事件
  const listenersOff = Object.keys(listeners).filter((key) => {
    return listeners[key] && typeof props[key] !== 'function';
  });

  // 需要增加绑定的事件 即 下次渲染中 props 中增加的事件
  const listenersOn = Object.keys(eventMap).filter((key) => {
    return !listeners[key] && typeof props[key] === 'function';
  });

  // 解除绑定的事件
  if (layerId) {
    listenersOff.forEach((key) => {
      target.off(eventMap[key]!, layerId, listeners[key]!);
      delete listeners[key];
    });
  } else {
    listenersOff.forEach((key) => {
      target.off(eventMap[key]!, listeners[key]!);
      delete listeners[key];
    });
  }

  // 增加绑定的事件
  listenersOn.forEach((key) => {
    const event = eventMap[key];
    const handleFunc = props[key];

    if (event && typeof handleFunc === 'function') {
      const listener = (e: any) => {
        handleFunc(e);
      };
      if (layerId) {
        target.on(event, layerId, listener);
      } else {
        target.on(event, listener);
      }

      listeners[key] = listener;
    }
  });
};

// 解除所有事件
export const offEvents = (
  listeners: Record<string, (e: any) => void>,
  target: any,
  layerId?: string,
) => {
  if (layerId) {
    Object.keys(listeners).forEach((key) => {
      target.off(eventMap[key]!, layerId, listeners[key]!);
      delete listeners[key];
    });
  } else {
    Object.keys(listeners).forEach((key) => {
      target.off(eventMap[key]!, listeners[key]!);
      delete listeners[key];
    });
  }
};
