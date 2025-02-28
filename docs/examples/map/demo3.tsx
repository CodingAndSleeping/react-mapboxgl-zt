import { Form, InputNumber } from 'antd';
import { CSSProperties, FC, useState } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';
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
  const [zoom, setZoom] = useState(10);
  const [pitch, setPitch] = useState(0);
  const [bearing, setBearing] = useState(0);

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent zoom={zoom} bearing={bearing} pitch={pitch}>
        <div className="tool-container" style={toolContainerStyle}>
          <Form labelCol={{ span: 10 }}>
            <Form.Item label="zoom">
              <InputNumber
                min={1}
                max={22}
                step={1}
                value={zoom}
                onChange={(value) => setZoom(value!)}
              />
            </Form.Item>
            <Form.Item label="pitch">
              <InputNumber
                min={0}
                max={85}
                step={5}
                value={pitch}
                onChange={(value) => setPitch(value!)}
              />
            </Form.Item>

            <Form.Item label="bearing">
              <InputNumber
                min={0}
                max={180}
                step={5}
                value={bearing}
                onChange={(value) => setBearing(value!)}
              />
            </Form.Item>
          </Form>
        </div>
      </MapComponent>
    </div>
  );
};

export default App;
