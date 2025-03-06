import { Radio, RadioChangeEvent } from 'antd';
import { CSSProperties, FC, useContext } from 'react';
import { MapContext, MapFactory } from 'react-mapboxgl-zt';

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

const Children = () => {
  const map = useContext(MapContext);

  const options = [
    {
      value: 'mapbox://styles/mapbox/streets-v11',
      label: '街道',
    },
    {
      value: 'mapbox://styles/mapbox/satellite-streets-v12',
      label: '影像图',
    },
    {
      value: 'mapbox://styles/mapbox/light-v11',
      label: '白天',
    },
    {
      value: 'mapbox://styles/mapbox/dark-v11',
      label: '黑夜',
    },
  ];

  const onChange = (e: RadioChangeEvent) => {
    if (map) {
      map.setStyle(e.target.value);
    }
  };

  return (
    <div className="tool-container" style={toolContainerStyle}>
      <Radio.Group
        defaultValue={'mapbox://styles/mapbox/streets-v11'}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};

const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <Children />
      </MapComponent>
    </div>
  );
};

export default App;
