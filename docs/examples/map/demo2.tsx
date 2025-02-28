import { CSSProperties, FC } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
  interactive: false,
});

const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent></MapComponent>
    </div>
  );
};

export default App;
