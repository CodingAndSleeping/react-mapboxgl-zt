import { CSSProperties, FC, useState } from 'react';
import { MapFactory, Marker, OverlayEventParams } from 'react-mapboxgl-zt';

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
  const [markerPosition, setMarkerPosition] = useState(['114.095', '22.635']);

  const onDrag = (e: OverlayEventParams<mapboxgl.Marker>) => {
    setMarkerPosition(
      e.target
        .getLngLat()
        .toArray()
        .map((item) => item.toFixed(3)),
    );
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={9.5}
        center={[114.095111, 22.634657]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <div className="tool-container" style={toolContainerStyle}>
          marker positon: {`${markerPosition[0]}, ${markerPosition[1]}`}
        </div>
        <Marker
          lngLat={[114.095111, 22.634657]}
          draggable={true}
          onDrag={onDrag}
        ></Marker>
      </MapComponent>
    </div>
  );
};

export default App;
