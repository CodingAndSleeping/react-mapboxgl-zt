import { MapboxDrawControls, MapboxDrawOptions } from '@mapbox/mapbox-gl-draw';
import { ControlPosition, IControl, Map } from 'mapbox-gl';

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

export interface DrawControlButtons extends MapboxDrawControls {
  static?: boolean;
}

export interface DrawControlProps
  extends Omit<MapboxDrawOptions, 'displayControlsDefault'> {
  position?: ControlPosition;
  controls?: DrawControlButtons;
}

export interface DrawCreateEvent {
  features: GeoJSON.Feature[];
  target: Map;
  type: 'draw.create';
}
export interface DrawUpdateEvent {
  action: string;
  features: GeoJSON.Feature[];
  target: Map;
  type: 'draw.update';
}
export interface DrawDeleteEvent {
  features: GeoJSON.Feature[];
  target: Map;
  type: 'draw.delete';
}
export interface DrawCombineEvent {
  createdFeatures: GeoJSON.Feature[];
  deletedFeatures: GeoJSON.Feature[];
  target: Map;
  type: 'draw.combine';
}
export interface DrawUncombineEvent {
  createdFeatures: GeoJSON.Feature[];
  deletedFeatures: GeoJSON.Feature[];
  target: Map;
  type: 'draw.uncombine';
}
export interface DrawSelectionChangeEvent {
  features: GeoJSON.Feature[];
  points: GeoJSON.Feature[];
  target: Map;
  type: 'draw.selectionchange';
}
export interface DrawModeChangeEvent {
  mode: string;
  target: Map;
  type: 'draw.modechange';
}
export interface DrawRenderEvent {
  target: Map;
  type: 'draw.render';
}
export interface DrawActionableEvent {
  actions: {
    combineFeatures: boolean;
    uncombineFeatures: boolean;
    trash: boolean;
  };
  target: Map;
  type: 'draw.actionable';
}

export interface DrawControlEvents {
  onDrawCreate?: (e: DrawCreateEvent) => void;
  onDrawUpdate?: (e: DrawUpdateEvent) => void;
  onDrawDelete?: (e: DrawDeleteEvent) => void;
  onDrawCombine?: (e: DrawCombineEvent) => void;
  onDrawUncombine?: (e: DrawUncombineEvent) => void;
  onDrawSelectionChange?: (e: DrawSelectionChangeEvent) => void;
  onDrawModeChange?: (e: DrawModeChangeEvent) => void;
  onDrawRender?: (e: DrawRenderEvent) => void;
  onDrawActionable?: (e: DrawActionableEvent) => void;
}
