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
      coordinates: [113.92921702702554, 22.518672623203567],
      type: 'Point',
    },
  } as GeoJSON.Feature<GeoJSON.Point>;

  const line = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.930588, 22.523033],
        [113.92921702702554, 22.518672623203567],
        [113.923734, 22.501231],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const isPoint1OnLine = mapTool.isPointOnLine(point1, line);
  const isPoint2OnLine = mapTool.isPointOnLine(point2, line);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#ff0000' }}>红色的点</span>
          {isPoint1OnLine ? '在' : '不在'}线上
          <br />
          <span style={{ color: '#0000ff' }}>蓝色的点</span>
          {isPoint2OnLine ? '在' : '不在'}线上
        </div>
        <LineLayer
          id="line"
          source={{
            type: 'geojson',
            data: line,
          }}
          width={5}
          color={'#000000'}
        ></LineLayer>
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
