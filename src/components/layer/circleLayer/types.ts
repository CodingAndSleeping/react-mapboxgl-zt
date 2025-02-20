export interface CircleLayerProps {
  id: string;
  filter?: any[];
  maxzoom?: number;
  minzoom?: number;
  slot?: string;
  beforeId?: string;
  visibility?: 'visible' | 'none';
}
