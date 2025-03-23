import { CSSProperties, FC } from 'react';
import { FillLayer, LineLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const APP: FC = () => {
  const mapTool = new MapTool();

  const distance = 500;

  const line = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.923734, 22.501231],
        [113.930588, 22.523033],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const buffer = mapTool.buffer(line, distance, {
    units: 'meters',
    steps: 60,
  });

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <LineLayer
          id="line"
          source={{ type: 'geojson', data: line }}
          color={'#ff0000'}
          width={5}
        ></LineLayer>
        <FillLayer
          id="buffer"
          source={{
            type: 'geojson',
            data: buffer,
          }}
          color={'#0000ff'}
          opacity={0.3}
        ></FillLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
