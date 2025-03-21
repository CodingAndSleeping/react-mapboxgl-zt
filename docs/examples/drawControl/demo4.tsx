import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Button } from 'antd';

import { CSSProperties, FC, useRef } from 'react';
import { DrawControl, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};
const toolContainerStyle: CSSProperties = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const drawControlRef = useRef<MapboxDraw | null>(null);

  const onAdd = () => {
    drawControlRef.current?.add({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [
              [
                [113.92365498974834, 22.567520547123223],
                [113.92365498974834, 22.54850208341223],
                [113.94836192053816, 22.54850208341223],
                [113.94836192053816, 22.567520547123223],
                [113.92365498974834, 22.567520547123223],
              ],
            ],
            type: 'Polygon',
          },
        },
      ],
    });
  };

  const onDeleteAll = () => {
    drawControlRef.current?.deleteAll();
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <div className="tool-container" style={toolContainerStyle}>
          <Button onClick={onAdd} size="small">
            添加图形
          </Button>
          <Button onClick={onDeleteAll} size="small">
            删除图形
          </Button>
        </div>

        <DrawControl onAdd={(control) => (drawControlRef.current = control)} />
      </MapComponent>
    </div>
  );
};

export default App;
