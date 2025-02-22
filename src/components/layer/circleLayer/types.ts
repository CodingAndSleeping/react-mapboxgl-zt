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

interface CircleLayerBaseProps {
  id: string;
  filter?: ExpressionSpecification;
  maxzoom?: number;
  minzoom?: number;
  slot?: string;

  beforeId?: string;
  visibility?: 'visible' | 'none';

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
