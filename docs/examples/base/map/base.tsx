/**
 * compact: true
 */

import { MapFactory } from '@react-mapbox';
const Map = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});
export default function BaseMap() {
  return (
    <div>
      <Map></Map>
    </div>
  );
}
