import { Map, MapMouseEvent } from 'mapbox-gl';
import { CSSProperties, FC, useRef } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const mapRef = useRef<Map | null>(null);

  const onMapLoad = (map: Map) => {
    mapRef.current = map;
  };

  const onClick = (e: MapMouseEvent) => {
    alert(`Clicked at ${e.lngLat}`);
  };
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        onMapLoad={(map) => onMapLoad(map)}
        onClick={(e) => onClick(e as MapMouseEvent)}
      ></MapComponent>
    </div>
  );
};

export default App;
