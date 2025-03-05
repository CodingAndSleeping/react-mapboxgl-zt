import { CSSProperties, FC } from 'react';
import { MapFactory, Marker } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const imgStyle: CSSProperties = {
  width: '2rem',
  height: '2rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const imgUrl = '/react-mapboxgl-zt/imgs/marker.png';

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <Marker lngLat={[114.095111, 22.634657]}>
          <img style={imgStyle} src={imgUrl} alt="marker" />
        </Marker>
      </MapComponent>
    </div>
  );
};

export default App;
