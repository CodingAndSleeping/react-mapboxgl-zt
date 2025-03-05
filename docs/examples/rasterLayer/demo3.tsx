import { Form, Slider } from 'antd';
import { RasterSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { MapFactory, RasterLayer } from 'react-mapboxgl-zt';

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
  padding: '15px',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const source: RasterSourceSpecification = {
    type: 'raster',
    tiles: [
      'https://webrd01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd02.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
      'https://webrd04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1',
    ],
    tileSize: 256,
  };

  const [style, setStyle] = useState({
    opacity: 1,
    saturation: 0,
  });

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <Form labelCol={{ span: 10 }}>
            <Form.Item label="透明度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.opacity}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, opacity: value })}
              />
            </Form.Item>

            <Form.Item label="饱和度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.saturation}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, saturation: value })}
              />
            </Form.Item>
          </Form>
        </div>
        <RasterLayer id="raster" source={source} {...style}></RasterLayer>
      </MapComponent>
    </div>
  );
};

export default App;
