import { ControlPosition } from 'mapbox-gl';

export type Unit = 'imperial' | 'metric' | 'nautical';
export interface ScaleControlProps {
  position?: ControlPosition;
  maxWidth?: number;

  unit?: Unit;
}

export interface ScaleControlMethods {
  setUnit: (unit: Unit) => void;
}
