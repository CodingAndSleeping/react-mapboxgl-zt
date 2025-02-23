import { LngLatLike, Marker, PointLike, Popup } from 'mapbox-gl';
import { ReactNode } from 'react';

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
  className?: string;
}

export interface PopupProps {
  lngLat?: LngLatLike;

  children?: ReactNode;

  anchor?: Anchor;

  className?: string;

  closeButton?: boolean;

  closeOnClick?: boolean;

  closeOnMove?: boolean;

  focusAfterOpen?: boolean;

  maxWidth?: string;

  offset?: Offset;
}

export interface PopupEvents {
  onOpen?: (popup: Popup) => void;
  onClose?: (popup: Popup) => void;
}

export interface MarkerEvents {
  onDragStart?: (marker: Marker) => void;
  onDrag?: (marker: Marker) => void;
  onDraEnd?: (marker: Marker) => void;
}
