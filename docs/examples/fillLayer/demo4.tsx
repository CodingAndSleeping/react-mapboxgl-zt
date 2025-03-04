import { GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { FillLayer, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const source: GeoJSONSourceSpecification = {
    type: 'geojson',
    data: '/react-mapboxgl-zt/data/polygon.geojson',
  };

  const imgUrl = '/react-mapboxgl-zt/imgs/polygon.png';

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={2.5}
        center={[105.405522, 37.2241]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <FillLayer id="fill" source={source} imgUrl={imgUrl} />
      </MapComponent>
    </div>
  );
};

export default App;
