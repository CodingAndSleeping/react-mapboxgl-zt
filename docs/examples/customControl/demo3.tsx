import { Button } from 'antd';
import { Map } from 'mapbox-gl';
import { CSSProperties, FC, useRef } from 'react';
import { CustomControl, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};
const toolContainerStyle: CSSProperties = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  padding: '10px',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

class HelloWorldControl {
  private _map: Map | undefined;
  private _container: HTMLElement | undefined;
  private _options: { foo: string; bar: string };
  constructor(options: { foo: string; bar: string }) {
    this._options = options;
  }
  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.textContent = `${this._options.foo}, ${this._options.bar}`;
    return this._container;
  }

  onRemove() {
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }

  setBackgroundColor(color: string) {
    if (this._container) {
      this._container.style.backgroundColor = color;
    }
  }
}
const App: FC = () => {
  const customeControlRef = useRef<HelloWorldControl | null>(null);

  const onClick = () => {
    if (customeControlRef.current) {
      customeControlRef.current.setBackgroundColor('red');
    }
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <div className="tool-container" style={toolContainerStyle}>
          <Button onClick={onClick} size="small">
            改变控件背景颜色
          </Button>
        </div>
        <CustomControl
          controlClass={HelloWorldControl}
          foo="hello"
          bar="world"
          position="bottom-left"
          onAdd={(control) => (customeControlRef.current = control)}
        />
      </MapComponent>
    </div>
  );
};

export default App;
