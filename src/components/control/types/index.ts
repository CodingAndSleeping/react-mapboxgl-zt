import { ControlPosition } from 'mapbox-gl';

export type Unit = 'imperial' | 'metric' | 'nautical';
export interface ScaleControlProps {
  position?: ControlPosition;
  maxWidth?: number;
  unit?: Unit;
}

export interface ScaleControlInstance {
  setUnit: (unit: Unit) => void;
}

export interface NavigationControlProps {
  position?: ControlPosition;
  showCompass?: boolean;
  showZoom?: boolean;
  visualizePitch?: boolean;
}
