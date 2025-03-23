import { CSSProperties, FC } from 'react';
import { CircleLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

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

  const point1 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [113.9138888, 22.52503],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const point2 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [113.922767, 22.513769],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const distance = mapTool.distance(point1, point2, {
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
          两点之间的距离为：{distance}米
        </div>

        <CircleLayer
          id="point1"
          source={{
            type: 'geojson',
            data: point1,
          }}
          color={'#ff0000'}
        ></CircleLayer>
        <CircleLayer
          id="point2"
          source={{
            type: 'geojson',
            data: point2,
          }}
          color={'#0000ff'}
        ></CircleLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
