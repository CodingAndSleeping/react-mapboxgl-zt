import { useNavigate, usePrefersColor } from 'dumi';
import { FC } from 'react';
import { MapFactory } from 'react-mapboxgl-zt';
import './main.scss';
const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});
interface Props {
  title?: string;
  desc?: string;
}

const Main: FC<Props> = (props) => {
  const navigate = useNavigate();
  const {
    title = 'React-Mapboxgl-Zt',
    desc = '一个基于React和MapboxGl的地图组件库',
  } = props;
  const [color] = usePrefersColor();
  return (
    <div className="main">
      <div className="content">
        <div
          className="title"
          style={{
            color: color === 'dark' ? '#000' : '#fff',
          }}
        >
          {title}
        </div>
        <div
          className="desc"
          style={{
            color: color === 'dark' ? '#000' : '#fff',
          }}
        >
          {' '}
          {desc}
        </div>

        <div
          className="map"
          style={{ backgroundColor: color === 'dark' ? '#ccc' : '#fff' }}
        >
          <MapInstance></MapInstance>
        </div>

        <button
          type="button"
          style={{
            color: color === 'dark' ? '#fff' : '#000',
            background: color === 'dark' ? '#000' : '#fff',
          }}
          onClick={() => navigate('/base/start')}
        >
          Get Started
        </button>
      </div>

      <div className="feature">
        <div className="feature-item">
          <img src="/react-mapboxgl-zt/imgs/react.svg" alt="" />

          <span>一个用于构建 Web 和原生交互界面的库</span>
        </div>
        <div className="feature-item">
          <img src="/react-mapboxgl-zt/imgs/map.svg" alt="" />

          <span>一个用于提供地图数据和地图渲染的库</span>
        </div>

        <div className="feature-item">
          <img src="/react-mapboxgl-zt/imgs/logo.svg" alt="" />

          <span>帮助你快速上手开发地图应用</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
