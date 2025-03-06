import { CSSProperties, FC } from 'react';
import { MapFactory, Marker } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <Marker lngLat={[114.095111, 22.634657]}></Marker>
        <Marker lngLat={[114.018446, 22.669424]}></Marker>
        <Marker lngLat={[113.933587, 22.555961]}></Marker>
        <Marker lngLat={[114.052852, 22.534916]}></Marker>
        <Marker lngLat={[114.111121, 22.557448]}></Marker>
        <Marker lngLat={[114.143223, 22.622246]}></Marker>
      </MapComponent>
    </div>
  );
};

export default App;
