import { RasterSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { MapFactory, RasterLayer } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const source: RasterSourceSpecification = {
    type: 'raster',
    tiles: [
      'https://webrd01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd02.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
    ],
    tileSize: 256,
  };
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <RasterLayer id="raster" source={source}></RasterLayer>
      </MapComponent>
    </div>
  );
};

export default App;
