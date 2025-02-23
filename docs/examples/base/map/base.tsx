import {
  CircleLayer,
  FillLayer,
  FullscreenControl,
  LineLayer,
  MapFactory,
  Marker,
  MousePositionControl,
  NavigationControl,
  Popup,
  ScaleControl,
} from '@react-mapbox';
import {
  MapMouseEvent,
  type GeoJSONSourceSpecification,
  type Map,
} from 'mapbox-gl';
import { useRef, useState } from 'react';
const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});

// Control implemented as ES6 class
class HelloWorldControl {
  _map: Map | undefined;
  _container: HTMLDivElement | undefined;

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.textContent = 'Hello, world';
    return this._container;
  }

  onRemove() {
    this._container!.parentNode!.removeChild(this._container!);
    this._map = undefined;
  }
}
export default function BaseMap() {
  const [imgUrl, setImgUrl] = useState('/imgs/background1.jpg');
  const [icon, setIcon] = useState('/imgs/icon.png');
  const [color, setColor] = useState('#f00');

  const [source, setSource] = useState<GeoJSONSourceSpecification>({
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [113.90310757834482, 22.541427196370165],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [113.91668147739654, 22.52511855694496],
            type: 'Point',
          },
        },
      ],
    },
  });

  const [title, setTitle] = useState('title');

  const scaleControlRef = useRef<mapboxgl.ScaleControl>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const onClick = () => {
    // setColor(color === '#f00' ? '#0f0' : '#f00');

    scaleControlRef.current?.setUnit('nautical');

    setTitle(title === 'title' ? 'title2' : 'title');
    console.log(markerRef.current);

    popupRef.current?.setLngLat([113.90310757834482, 22.541427196370165]);
  };

  const onCircleClick = (e: MapMouseEvent) => {
    popupRef.current?.setLngLat(e.lngLat);
    popupRef.current?.setText(e.lngLat.toString());
  };
  const onMapLoad = (map: Map) => {
    console.log(map);
    // map.on('click', (e) => {
    //   console.log(e);
    // });
  };
  return (
    <div
      style={{
        height: '20rem',
      }}
    >
      <div style={{ height: '80%', border: '1px solid black' }}>
        <MapInstance onMapLoad={onMapLoad}>
          <button
            type="button"
            onClick={onClick}
            style={{
              position: 'absolute',
              zIndex: 1000,
            }}
          >
            改变颜色
          </button>
          <Popup
            ref={popupRef}
            lngLat={[113.90310757834482, 22.541427196370165]}
            onOpen={(e) => console.log(e)}
            onClose={(e) => console.log(e.target.getLngLat())}
          >
            {123213}
            <div
              style={{
                backgroundColor: '#f40',
              }}
            >
              {title}
            </div>
            <div>content</div>
          </Popup>
          <Marker
            ref={markerRef}
            // lngLat={[113.90310757834482, 22.541427196370165]}
            draggable={true}
            onDragEnd={(e) => console.log(e.target.getLngLat())}
          ></Marker>
          {/* <CustomControl
            controlClass={HelloWorldControl}
          ></CustomControl> */}
          <MousePositionControl></MousePositionControl>
          <FullscreenControl></FullscreenControl>
          <ScaleControl ref={scaleControlRef}></ScaleControl>
          <NavigationControl></NavigationControl>
          <CircleLayer
            id="circle"
            color={color}
            opacity={0.5}
            source={{
              type: 'vector',
              url: 'mapbox://mapbox.mapbox-streets-v6',
            }}
            sourceLayer="water"
            onClick={onCircleClick}
          ></CircleLayer>
          <FillLayer
            id="fill"
            color={color}
            source={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      coordinates: [
                        [
                          [113.91050389786739, 22.53917900246715],
                          [113.90865023135945, 22.534556311568096],
                          [113.91828929730542, 22.531131996380907],
                          [113.92343322222297, 22.539179002551137],
                          [113.91050389786739, 22.53917900246715],
                        ],
                      ],
                      type: 'Polygon',
                    },
                  },
                ],
              },
            }}
            imgUrl={imgUrl}
          />
          <LineLayer
            id="line"
            color={color}
            source={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: { a: 1 },
                    geometry: {
                      coordinates: [
                        [113.9086931063199, 22.532889051350935],
                        [113.90725732733108, 22.530536146907636],
                        [113.90813732090567, 22.52642916311092],
                        [113.91818777387965, 22.530792829342246],
                        [113.9174930421097, 22.535498589395118],
                      ],
                      type: 'LineString',
                    },
                  },
                ],
              },
              lineMetrics: true,
            }}
            gradient={undefined}
            width={10}
            onClick={(e: MapMouseEvent) => console.log(e.features)}
          ></LineLayer>

          {/* <RasterLayer
          id="tile"
          source={{
            type: 'raster',
            tiles: [
              'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015',
            ],
            tileSize: 256,
          }}
        ></RasterLayer> */}

          {/* <HeatmapLayer
          id="heatmap"
          source={{
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-streets-v6',
          }}
          sourceLayer="water"
        /> */}
        </MapInstance>
      </div>
    </div>
  );
}
