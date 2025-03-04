import { ExpressionSpecification, GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { LineLayer, MapFactory } from 'react-mapboxgl-zt';

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
    data: '/react-mapboxgl-zt/data/line.geojson',
    lineMetrics: true,
  };

  const gradinent: ExpressionSpecification = [
    'interpolate',
    ['linear'],
    ['line-progress'],
    0,
    '#ff0000',
    0.5,
    '#00ff00',
    1,
    '#0000ff',
  ];

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <LineLayer id="line" source={source} width={5} gradient={gradinent} />
      </MapComponent>
    </div>
  );
};

export default App;
