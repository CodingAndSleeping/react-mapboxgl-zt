/* eslint-disable react-hooks/rules-of-hooks */
import mapboxgl, { Map } from 'mapbox-gl';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { isEqual } from 'lodash-es';
import { MapContext } from '../../../context/index';

import { updateEvents } from './events';
import type { Events, MapFactoryParams, MapOptions } from './types';

import './index.scss';

import 'mapbox-gl/dist/mapbox-gl.css';

const DEFAULT_ZOOM = 10; // 默认缩放级别
const DEFAULT_CENTER: [number, number] = [113.94, 22.52]; // 默认中心点
const DEFAULT_PITCH = 0; // 默认俯仰角
const DEFAULT_BEARING = 0; // 默认方位角
const DEFAULT_MAX_PITCH = 85; // 最大俯仰角
const DEFAULT_MIN_PITCH = 0; // 最小俯仰角
const DEFAULT_MAX_ZOOM = 22; // 最大缩放级别
const DEFAULT_MIN_ZOOM = 0; // 最小缩放级别
const DEFAULT_MOVEMETHOD = 'flyTo'; // 默认动画效果 'flyTo' | 'easeTo' | 'jumpTo'

const DEFAULT_STYLE = 'mapbox://styles/mapbox/streets-v11'; // 默认样式

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
      center = DEFAULT_CENTER,
      zoom = DEFAULT_ZOOM,
      bearing = DEFAULT_BEARING,
      pitch = DEFAULT_PITCH,

      bounds,
      fitBoundsOptions,
      maxBounds,

      maxPitch = DEFAULT_MAX_PITCH,
      minPitch = DEFAULT_MIN_PITCH,
      maxZoom = DEFAULT_MAX_ZOOM,
      minZoom = DEFAULT_MIN_ZOOM,
      style = DEFAULT_STYLE,

      className,

      moveMethod = DEFAULT_MOVEMETHOD,
      cameraOptions,
      animationOptions = {},

      children,

      onMapLoad,
    } = props;

    const [mapInstance, setMapInstance] = useState<Map | null>(null);

    const container = useRef<HTMLDivElement>(null);

    const [ready, setReady] = useState(false);

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

        setReady(true);
      });

      return () => {
        if (mapInstance) mapInstance.remove();
      };
    }, []);

    useEffect(() => {
      if (!mapInstance) return;

      const prevCenter = mapInstance.getCenter();
      const prevZoom = mapInstance.getZoom();
      const prevBearing = mapInstance.getBearing();
      const prevPitch = mapInstance.getPitch();

      const isCenterChanged =
        prevCenter.lng !== center[0] || prevCenter.lat !== center[1];
      const isZoomChanged = prevZoom !== zoom;
      const isBearingChanged = prevBearing !== bearing;
      const isPitchChanged = prevPitch !== pitch;

      if (
        isCenterChanged ||
        isZoomChanged ||
        isBearingChanged ||
        isPitchChanged
      ) {
        mapInstance[moveMethod]({
          ...cameraOptions,
          ...animationOptions,
          center,
          zoom,
          bearing,
          pitch,
        });
      }

      if (bounds) {
        mapInstance.fitBounds(bounds, fitBoundsOptions);
      }

      if (maxBounds) {
        mapInstance.setMaxBounds(maxBounds);
      }

      if (maxPitch !== mapInstance.getMaxPitch()) {
        mapInstance.setMaxPitch(maxPitch);
      }

      if (minPitch !== mapInstance.getMinPitch()) {
        mapInstance.setMinPitch(minPitch);
      }

      if (maxZoom !== mapInstance.getMaxZoom()) {
        mapInstance.setMaxZoom(maxZoom);
      }

      if (minZoom !== mapInstance.getMinZoom()) {
        mapInstance.setMinZoom(minZoom);
      }
    }, [
      JSON.stringify(center),
      zoom,
      pitch,
      bearing,

      JSON.stringify(bounds),
      JSON.stringify(maxBounds),
      JSON.stringify(fitBoundsOptions),

      maxPitch,
      minPitch,
      maxZoom,
      minZoom,
    ]);

    useEffect(() => {
      if (!mapInstance) return;

      if (typeof style === 'string') {
        mapInstance.setStyle(style);
        return;
      }

      if (
        typeof style === 'object' &&
        !isEqual(style, mapInstance.getStyle())
      ) {
        mapInstance.setStyle(style);
      }
    }, [style]);

    // 每次组件渲染都会去重新更新事件
    if (mapInstance) {
      updateEvents(props, mapInstance);
    }

    return (
      <MapContext.Provider value={mapInstance}>
        <div className={cn('map-container', className)} ref={container}>
          {ready && children}
        </div>
      </MapContext.Provider>
    );
  };
};

export default MapFactory;
