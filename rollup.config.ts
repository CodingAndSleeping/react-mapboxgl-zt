import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
export default {
  input: 'src/index.ts',

  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.es.js',
      format: 'es',
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'ReactMap', // 需要为 UMD 格式提供全局变量名称
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'], // 忽略 React 和 ReactDOM
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
      browser: true,
    }),
    typescript({
      // tslib: require.resolve('tslib'), // 强制使用 tslib
    }),
    commonjs(),
    scss(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // ignore(['.dumirc.ts', '.dumi/**/*.ts']),
  ],
};
