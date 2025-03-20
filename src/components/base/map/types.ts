import {
  AnimationOptions,
  CameraOptions,
  ConfigSpecification,
  LngLatBoundsLike,
  Map,
  MapDataEvent,
  MapMouseEvent,
  MapTouchEvent,
  MapWheelEvent,
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

  onMapLoad?: (map: Map) => void;
}

export interface MapEvents {
  onResize?: (e: MapDataEvent) => void;
  onIdle?: (e: MapDataEvent) => void;
  onRemove?: (e: MapDataEvent) => void;

  onMouseDown?: (e: MapMouseEvent) => void;
  onMouseUp?: (e: MapMouseEvent) => void;
  onMouseOver?: (e: MapMouseEvent) => void;
  onMouseMove?: (e: MapMouseEvent) => void;

  onMouseEnter?: (e: MapMouseEvent) => void;
  onMouseLeave?: (e: MapMouseEvent) => void;
  onMouseOut?: (e: MapMouseEvent) => void;

  onPreClick?: (e: MapMouseEvent) => void;
  onClick?: (e: MapMouseEvent) => void;
  onDblClick?: (e: MapMouseEvent) => void;

  onContextMenu?: (e: MapMouseEvent) => void;

  onWheel?: (e: MapWheelEvent) => void;

  onTouchStart?: (e: MapTouchEvent) => void;
  onTouchEnd?: (e: MapTouchEvent) => void;
  onTouchMove?: (e: MapTouchEvent) => void;
  onTouchCancel?: (e: MapTouchEvent) => void;

  onMoveStart?: (e: MapDataEvent) => void;
  onMove?: (e: MapDataEvent) => void;
  onMoveEnd?: (e: MapDataEvent) => void;

  onDragStart?: (e: MapDataEvent) => void;
  onDrag?: (e: MapDataEvent) => void;
  onDragEnd?: (e: MapDataEvent) => void;

  onZoomStart?: (e: MapDataEvent) => void;
  onZoom?: (e: MapDataEvent) => void;
  onZoomEnd?: (e: MapDataEvent) => void;

  onRotateStart?: (e: MapDataEvent) => void;
  onRotate?: (e: MapDataEvent) => void;
  onRotateEnd?: (e: MapDataEvent) => void;

  onPitchStart?: (e: MapDataEvent) => void;
  onPitch?: (e: MapDataEvent) => void;
  onPitchEnd?: (e: MapDataEvent) => void;

  onBoxZoomStart?: (e: MapDataEvent) => void;
  onBoxZoomEnd?: (e: MapDataEvent) => void;
  onBoxZoomCancel?: (e: MapDataEvent) => void;

  onRenderStart?: (e: MapDataEvent) => void;
  onRender?: (e: MapDataEvent) => void;

  onError?: (e: MapDataEvent) => void;

  onWebglContextLost?: (e: MapDataEvent) => void;
  onWebglContextRestored?: (e: MapDataEvent) => void;

  onData?: (e: MapDataEvent) => void;
  onStyleData?: (e: MapDataEvent) => void;
  onSourceData?: (e: MapDataEvent) => void;
  onDataLoading?: (e: MapDataEvent) => void;
  onStyleDataLoading?: (e: MapDataEvent) => void;
  onSourceDataLoading?: (e: MapDataEvent) => void;
  onStyleImageMissing?: (e: MapDataEvent) => void;

  onStyleLoad?: (e: MapDataEvent) => void;
  onStyleImportLoad?: (e: MapDataEvent) => void;
}
