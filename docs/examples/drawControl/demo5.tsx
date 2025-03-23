import { CSSProperties, FC } from 'react';
import {
  DrawControl,
  DrawCreateEvent,
  DrawDeleteEvent,
  MapFactory,
} from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};
const toolContainerStyle: CSSProperties = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  padding: '10px',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const onCreate = (e: DrawCreateEvent) => {
    console.log(e);
  };
  const onDelete = (e: DrawDeleteEvent) => {
    console.log(e);
  };
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent style={'mapbox://styles/mapbox/light-v11'}>
        <DrawControl onDrawCreate={onCreate} onDrawDelete={onDelete} />
      </MapComponent>
    </div>
  );
};

export default App;
