import { LngLatLike, PointLike } from 'mapbox-gl';
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
  open?: () => void;
  close?: () => void;
}
