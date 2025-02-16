/* eslint-disable react-hooks/rules-of-hooks */
import mapboxgl, { Map } from 'mapbox-gl';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { listenEvents, updateEvents } from './event';
import './index.scss';
import type { Events, MapFactoryParams, MapOptions } from './type';
const DEFAULE_ZOOM = 10;
const DEFAULE_CENTER: [number, number] = [113.94, 22.52];

const MapFactory = ({
  accessToken,
  apiUrl,
  antialias = false,
  attributionControl = false,
  bearingSnap = 7,
  boxZoom = true,
  clickTolerance = 3,
  collectResourceTiming = false,
  config,
  cooperativeGestures = false,
  crossSourceCollisions = true,
  customAttribution,
  doubleClickZoom = true,
  dragPan = true,
  dragRotate = true,
  fadeDuration = 300,
  failIfMajorPerformanceCaveat = false,
  hash = false,
  interactive = true,
  keyboard = true,
  language,
  locale,
  localFontFamily,
  localIdeographFontFamily = 'sans-serif',
  logoPosition = 'bottom-right',
  maxTileCacheSize,
  minTileCacheSize,
  performanceMetricsCollection = true,
  pitchWithRotate = true,
  preserveDrawingBuffer = false,
  projection = { name: 'mercator' },
  refreshExpiredTiles = true,
  renderWorldCopies = true,
  respectPrefersReducedMotion = true,
  scrollZoom = true,
  spriteFormat = 'auto',
  touchPitch = true,
  touchZoomRotate = true,
  trackResize = true,
  transformRequest,
}: MapFactoryParams) => {
  return (props: PropsWithChildren<MapOptions & Events>) => {
    const {
      center = DEFAULE_CENTER,
      zoom = DEFAULE_ZOOM,
      bearing = 0,
      pitch = 0,
      bounds,
      style = 'mapbox://styles/mapbox/standard',
      fitBoundsOptions,
      maxBounds,
      maxPitch = 85,
      minPitch = 0,
      maxZoom = 22,
      minZoom = 0,
      className,
      children,

      onMapLoad,
    } = props;

    const [mapInstance, setMapInstance] = useState<Map>();

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
      mapboxgl.accessToken = accessToken;

      if (apiUrl) {
        mapboxgl.config.API_URL = apiUrl;
      }

      const options: mapboxgl.MapOptions = {
        container: container.current!,

        center,
        zoom,
        pitch,
        bearing,
        bounds,
        style,
        fitBoundsOptions,
        maxBounds,
        maxPitch,
        minPitch,
        maxZoom,
        minZoom,

        antialias,
        attributionControl,
        bearingSnap,
        boxZoom,
        clickTolerance,
        collectResourceTiming,
        config,
        cooperativeGestures,
        crossSourceCollisions,
        customAttribution,
        doubleClickZoom,
        dragPan,
        dragRotate,
        fadeDuration,
        failIfMajorPerformanceCaveat,
        hash,
        interactive,
        keyboard,
        language,
        locale,
        localFontFamily,
        localIdeographFontFamily,
        logoPosition,
        maxTileCacheSize,
        minTileCacheSize,
        performanceMetricsCollection,
        pitchWithRotate,
        preserveDrawingBuffer,
        projection,
        refreshExpiredTiles,
        renderWorldCopies,
        respectPrefersReducedMotion,
        scrollZoom,
        spriteFormat,
        touchPitch,
        touchZoomRotate,
        trackResize,
        transformRequest,
      };

      const map = new mapboxgl.Map(options);
      setMapInstance(map);

      map.on('load', () => {
        if (onMapLoad) onMapLoad(map);

        listenEvents(props, map);
      });

      return () => {
        if (mapInstance) mapInstance.remove();
      };
    }, []);

    useEffect(() => {}, [
      JSON.stringify(center),
      JSON.stringify(bounds),
      JSON.stringify(style),
      JSON.stringify(fitBoundsOptions),
      JSON.stringify(maxBounds),
      zoom,
      pitch,
      bearing,
      maxPitch,
      minPitch,
      maxZoom,
      minZoom,
      className,
    ]);

    if (mapInstance) updateEvents(props, mapInstance);

    return (
      <div className={`map-container ${className || ''}`} ref={container}>
        {children}
      </div>
    );
  };
};

export default MapFactory;
