import { LngLatLike, PointLike } from 'mapbox-gl';

export type Anchor =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export type Offset = number | PointLike | Partial<Record<Anchor, PointLike>>;

export interface MarkerProps {
  lngLat?: LngLatLike;
  anchor?: Anchor;
  className?: string;
  clickTolerance?: number;
  color?: string;
  draggable?: boolean;
  occludedOpacity?: number;
  offset?: PointLike;
  pitchAlignment?: string;
  rotation?: number;
  rotationAlignment?: string;
  scale?: number;
}

export interface PopupProps {
  lngLat?: LngLatLike;
  anchor?: Anchor;
  className?: string;
  closeButton?: boolean;
  closeOnClick?: boolean;
  closeOnMove?: boolean;
  focusAfterOpen?: boolean;
  maxWidth?: string;
  offset?: Offset;
}

export interface OverlayEventParams<T> {
  type: string;
  target: T;
}

export interface PopupEvents {
  onOpen?: (e: OverlayEventParams<mapboxgl.Popup>) => void;
  onClose?: (e: OverlayEventParams<mapboxgl.Popup>) => void;
}

export interface MarkerEvents {
  onDragStart?: (e: OverlayEventParams<mapboxgl.Marker>) => void;
  onDrag?: (e: OverlayEventParams<mapboxgl.Marker>) => void;
  onDragEnd?: (e: OverlayEventParams<mapboxgl.Marker>) => void;
}
