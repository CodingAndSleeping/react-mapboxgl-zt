import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-mapboxgl-zt',
    socialLinks: {
      github: 'https://github.com/CodingAndSleeping/react-mapboxgl-zt',
    },
    logo: '/react-mapboxgl-zt/imgs/logo.svg',
  },

  base: '/react-mapboxgl-zt/',
  publicPath: '/react-mapboxgl-zt/',
  favicons: ['/react-mapboxgl-zt/imgs/logo.svg'],
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  plugins: ['./plugins/prefetchImgs.ts'],
});
