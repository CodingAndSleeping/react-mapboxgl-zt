## 入门

本组件是基于 `mapboxgl` 开发的，以达到简化地图应用开发的目的，并且本组件的`api`与官方基本保持一致，因此，开发者在使用之前最好对`mapboxgl`的基本用法有一定的了解，具体可以参考[官方文档](https://docs.mapbox.com/mapbox-gl-js/api/)。

## 文档

- [文档](https://codingandsleeping.github.io/react-mapboxgl-zt/components/map)

## 安装

### 1.使用包管理器

建议使用包管理器进行安装（例如 `npm`、`yarn`、`pnpm` 等），以便可以使用打包工具（例如 `webpack` 或者 `vite` 等）进行打包。

执行以下命令进行安装：

```bash

# 选择一个你喜欢的包管理器

# NPM
$ npm install react-mapboxgl-zt --save

# Yarn
$ yarn add react-mapboxgl-zt

# pnpm
$ pnpm install react-mapboxgl-zt
```

### 2.浏览器直接引入

如果你的项目不使用打包工具，可以直接在浏览器中引入 `cdn` 链接。引入之后就可以在全局使用`ReactMap`变量了

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="https://www.unpkg.com/react-mapboxgl-zt@0.0.8/dist/index.css"
  />
  <!-- Import library -->
  <script src="https://www.unpkg.com/react-mapboxgl-zt@0.0.8/dist/index.umd.js"></script>
</head>
```

同时在引入之前需要引入 `React` 、`ReactDOM` 和 `babel` 这三个库。

```html
<head>
  <!-- Import React -->
  <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.development.js"></script>
  <!-- Import ReactDOM -->
  <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.development.js"></script>
  <!-- Import babel -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.3/babel.min.js"></script>
</head>
```

