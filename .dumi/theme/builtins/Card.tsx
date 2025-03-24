import { useNavigate } from 'dumi';
import { FC } from 'react';
import './card.scss';
interface CardProps {
  link: string;
  imgUrl: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

const Card: FC<CardProps> = (props) => {
  const { link, imgUrl, title, width, height } = props;

  const navigate = useNavigate();

  const _width = typeof width === 'number' ? `${width}px` : width;
  const _height = typeof height === 'number' ? `${height}px` : height;
  return (
    <div
      className="card"
      style={{
        width: _width || '48%',
        height: _height || '14rem',
      }}
      onClick={() => navigate(link)}
    >
      <div
        className="card-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
