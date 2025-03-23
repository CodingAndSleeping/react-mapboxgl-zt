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

  const line1 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.91531506515037, 22.522863653184743],
        [113.91301479341541, 22.5109216345691],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const line2 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.92506821730939, 22.52001636165072],
        [113.92414810861499, 22.508244100905173],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const line3 = {
    type: 'Feature',
    properties: {},
    geometry: {
      coordinates: [
        [113.9203756629683, 22.509604124484298],
        [113.9289786792599, 22.518273960283267],
      ],
      type: 'LineString',
    },
  } as GeoJSON.Feature<GeoJSON.LineString>;

  const isLine1Line2Intersects = mapTool.isIntersects(line1, line2);
  const isLine2Line3Intersects = mapTool.isIntersects(line2, line3);
  const isLine3Line1Intersects = mapTool.isIntersects(line3, line1);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapInstance
        style={'mapbox://styles/mapbox/light-v11'}
        center={[113.920007, 22.517126]}
        zoom={12}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <span style={{ color: '#ff0000' }}>红色的线</span>和
          <span style={{ color: '#0000ff' }}>蓝色的线</span>
          {isLine1Line2Intersects ? '相交' : '不相交'}
          <br />
          <span style={{ color: '#0000ff' }}>蓝色的线</span>和
          <span style={{ color: '#00ff00' }}>绿色的线</span>
          {isLine2Line3Intersects ? '相交' : '不相交'}
          <br />
          <span style={{ color: '#00ff00' }}>绿色的线</span>和
          <span style={{ color: '#ff0000' }}>红色的线</span>
          {isLine3Line1Intersects ? '相交' : '不相交'}
        </div>

        <LineLayer
          id="line1"
          source={{
            type: 'geojson',
            data: line1,
          }}
          color={'#ff0000'}
          width={5}
        ></LineLayer>
        <LineLayer
          id="line2"
          source={{
            type: 'geojson',
            data: line2,
          }}
          color={'#0000ff'}
          width={5}
        ></LineLayer>
        <LineLayer
          id="line3"
          source={{
            type: 'geojson',
            data: line3,
          }}
          color={'#00ff00'}
          width={5}
        ></LineLayer>
      </MapInstance>
    </div>
  );
};

export default APP;
