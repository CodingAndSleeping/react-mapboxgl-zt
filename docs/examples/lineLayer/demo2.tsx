import { ColorPicker, Form, Select, Slider } from 'antd';
import { GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { LineLayer, MapFactory } from 'react-mapboxgl-zt';

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
    data: '/react-mapboxgl-zt/data/line.geojson',
  };

  const [style, setStyle] = useState({
    color: '#6969da',
    opacity: 1,
    blur: 0,
    width: 5,
    cap: 'butt' as 'butt',
    dasharray: [1, 0],
    gapWidth: 0,
    join: 'miter' as 'miter',
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

            <Form.Item label="模糊" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.blur}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, blur: value })}
              />
            </Form.Item>

            <Form.Item label="线宽" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.width}
                min={1}
                max={20}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, width: value })}
              />
            </Form.Item>

            <Form.Item label="线端样式" colon>
              <Select
                size="small"
                value={style.cap}
                onChange={(value) => setStyle({ ...style, cap: value })}
                options={[
                  {
                    value: 'butt',
                    label: 'Butt',
                  },
                  {
                    value: 'round',
                    label: 'Round',
                  },
                  {
                    value: 'square',
                    label: 'Square',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="实线宽度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.dasharray[0]}
                min={0}
                max={5}
                step={1}
                dots={false}
                onChange={(value) =>
                  setStyle({ ...style, dasharray: [value, style.dasharray[1]] })
                }
              ></Slider>
            </Form.Item>

            <Form.Item label="虚线宽度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.dasharray[1]}
                min={0}
                max={5}
                step={1}
                dots={false}
                onChange={(value) =>
                  setStyle({ ...style, dasharray: [style.dasharray[0], value] })
                }
              ></Slider>
            </Form.Item>

            <Form.Item label="双线间隙" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.gapWidth}
                min={0}
                max={10}
                step={1}
                dots={false}
                onChange={(value) => setStyle({ ...style, gapWidth: value })}
              ></Slider>
            </Form.Item>

            <Form.Item label="连接样式" colon>
              <Select
                size="small"
                value={style.join}
                onChange={(value) => setStyle({ ...style, join: value })}
                options={[
                  {
                    value: 'bevel',
                    label: 'Bevel',
                  },
                  {
                    value: 'round',
                    label: 'Round',
                  },
                  {
                    value: 'miter',
                    label: 'Miter',
                  },
                  {
                    value: 'none',
                    label: 'None',
                  },
                ]}
              />
            </Form.Item>
          </Form>
        </div>
        <LineLayer id="line" source={source} {...style} />
      </MapComponent>
    </div>
  );
};

export default App;
