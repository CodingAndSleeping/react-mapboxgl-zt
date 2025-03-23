import { CSSProperties, FC } from 'react';
import { CircleLayer, FillLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

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

  const feature = {
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

  const centroid = mapTool.centroid(feature);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#0000ff' }}>蓝色的点</span>为多边形的质心
        </div>
        <FillLayer
          id="feature"
          source={{ type: 'geojson', data: feature }}
          color="#ff0000"
          opacity={0.5}
        />

        <CircleLayer
          id="centroid"
          source={{ type: 'geojson', data: centroid }}
          color={'#0000ff'}
          radius={5}
        />
      </MapInstance>
    </div>
  );
};

export default APP;
