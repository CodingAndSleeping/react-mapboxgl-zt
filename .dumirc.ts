import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-mapboxgl-zt',
    socialLinks: {
      github: 'https://github.com/CodingAndSleeping/react-mapboxgl-zt',
    },
    logo: '/react-mapboxgl-zt/logo.svg',
  },

  base: '/react-mapboxgl-zt/',
  publicPath: '/react-mapboxgl-zt/',
  favicons: ['/react-mapboxgl-zt/logo.svg'],
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
