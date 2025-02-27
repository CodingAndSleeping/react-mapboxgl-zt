import { FC } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle = {
  width: '100%',
  height: '20em',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const style = 'mapbox://styles/mapbox/dark-v11';

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent style={style}></MapComponent>
    </div>
  );
};

export default App;
