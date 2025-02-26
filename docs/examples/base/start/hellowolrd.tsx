import { MapFactory } from 'react-mapboxgl-zt';

const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});

export default function BaseMap() {
  return (
    <div
      style={{
        height: '20rem',
      }}
    >
      <MapInstance></MapInstance>
    </div>
  );
}
