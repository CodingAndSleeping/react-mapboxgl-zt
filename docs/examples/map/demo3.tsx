import { FC } from 'react';
import { MapFactory, MapOptions } from 'react-mapboxgl-zt';

const mapContainerStyle = {
  width: '100%',
  height: '20em',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const mapState: MapOptions = {
    center: [116.397456, 39.90888],
    zoom: 12,
    bearing: 0,
    pitch: 30,
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        center={mapState.center}
        zoom={mapState.zoom}
        bearing={mapState.bearing}
        pitch={mapState.pitch}
      ></MapComponent>
    </div>
  );
};

export default App;
