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
interface FillLayerBaseProps {
  id: string;
  filter?: ExpressionSpecification;
  maxzoom?: number;
  minzoom?: number;
  slot?: string;

  beforeId?: string;
  visibility?: 'visible' | 'none';

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
