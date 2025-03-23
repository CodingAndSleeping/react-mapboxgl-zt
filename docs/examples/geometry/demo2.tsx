import { CSSProperties, FC } from 'react';
import { CircleLayer, LineLayer, MapFactory, MapTool } from 'react-mapboxgl-zt';

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

  const point = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [113.911772, 22.522311],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const line = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.930588, 22.523033],
        [113.923734, 22.501231],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const distance = mapTool.pointToLineDistance(point, line, {
    units: 'meters',
    method: 'geodesic',
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
          点到线的最短距离为：{distance}米
        </div>

        <CircleLayer
          id="point"
          source={{
            type: 'geojson',
            data: point,
          }}
          color={'#ff0000'}
        ></CircleLayer>
        <LineLayer
          id="line"
          source={{
            type: 'geojson',
            data: line,
          }}
          color={'#0000ff'}
          width={5}
        ></LineLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
