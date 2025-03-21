import { LngLatLike, Marker, PointLike, Popup } from 'mapbox-gl';

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
  onAdd?: (e: Popup) => void;
  onOpen?: (e: OverlayEventParams<Popup>) => void;
  onClose?: (e: OverlayEventParams<Popup>) => void;
}

export interface MarkerEvents {
  onAdd?: (e: Marker) => void;
  onDragStart?: (e: OverlayEventParams<Marker>) => void;
  onDrag?: (e: OverlayEventParams<Marker>) => void;
  onDragEnd?: (e: OverlayEventParams<Marker>) => void;
}
