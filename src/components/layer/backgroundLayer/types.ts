import { BackgroundLayerSpecification } from 'mapbox-gl';

export interface BackgroundLayerProps {
  id: string;
  filter?: any[];
  maxzoom?: number;
  minzoom?: number;

  slot?: string;
  color?: string;
  emissiveStrength?: number;
  opacity?: number;
  imgUrl?: string;
  visibility?: 'visible' | 'none';
  beforeId?: string;

  onLayerLoad?: (layer: BackgroundLayerSpecification) => void;
}
