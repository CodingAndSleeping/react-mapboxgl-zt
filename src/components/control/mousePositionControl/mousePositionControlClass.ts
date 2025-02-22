import { IControl, Map, MapMouseEvent } from 'mapbox-gl';

class MousePositionControlClass implements IControl {
  private _map: Map | null = null;
  private _container: HTMLDivElement | null = null;

  private _decimals: number;

  constructor({ decimals }: { decimals: number }) {
    this._decimals = decimals;
  }

  private _updatePosition(e: MapMouseEvent) {
    if (!this._container) return;
    const lng = e.lngLat.lng.toFixed(this._decimals);
    const lat = e.lngLat.lat.toFixed(this._decimals);
    this._container.innerText = `${lng} , ${lat}`;
  }

  onAdd(map: Map) {
    this._map = map;
    const lng = map.getCenter().lng.toFixed(this._decimals!);
    const lat = map.getCenter().lat.toFixed(this._decimals!);
    this._container = document.createElement('div');
    this._container.classList.add('mapboxgl-ctrl');
    this._container.classList.add('mapboxgl-ctrl-group');
    this._container.classList.add('mapboxgl-ctrl-mouse-position');
    this._container.innerText = `${lng} , ${lat}`;

    this._map.on('mousemove', this._updatePosition.bind(this));

    return this._container;
  }

  onRemove() {
    if (this._map) {
      this._map.off('mousemove', this._updatePosition);
    }
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = null;
    this._container = null;
  }
}

export default MousePositionControlClass;
