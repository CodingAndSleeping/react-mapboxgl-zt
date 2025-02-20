import { BackgroundLayer, MapFactory } from '@react-mapbox';

const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});
export default function BaseMap() {
  return (
    <div>
      <MapInstance>
        <BackgroundLayer
          id="background"
          color="#fff"
          opacity={0.5}
          onLayerLoad={(e) => console.log(e)}
        ></BackgroundLayer>
      </MapInstance>
    </div>
  );
}
