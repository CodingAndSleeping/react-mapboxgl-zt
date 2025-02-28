import { CSSProperties, FC, useRef } from 'react';
import { MapFactory, ScaleControl } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '20em',
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
  const scaleControRef = useRef<mapboxgl.ScaleControl | null>(null);

  const onClick = () => {
    if (scaleControRef.current) scaleControRef.current.setUnit('nautical');
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <div style={toolContainerStyle}>
          <button type="button" onClick={onClick}>
            点击改变比例尺单位
          </button>
        </div>
        <ScaleControl ref={scaleControRef} />
      </MapComponent>
    </div>
  );
};

export default App;
