import { RasterSourceSpecification } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { MapFactory, RasterLayer } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const source: RasterSourceSpecification = {
    type: 'raster',
    tiles: [
      'https://ahocevar.com/geoserver/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&FORMAT=image%2Fpng&STYLES=&TRANSPARENT=TRUE&LAYERS=topp%3Astates&TILED=true&WIDTH=256&HEIGHT=256&CRS=EPSG%3A3857&BBOX={bbox-epsg-3857}',
    ],
    tileSize: 256,
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent
        zoom={3}
        center={[-102.97148, 37.69099]}
        style={'mapbox://styles/mapbox/light-v11'}
      >
        <RasterLayer id="raster" source={source}></RasterLayer>
      </MapComponent>
    </div>
  );
};

export default App;
