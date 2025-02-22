import { ExpressionSpecification, RasterSourceSpecification } from 'mapbox-gl';
export interface RasterLayerProps {
  id: string;
  source: RasterSourceSpecification;
  maxzoom?: number;
  minzoom?: number;
  slot?: string;
  filter?: ExpressionSpecification;
  beforeId?: string;
  visibility?: 'visible' | 'none';

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
