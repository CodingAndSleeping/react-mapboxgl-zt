import { CSSProperties, FC } from 'react';
import { LineLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const toolContainerStyle: CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  padding: '10px',
};

const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const APP: FC = () => {
  const mapTool = new MapTool();

  const line = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.915039, 22.522693],
        [113.916971, 22.514066],
        [113.925068, 22.509859],
        [113.931094, 22.505013],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const length = mapTool.length(line, {
    units: 'meters',
    formatter: (d) => Number(d.toFixed(2)),
  });

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          线的长度为：{length}米
        </div>
        <LineLayer
          id="line"
          source={{
            type: 'geojson',
            data: line,
          }}
          color={'#ff0000'}
          width={5}
        ></LineLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
