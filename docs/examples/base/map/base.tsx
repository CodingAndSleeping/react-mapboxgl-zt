import { BackgroundLayer, MapFactory } from '@react-mapbox';
import { useState } from 'react';
const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});
export default function BaseMap() {
  const [imgUrl, setImgUrl] = useState('/imgs/background1.jpg');
  return (
    <div>
      <button type="button" onClick={() => setImgUrl('/imgs/background2.jpg')}>
        改变背景
      </button>
      <MapInstance>
        <BackgroundLayer
          id="background"
          color="#fff"
          opacity={0.5}
          imgUrl={imgUrl}
        ></BackgroundLayer>
      </MapInstance>
    </div>
  );
}
