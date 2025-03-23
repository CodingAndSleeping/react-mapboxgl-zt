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

  const point1 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [113.911772, 22.522311],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const point2 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [113.91973158688364, 22.517721486970146],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const polygon = {
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

  const isPoint1InPolygon = mapTool.isPointInPolygon(point1, polygon);
  const isPoint2InPolygon = mapTool.isPointInPolygon(point2, polygon);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#ff0000' }}>红色的点</span>
          {isPoint1InPolygon ? '在' : '不在'}多边形内
          <br />
          <span style={{ color: '#0000ff' }}>蓝色的点</span>
          {isPoint2InPolygon ? '在' : '不在'}多边形内
        </div>
        <FillLayer
          id="polygon"
          source={{
            type: 'geojson',
            data: polygon,
          }}
          color={'#000000'}
          opacity={0.3}
        ></FillLayer>
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
