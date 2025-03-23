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

  const polygon = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [
          [113.918489, 22.517891],
          [113.913244, 22.513854],
          [113.916281, 22.507139],
          [113.935051, 22.513004],
          [113.918489, 22.517891],
        ],
      ],
      type: 'Polygon',
    },
  } as GeoJSON.Feature<GeoJSON.Polygon>;

  const area = mapTool.area(polygon, {
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
          多边形的面积为：{area}米
        </div>
        <FillLayer
          id="polygon"
          source={{
            type: 'geojson',
            data: polygon,
          }}
          color="#ff0000"
          opacity={0.5}
        ></FillLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
