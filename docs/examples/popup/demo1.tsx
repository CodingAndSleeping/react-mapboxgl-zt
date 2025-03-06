import { CSSProperties, FC } from 'react';
import { MapFactory, Popup } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const titleStyle: CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  borderBottom: '1px solid #ccc',
};

const contentStyle: CSSProperties = {
  fontSize: '0.8rem',
  lineHeight: '1.5',
  padding: '2px',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <Popup lngLat={[114.095111, 22.634657]}>
          <div className="popup-title" style={titleStyle}>
            标题
          </div>
          <div className="popup-content" style={contentStyle}>
            弹窗内容
          </div>
        </Popup>
      </MapComponent>
    </div>
  );
};

export default App;
