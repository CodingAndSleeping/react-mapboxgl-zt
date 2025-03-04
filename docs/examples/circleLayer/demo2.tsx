import { ColorPicker, Form, Slider } from 'antd';
import { GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { CircleLayer, MapFactory } from 'react-mapboxgl-zt';

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
  const source: GeoJSONSourceSpecification = {
    type: 'geojson',
    data: '/react-mapboxgl-zt/data/point.geojson',
  };

  const [style, setStyle] = useState({
    color: '#0000ff',
    opacity: 1,
    radius: 5,
    blur: 0,
    strokeWidth: 1,
    strokeColor: '#000000',
    strokeOpacity: 1,
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

            <Form.Item label="半径" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.radius}
                min={1}
                max={50}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, radius: value })}
              />
            </Form.Item>
            <Form.Item label="模糊" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.blur}
                min={-1}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, blur: value })}
              />
            </Form.Item>

            <Form.Item label="边框宽度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.strokeWidth}
                min={1}
                max={10}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, strokeWidth: value })}
              />
            </Form.Item>

            <Form.Item label="边框颜色" colon>
              <ColorPicker
                value={style.strokeColor}
                onChange={(color) =>
                  setStyle({ ...style, strokeColor: color.toHexString() })
                }
              />
            </Form.Item>
            <Form.Item label="边框透明度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.strokeOpacity}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) =>
                  setStyle({ ...style, strokeOpacity: value })
                }
              />
            </Form.Item>
          </Form>
        </div>
        <CircleLayer id="circle" source={source} {...style} />
      </MapComponent>
    </div>
  );
};

export default App;
