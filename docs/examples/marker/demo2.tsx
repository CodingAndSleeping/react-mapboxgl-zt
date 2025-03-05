import { ColorPicker, Form, Select, Slider } from 'antd';
import { Anchor } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { MapFactory, Marker } from 'react-mapboxgl-zt';

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
  const [style, setStyle] = useState({
    anchor: 'center' as Anchor,
    color: '#3FB1CE',
    rotation: 0,
    scale: 1,
  });

  const anchorOptions = [
    'center',
    'top',
    'bottom',
    'left',
    'right',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ];

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <Form labelCol={{ span: 10 }}>
            <Form.Item label="定位锚点" colon>
              <Select
                size="small"
                value={style.anchor}
                onChange={(value) => setStyle({ ...style, anchor: value })}
                options={anchorOptions.map((option) => ({
                  label: option,
                  value: option,
                }))}
              ></Select>
            </Form.Item>
            <Form.Item label="颜色" colon>
              <ColorPicker
                value={style.color}
                onChange={(value) =>
                  setStyle({ ...style, color: value.toHexString() })
                }
              />
            </Form.Item>
            <Form.Item label="旋转角度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.rotation}
                min={0}
                max={360}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, rotation: value })}
              />
            </Form.Item>
            <Form.Item label="缩放比例" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.scale}
                min={0}
                max={5}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, scale: value })}
              />
            </Form.Item>
          </Form>
        </div>
        <Marker lngLat={[114.095111, 22.634657]} {...style}></Marker>
      </MapComponent>
    </div>
  );
};

export default App;
