export interface BackgroundLayerProps {
  id: string;
  filter?: any[];
  maxzoom?: number;
  minzoom?: number;
  visibility?: 'visible' | 'none';
  beforeId?: string;
  slot?: string;

  color?: string;
  emissiveStrength?: number;
  opacity?: number;
  imgUrl?: string;
  pitchAlignment?: 'map' | 'viewport';
}
