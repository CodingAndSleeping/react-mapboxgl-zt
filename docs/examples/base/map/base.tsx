import { MapFactory } from '@react-mapbox';
export default function BaseMap() {
  const Map = MapFactory({
    accessToken:
      'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
  });
  return (
    <div>
      <Map></Map>
    </div>
  );
}
