import { Form, Select, Slider } from 'antd';
import { ExpressionSpecification, GeoJSONSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC, useState } from 'react';
import { HeatmapLayer, MapFactory } from 'react-mapboxgl-zt';

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
    data: '/react-mapboxgl-zt/data/metro.geojson',
  };

  const [style, setStyle] = useState({
    color: 'color1' as keyof typeof colorOptions,
    intensity: 0.5,
    opacity: 1,
    radius: 30,
    weight: 0.5,
  });

  const colorOptions = {
    color1: [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(0, 0, 255, 0)',
      0.1,
      'royalblue',
      0.3,
      'cyan',
      0.5,
      'lime',
      0.7,
      'yellow',
      1,
      'red',
    ] as ExpressionSpecification,

    color2: [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      1,
      'rgb(178,24,43)',
    ] as ExpressionSpecification,
  };

  const getColor = (
    value: keyof typeof colorOptions,
  ): ExpressionSpecification => {
    return colorOptions[value] || colorOptions['color1'];
  };

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
              <Select
                size="small"
                value={style.color}
                onChange={(value) => setStyle({ ...style, color: value })}
                options={Object.keys(colorOptions).map((key) => ({
                  label: key,
                  value: key,
                }))}
              ></Select>
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
            <Form.Item label="强度" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.intensity}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, intensity: value })}
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
            <Form.Item label="权重" colon>
              <Slider
                style={{ width: '5rem' }}
                value={style.weight}
                min={0}
                max={1}
                step={0.1}
                dots={false}
                onChange={(value) => setStyle({ ...style, weight: value })}
              />
            </Form.Item>
          </Form>
        </div>

        <HeatmapLayer
          id="heatmap"
          source={source}
          intensity={style.intensity}
          opacity={style.opacity}
          radius={style.radius}
          weight={style.weight}
          color={getColor(style.color)}
        ></HeatmapLayer>
      </MapComponent>
    </div>
  );
};

export default App;
