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

  const polygon1 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.91425694015209, 22.519166412508582],
          [113.91048449450545, 22.514704093751448],
          [113.91393490210976, 22.508669109710766],
          [113.92341202165909, 22.510794134142117],
          [113.91425694015209, 22.519166412508582],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const polygon2 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.92621835317675, 22.52205621826164],
          [113.92460816296318, 22.515001586151087],
          [113.92948473904073, 22.5079040929199],
          [113.93854780968041, 22.516149050835935],
          [113.92621835317675, 22.52205621826164],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const polygon3 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.92985278251956, 22.517381502294725],
          [113.9277825379578, 22.515044085012946],
          [113.9313709618641, 22.51398160954507],
          [113.93307316294892, 22.51546907291352],
          [113.92985278251956, 22.517381502294725],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const isPolygon1containsPolygon3 = mapTool.isContains(polygon1, polygon3);
  const isPolygon2containsPolygon3 = mapTool.isContains(polygon2, polygon3);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#ff0000' }}>红色的多边形</span>
          {isPolygon1containsPolygon3 ? '包含' : '不包含'}
          <span style={{ color: '#00ff00' }}>绿色的多边形</span>
          <br />
          <span style={{ color: '#0000ff' }}>蓝色的多边形</span>
          {isPolygon2containsPolygon3 ? '包含' : '不包含'}
          <span style={{ color: '#00ff00' }}>绿色的多边形</span>
        </div>

        <FillLayer
          id="polygon1"
          source={{
            type: 'geojson',
            data: polygon1,
          }}
          color={'#ff0000'}
          opacity={0.5}
        ></FillLayer>
        <FillLayer
          id="polygon2"
          source={{
            type: 'geojson',
            data: polygon2,
          }}
          color={'#0000ff'}
          opacity={0.5}
        ></FillLayer>
        <FillLayer
          id="polygon3"
          source={{
            type: 'geojson',
            data: polygon3,
          }}
          color={'#00ff00'}
          opacity={0.5}
        ></FillLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
