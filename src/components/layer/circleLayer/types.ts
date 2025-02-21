import {
  GeoJSONSourceSpecification,
  VectorSourceSpecification,
} from 'mapbox-gl';

export interface geojsonSource {
  source: GeoJSONSourceSpecification;
  sourceLayer?: string;
}
export interface vectorSource {
  source: VectorSourceSpecification;
  sourceLayer: string;
}

export interface CircleLayerProps {
  id: string;

  filter?: any[];
  maxzoom?: number;
  minzoom?: number;
  slot?: string;
  beforeId?: string;
  visibility?: 'visible' | 'none';

  blur?: number;
  color?: string;
  emissiveStrength?: number;
  opacity?: number;
  pitchAlignment?: 'map' | 'viewport';
  pitchScale?: 'map' | 'viewport';
  radius?: number;
  sortKey?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  translate?: [number, number];
  translateAnchor?: 'map' | 'viewport';
}
