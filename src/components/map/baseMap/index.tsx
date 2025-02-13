import mapboxgl from 'mapbox-gl';
import { FC, useEffect, useRef } from 'react';
const Map: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current!, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.on('load', () => {
      console.log('Map loaded', map);
    });
  }, []);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default Map;
