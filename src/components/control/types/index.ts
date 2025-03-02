import { ControlPosition, IControl } from 'mapbox-gl';

export interface CustomControlProps<T extends IControl> {
  controlClass: new (...args: any[]) => T;

  position?: ControlPosition;

  [key: string]: any;
}

export type Unit = 'imperial' | 'metric' | 'nautical';
export interface ScaleControlProps {
  position?: ControlPosition;
  maxWidth?: number;
  unit?: Unit;
}

export interface NavigationControlProps {
  position?: ControlPosition;
  showCompass?: boolean;
  showZoom?: boolean;
  visualizePitch?: boolean;
}

export interface FullscreenControlProps {
  position?: ControlPosition;
  container?: HTMLElement;
}

export interface MousePositionControlProps {
  position?: ControlPosition;

  decimals?: number;
}
