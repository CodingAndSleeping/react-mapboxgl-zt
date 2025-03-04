import { ColorPicker, Form, Slider } from 'antd';
import { GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { FillLayer, MapFactory } from 'react-mapboxgl-zt';

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
  const source: GeoJSONSourceSpecification = {
    type: 'geojson',
    data: '/react-mapboxgl-zt/data/polygon.geojson',
  };

  const [style, setStyle] = useState({
    antialias: true,
    color: '#6969da',
    opacity: 0.5,
    outlineColor: '#d47b7b',
  });

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={2.5}
        center={[105.405522, 37.2241]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <Form labelCol={{ span: 10 }}>
            <Form.Item label="颜色" colon>
              <ColorPicker
                size="small"
                value={style.color}
                onChange={(color) =>
                  setStyle({ ...style, color: color.toHexString() })
                }
              />
            </Form.Item>
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
            <Form.Item label="边框颜色" colon>
              <ColorPicker
                size="small"
                value={style.outlineColor}
                onChange={(color) =>
                  setStyle({ ...style, outlineColor: color.toHexString() })
                }
              />
            </Form.Item>
          </Form>
        </div>
        <FillLayer id="fill" source={source} {...style} />
      </MapComponent>
    </div>
  );
};

export default App;
