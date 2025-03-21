import { CSSProperties, FC } from 'react';
import { DrawControl, MapFactory } from 'react-mapboxgl-zt';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '25rem',
};

const MapComponent = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTduam9kcjMwMW1xMm1zMjlnY2NjMG5xIn0.9laohD6hYdU8FueniDoJ4g',
});

const App: FC = () => {
  const styles = [
    {
      id: 'highlight-active-points',
      type: 'circle',
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['==', 'meta', 'feature'],
        ['==', 'active', 'true'],
      ],
      paint: {
        'circle-radius': 7,
        'circle-color': '#ff0088',
      },
    },
    {
      id: 'points-are-blue',
      type: 'circle',
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['==', 'meta', 'feature'],
        ['==', 'active', 'false'],
      ],
      paint: {
        'circle-radius': 5,
        'circle-color': '#ff0088',
      },
    },
  ];

  const controls = {
    static: false,
    point: true,
    line_string: false,
    polygon: false,
    trash: true,
    combine_features: false,
    uncombine_features: false,
  };

  return (
    <div className="map-container" style={mapContainerStyle}>
      <MapComponent>
        <DrawControl styles={styles} controls={controls} />
      </MapComponent>
    </div>
  );
};

export default App;
