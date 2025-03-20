import { useRef } from 'react';

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

const useEvents = () => {
  const listeners = useRef<Record<string, (e: any) => void>>({});
  // 事件更新
  const updateEvents = (
    props: Record<string, any>,
    target: any,
    layerId?: string,
  ) => {
    if (!target || !listeners) return;

    // 需要解除绑定的事件 即 下次渲染中 props 中减少的事件
    const listenersOff = Object.keys(listeners).filter((key) => {
      return listeners.current[key] && typeof props[key] !== 'function';
    });

    // 需要增加绑定的事件 即 下次渲染中 props 中增加的事件
    const listenersOn = Object.keys(eventMap).filter((key) => {
      return !listeners.current[key] && typeof props[key] === 'function';
    });

    // 解除绑定的事件
    if (layerId) {
      listenersOff.forEach((key) => {
        target.off(eventMap[key]!, layerId, listeners.current[key]!);
        delete listeners.current[key];
      });
    } else {
      listenersOff.forEach((key) => {
        target.off(eventMap[key]!, listeners.current[key]!);
        delete listeners.current[key];
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

        listeners.current[key] = listener;
      }
    });
  };

  // 解除所有事件
  const offEvents = (target: any, layerId?: string) => {
    if (!target || !listeners) return;
    if (layerId) {
      Object.keys(listeners).forEach((key) => {
        target.off(eventMap[key]!, layerId, listeners.current[key]!);
        delete listeners.current[key];
      });
    } else {
      Object.keys(listeners).forEach((key) => {
        target.off(eventMap[key]!, listeners.current[key]!);
        delete listeners.current[key];
      });
    }
  };

  return {
    listeners,
    updateEvents,
    offEvents,
  };
};

export default useEvents;
