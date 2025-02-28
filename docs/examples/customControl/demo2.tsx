import { Map } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { CustomControl, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

class HelloWorldControl {
  private _map: Map | undefined;
  private _container: HTMLElement | undefined;
  private _options: { foo: number; bar: string };
  constructor(options: { foo: number; bar: string }) {
    this._options = options;
  }
  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.textContent = `Hello, world, ${this._options.foo}, ${this._options.bar}`;
    return this._container;
  }

  onRemove() {
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }
}
const App: FC = () => {
  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <CustomControl
          controlClass={HelloWorldControl}
          foo={'43'}
          bar="2"
          position="bottom-left"
        />
      </MapComponent>
    </div>
  );
};

export default App;
