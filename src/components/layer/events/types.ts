import { MapMouseEvent, MapTouchEvent } from 'mapbox-gl';

export type Event = (e: MapMouseEvent | MapTouchEvent) => void;
// export type TouchEvent = (e: MapTouchEvent) => void;
export interface Events {
  onMouseDown?: Event;
  onMouseUp?: Event;
  onMouseOver?: Event;
  onMouseMove?: Event;
  onMouseEnter?: Event;
  onMouseLeave?: Event;
  onMouseOut?: Event;
  onClick?: Event;
  onTouchStart?: Event;
  onTouchEnd?: Event;
  onTouchCancel?: Event;
}
