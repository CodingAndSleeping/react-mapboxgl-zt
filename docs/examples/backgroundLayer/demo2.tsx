import { ColorPicker, Form, Slider } from 'antd';
import { CSSProperties, FC, useState } from 'react';
import { BackgroundLayer, MapFactory } from 'react-mapboxgl-zt';

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

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const [color, setColor] = useState('#A2E7F5');
  const [opacity, setOpacity] = useState(0.5);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <div className="tool-container" style={toolContainerStyle}>
          <Form labelCol={{ span: 10 }}>
            <Form.Item label="颜色" colon>
              <ColorPicker
                value={color}
                onChange={(color) => setColor(color.toHexString())}
              />
            </Form.Item>
            <Form.Item label="透明度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={opacity}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setOpacity(value)}
              />
            </Form.Item>
          </Form>
        </div>
        <BackgroundLayer id="background" color={color} opacity={opacity} />
      </MapComponent>
    </div>
  );
};

export default App;
