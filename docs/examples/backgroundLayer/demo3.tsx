import { CSSProperties, FC } from 'react';
import { BackgroundLayer, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const imgUrl = '/react-mapboxgl-zt/imgs/background.png';

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <BackgroundLayer id="background" imgUrl={imgUrl} opacity={0.5} />
      </MapComponent>
    </div>
  );
};

export default App;
