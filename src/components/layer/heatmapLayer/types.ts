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

interface HeatmapLayerBaseProps {
  id: string;
  filter?: ExpressionSpecification;
  maxzoom?: number;
  minzoom?: number;
  slot?: string;

  beforeId?: string;
  visibility?: 'visible' | 'none';

  color?: ExpressionSpecification;
  intensity?: number | ExpressionSpecification;
  opacity?: number | ExpressionSpecification;
  radius?: number | ExpressionSpecification;
  weight?: number | ExpressionSpecification;
}

export type HeatmapLayerProps = HeatmapLayerBaseProps &
  (GeojsonSource | VectorSource);
