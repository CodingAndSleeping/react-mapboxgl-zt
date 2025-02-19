import {
  AnimationOptions,
  CameraOptions,
  ConfigSpecification,
  LngLatBoundsLike,
  Map,
  ProjectionSpecification,
  RequestTransformFunction,
  StyleSpecification,
} from 'mapbox-gl';
export interface MapFactoryParams {
  accessToken: string;
  apiUrl?: string;
  antialias?: boolean;
  attributionControl?: boolean;
  bearingSnap?: number;
  boxZoom?: boolean;
  clickTolerance?: number;
  collectResourceTiming?: boolean;
  config?: { [key: string]: ConfigSpecification } | undefined;
  cooperativeGestures?: boolean;
  crossSourceCollisions?: boolean;
  customAttribution?: string | string[];
  doubleClickZoom?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  fadeDuration?: number;
  failIfMajorPerformanceCaveat?: boolean;
  hash?: boolean | string;
  interactive?: boolean;
  keyboard?: boolean;
  language?: 'auto' | string;
  locale?: object;
  localFontFamily?: string;
  localIdeographFontFamily?: string;
  logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  maxTileCacheSize?: number;
  minTileCacheSize?: number;
  performanceMetricsCollection?: boolean;
  pitchWithRotate?: boolean;
  preserveDrawingBuffer?: boolean;
  projection?: ProjectionSpecification;
  refreshExpiredTiles?: boolean;
  renderWorldCopies?: boolean;
  respectPrefersReducedMotion?: boolean;
  scrollZoom?: boolean;
  spriteFormat?: 'raster' | 'icon_set' | 'auto';
  touchPitch?: boolean;
  touchZoomRotate?: boolean;
  trackResize?: boolean;
  transformRequest?: RequestTransformFunction;
}

export interface MapOptions {
  center?: [number, number];
  zoom?: number;
  pitch?: number;
  bearing?: number;
  bounds?: [[number, number], [number, number]];
  style?: string | StyleSpecification;
  fitBoundsOptions?: CameraOptions & AnimationOptions;
  maxBounds?: LngLatBoundsLike;
  maxPitch?: number;
  minPitch?: number;
  maxZoom?: number;
  minZoom?: number;
  className?: string;

  moveMethod?: 'flyTo' | 'easeTo' | 'jumpTo';
  cameraOptions?: CameraOptions;
  animationOptions?: AnimationOptions;
}

export type MapEvent = (map: Map) => void;

export interface Events {
  onMapLoad?: MapEvent;

  onResize?: MapEvent;
  onIdle?: MapEvent;
  onRemove?: MapEvent;

  onMouseDown?: MapEvent;
  onMouseUp?: MapEvent;
  onMouseOver?: MapEvent;
  onMouseMove?: MapEvent;

  onMouseEnter?: MapEvent;
  onMouseLeave?: MapEvent;
  onMouseOut?: MapEvent;

  onPreClick?: MapEvent;
  onClick?: MapEvent;
  onDblClick?: MapEvent;

  onContextMenu?: MapEvent;

  onWheel?: MapEvent;

  onTouchStart?: MapEvent;
  onTouchEnd?: MapEvent;
  onTouchMove?: MapEvent;
  onTouchCancel?: MapEvent;

  onMoveStart?: MapEvent;
  onMove?: MapEvent;
  onMoveEnd?: MapEvent;

  onDragStart?: MapEvent;
  onDrag?: MapEvent;
  onDragEnd?: MapEvent;

  onZoomStart?: MapEvent;
  onZoom?: MapEvent;
  onZoomEnd?: MapEvent;

  onRotateStart?: MapEvent;
  onRotate?: MapEvent;
  onRotateEnd?: MapEvent;

  onPitchStart?: MapEvent;
  onPitch?: MapEvent;
  onPitchEnd?: MapEvent;

  onBoxZoomStart?: MapEvent;
  onBoxZoomEnd?: MapEvent;
  onBoxZoomCancel?: MapEvent;

  onRenderStart?: MapEvent;
  onRender?: MapEvent;

  onError?: MapEvent;

  onWebglContextLost?: MapEvent;
  onWebglContextRestored?: MapEvent;

  onData?: MapEvent;
  onStyleData?: MapEvent;
  onSourceData?: MapEvent;
  onDataLoading?: MapEvent;
  onStyleDataLoading?: MapEvent;
  onSourceDataLoading?: MapEvent;
  onStyleImageMissing?: MapEvent;

  onStyleLoad?: MapEvent;
  onStyleImportLoad?: MapEvent;
}
