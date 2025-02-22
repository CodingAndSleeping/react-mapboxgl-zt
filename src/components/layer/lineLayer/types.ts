import {
  ExpressionSpecification,
  GeoJSONSourceSpecification,
  VectorSourceSpecification,
} from 'mapbox-gl';

interface GeojsonSource {
  source: GeoJSONSourceSpecification;
  sourceLayer?: string;
}
interface VectorSource {
  source: VectorSourceSpecification;
  sourceLayer: string;
}

interface LineLayerBaseProps {
  id: string;
  filter?: ExpressionSpecification;
  maxzoom?: number;
  minzoom?: number;
  slot?: string;

  beforeId?: string;
  visibility?: 'visible' | 'none';

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
