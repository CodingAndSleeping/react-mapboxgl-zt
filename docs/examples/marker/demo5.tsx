import { CSSProperties, FC, useRef } from 'react';
import { MapFactory, Marker } from 'react-mapboxgl-zt';

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
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  const onClick = () => {
    if (markerRef.current) {
      markerRef.current.remove();
    }
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <div className="tool-container" style={toolContainerStyle}>
          <button type="button" onClick={onClick}>
            点击移除marker
          </button>
        </div>
        <Marker lngLat={[114.095111, 22.634657]} ref={markerRef}></Marker>
      </MapComponent>
    </div>
  );
};

export default App;
