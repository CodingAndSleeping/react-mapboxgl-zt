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
  return (
    <div style={toolContainerStyle}>
      <div>子组件</div>
      <div>zoom: {map?.getZoom()}</div>
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
