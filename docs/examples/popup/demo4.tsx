import { MapMouseEvent } from 'mapbox-gl';
import { CSSProperties, FC, useRef } from 'react';
import { MapFactory, Popup } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const onClick = (e: MapMouseEvent) => {
    if (popupRef.current) {
      popupRef.current.setLngLat(e.lngLat);
      popupRef.current.setText(
        `当前位置：${e.lngLat.lng.toFixed(3)}, ${e.lngLat.lat.toFixed(3)}`,
      );
    }
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
        onClick={onClick}
      >
        <Popup ref={popupRef}></Popup>
      </MapComponent>
    </div>
  );
};

export default App;
