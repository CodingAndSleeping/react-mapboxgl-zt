import { DrawCustomMode } from '@mapbox/mapbox-gl-draw';

const StaticMode: DrawCustomMode = {
  onSetup() {
    this.setActionableState({
      trash: false,
      combineFeatures: false,
      uncombineFeatures: false,
    });
    return {};
  },
  toDisplayFeatures(state, geojson, display) {
    display(geojson);
  },
};

export default StaticMode;
