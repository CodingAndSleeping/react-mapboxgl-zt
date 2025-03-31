import { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

export default (api: IApi) => {
  const imgs = fs.readdirSync(
    path.join(__dirname, '../public/previewImgs-mini'),
    'utf-8',
  );
  console.log(imgs);
  const links = imgs.map((img) => ({
    href: `/react-mapboxgl-zt/previewImgs-mini/${img}`,
    rel: 'prefetch',
  }));

  api.addHTMLLinks(() => links);
};
