import {
  ExpressionSpecification,
  GeoJSONSourceSpecification,
  MapMouseEvent,
  MapTouchEvent,
  RasterSourceSpecification,
  VectorSourceSpecification,
} from 'mapbox-gl';

export interface LayerEvents {
  onMouseDown?: (e: MapMouseEvent) => void;
  onMouseUp?: (e: MapMouseEvent) => void;
  onMouseOver?: (e: MapMouseEvent) => void;
  onMouseMove?: (e: MapMouseEvent) => void;
  onMouseEnter?: (e: MapMouseEvent) => void;
  onMouseLeave?: (e: MapMouseEvent) => void;
  onMouseOut?: (e: MapMouseEvent) => void;
  onClick?: (e: MapMouseEvent) => void;
  onTouchStart?: (e: MapTouchEvent) => void;
  onTouchEnd?: (e: MapTouchEvent) => void;
  onTouchCancel?: (e: MapTouchEvent) => void;
}

export interface LayerProps {
  id: string;
  filter?: ExpressionSpecification;
  maxzoom?: number;
  minzoom?: number;
  visibility?: 'visible' | 'none';
  beforeId?: string;
  slot?: string;
}

export interface GeojsonSource {
  source: GeoJSONSourceSpecification;
  sourceLayer?: string;
}
export interface VectorSource {
  source: VectorSourceSpecification;
  sourceLayer: string;
}

export interface BackgroundLayerProps extends LayerProps {
  color?: string;
  emissiveStrength?: number;
  opacity?: number;
  imgUrl?: string;
}

interface CircleLayerBaseProps extends LayerProps {
  blur?: number | ExpressionSpecification;
  color?: string | ExpressionSpecification;
  emissiveStrength?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  pitchAlignment?: 'map' | 'viewport';
  pitchScale?: 'map' | 'viewport';
  radius?: number | ExpressionSpecification;
  sortKey?: number;
  strokeColor?: string | ExpressionSpecification;
  strokeOpacity?: number | ExpressionSpecification;
  strokeWidth?: number | ExpressionSpecification;
  translate?: [number, number] | ExpressionSpecification;
  translateAnchor?: 'map' | 'viewport';
}
export type CircleLayerProps = CircleLayerBaseProps &
  (GeojsonSource | VectorSource);

interface FillLayerBaseProps extends LayerProps {
  antialias?: boolean;
  color?: string | ExpressionSpecification;
  emissiveStrength?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  outlineColor?: string | ExpressionSpecification;
  imgUrl?: string;
  sortKey?: number;
  translate?: [number, number] | ExpressionSpecification;
  translateAnchor?: 'map' | 'viewport';
}

export type FillLayerProps = FillLayerBaseProps &
  (GeojsonSource | VectorSource);

interface LineLayerBaseProps extends LayerProps {
  blur?: number | ExpressionSpecification;
  cap?: 'butt' | 'round' | 'square';
  color?: string | ExpressionSpecification;
  dasharray?: number[];
  emissiveStrength?: number | ExpressionSpecification;
  gapWidth?: number;
  gradient?: ExpressionSpecification;
  join?: 'bevel' | 'round' | 'miter' | 'none';
  miterLimit?: number | ExpressionSpecification;
  occlusionOpacity?: number | ExpressionSpecification;
  offset?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  roundLimit?: number | ExpressionSpecification;
  sortKey?: number;
  translate?: [number, number] | ExpressionSpecification;
  translateAnchor?: 'map' | 'viewport';

  trimOffset?: [number, number];
  width?: number | ExpressionSpecification;

  imgUrl?: string;
}

export type LineLayerProps = LineLayerBaseProps &
  (GeojsonSource | VectorSource);

interface HeatmapLayerBaseProps extends LayerProps {
  color?: ExpressionSpecification;
  intensity?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  radius?: number | ExpressionSpecification;
  weight?: number | ExpressionSpecification;
}

export type HeatmapLayerProps = HeatmapLayerBaseProps &
  (GeojsonSource | VectorSource);

export interface RasterLayerProps extends LayerProps {
  source: RasterSourceSpecification;

  brightnessMax?: number | ExpressionSpecification;
  brightnessMin?: number | ExpressionSpecification;
  color?: ExpressionSpecification;
  colorMix?: [number, number, number, number] | ExpressionSpecification;
  colorRange?: [number, number] | ExpressionSpecification;
  contrast?: number | ExpressionSpecification;
  emissiveStrength?: number | ExpressionSpecification;
  fadeDuration?: number | ExpressionSpecification;
  hueRotate?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  resampling?: 'linear' | 'nearest';
  saturation?: number | ExpressionSpecification;
}
