import { GeoJSONSourceSpecification, MapMouseEvent } from 'mapbox-gl';
import { CSSProperties, FC } from 'react';
import { LineLayer, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const source: GeoJSONSourceSpecification = {
    type: 'geojson',
    data: '/react-mapboxgl-zt/data/line.geojson',
  };

  const onClick = (e: MapMouseEvent) => {
    alert(`click at ${e.features![0].properties!.name}`);
  };

  const onMouseOver = (e: MapMouseEvent) => {
    console.log(e);
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent zoom={9.5} center={[114.095111, 22.634657]}>
        <LineLayer
          id="circle"
          source={source}
          onClick={onClick}
          onMouseOver={onMouseOver}
          width={5}
        />
      </MapComponent>
    </div>
  );
};

export default App;
