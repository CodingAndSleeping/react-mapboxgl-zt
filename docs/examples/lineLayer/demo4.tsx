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
  };

  const color: ExpressionSpecification = [
    'match',
    ['get', 'name'],
    '地铁1号线(罗宝线)',
    '#3eaf48',
    '地铁2号线(8号线)',
    '#d67738',
    '地铁3号线(龙岗线)',
    '#34a4c3',
    '地铁4号线(龙华线)',
    '#e06d6d',
    '地铁5号线(环中线)',
    '#7f65b0',
    '地铁6号线(光明线)',
    '#74d0bf',
    '地铁7号线(西丽线)',
    '#4b86c7',
    '地铁9号线(梅林线)',
    '#aa845a',
    '地铁10号线(坂田线)',
    '#f2a7b9',
    '地铁11号线(机场线)',
    '#804c5b',
    '地铁12号线(南宝线)',
    '#dfdde8',
    '地铁13号线(石岩线)',
    '#e06d6d',
    '#000000',
  ];

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <LineLayer id="line" source={source} color={color} width={3} />
      </MapComponent>
    </div>
  );
};

export default App;
