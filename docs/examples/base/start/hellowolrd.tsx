import { FC } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';

const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});

const APP: FC = () => {
  return (
    <div
      style={{
        height: '20rem',
      }}
    >
      <MapInstance></MapInstance>
    </div>
  );
};

export default APP;
