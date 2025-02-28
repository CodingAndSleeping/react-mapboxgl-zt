import { CSSProperties, FC } from 'react';
import { MapFactory, ScaleControl } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '20em',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <ScaleControl unit="nautical" />
      </MapComponent>
    </div>
  );
};

export default App;
