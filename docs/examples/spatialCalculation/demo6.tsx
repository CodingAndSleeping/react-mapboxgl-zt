import { CSSProperties, FC } from 'react';
import { FillLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

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

  const feature1 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.91729329884288, 22.52294864605986],
          [113.9112205814613, 22.520526328626516],
          [113.9105765053747, 22.513641615670252],
          [113.91600514667164, 22.508626608889116],
          [113.92654039121913, 22.513641615670252],
          [113.93031283686577, 22.521503760069677],
          [113.91729329884288, 22.52294864605986],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const feature2 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.92663240209038, 22.523883564237337],
          [113.92401009231111, 22.518231462414576],
          [113.92773653252317, 22.511814134267127],
          [113.93610952163971, 22.5109216345691],
          [113.94029601619798, 22.520228848118975],
          [113.93900786402662, 22.52647580427616],
          [113.92663240209038, 22.523883564237337],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const difference1 = mapTool.difference(feature1, feature2);

  const difference2 = mapTool.difference(feature2, feature1);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#ff0000' }}>红色的多边形</span>为两多边形的差集
        </div>

        <FillLayer
          id="feature1"
          source={{
            type: 'geojson',
            data: feature1,
          }}
          color={'#0000ff'}
          opacity={0.3}
        ></FillLayer>

        <FillLayer
          id="feature2"
          source={{
            type: 'geojson',
            data: feature2,
          }}
          color={'#0000ff'}
          opacity={0.3}
        ></FillLayer>

        {difference1 && (
          <FillLayer
            id="difference1"
            source={{
              type: 'geojson',
              data: difference1,
            }}
            color={'#ff0000'}
            opacity={0.8}
          ></FillLayer>
        )}
        {difference2 && (
          <FillLayer
            id="difference2"
            source={{
              type: 'geojson',
              data: difference2,
            }}
            color={'#ff0000'}
            opacity={0.8}
          ></FillLayer>
        )}
      </MapInstance>
    </div>
  );
};

export default APP;
