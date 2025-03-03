import { ExpressionSpecification, GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { CircleLayer, MapFactory } from 'react-mapboxgl-zt';

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
    data: '/react-mapboxgl-zt/data/point.geojson',
  };

  const style = {
    color: [
      'match',
      ['get', 'name'],
      '北京',
      '#ff0000',
      '#0000ff',
    ] as ExpressionSpecification,
    opacity: 0.5,
    radius: [
      'interpolate',
      ['linear'],
      ['zoom'],
      3,
      5,
      10,
      8,
    ] as ExpressionSpecification,
    strokeWidth: [
      'interpolate',
      ['linear'],
      ['zoom'],
      5,
      1,
      10,
      3,
    ] as ExpressionSpecification,
    strokeColor: [
      'match',
      ['get', 'name'],
      '北京',
      '#ff0000',
      '#0000ff',
    ] as ExpressionSpecification,
    strokeOpacity: 1,
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent zoom={2.5} center={[105.405522, 37.2241]}>
        <CircleLayer id="circle" source={source} {...style} />
      </MapComponent>
    </div>
  );
};

export default App;
