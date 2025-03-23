---
nav:
  title: 快速开始
  order: 1
group:
  title: 基础
  order: 2

title: 快速开始

toc: content
---

## 入门

本组件是基于 `mapboxgl` 开发的，以达到简化地图应用开发的目的，并且本组件的`api`与官方基本保持一致，因此，开发者在使用之前最好对`mapboxgl`的基本用法有一定的了解，具体可以参考[官方文档](https://docs.mapbox.com/mapbox-gl-js/api/)。

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
    href="https://www.unpkg.com/react-mapboxgl-zt@1.0.0/dist/index.css"
  />
  <!-- Import library -->
  <script src="https://www.unpkg.com/react-mapboxgl-zt@1.0.0/dist/index.umd.js"></script>
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

---

:::info{title=提示}
我们建议使用 CDN 引入 react-mapboxgl-zt 的用户在链接地址上锁定版本，以免将来 react-mapboxgl-zt 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
:::

## 示例

下面使用浏览器直接引入的方式展示如何使用 `react-mapboxgl-zt` 创建地图。

:::warning
由于本组件是基于 mapboxgl 开发的，在使用之前需要去[mapboxgl 官网](https://docs.mapbox.com/mapbox-gl-js/api/)注册一个开发者账号，并申请一个`access token`。
:::

**具体代码示例：**

```html | pure
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- ✅ React & ReactDOM (开发版，支持 createRoot) -->
    <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.development.js"></script>
    <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.development.js"></script>

    <!-- ✅ 最新 Babel，支持 React 18 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.3/babel.min.js"></script>
    <!-- ✅ 引入css文件 -->
    <link
      rel="stylesheet"
      href="https://www.unpkg.com/react-mapboxgl-zt@1.0.0/dist/index.css"
    />
    <!--✅ 引入核心库文件 -->
    <script src="https://www.unpkg.com/react-mapboxgl-zt@1.0.0/dist/index.umd.js"></script>

    <title>APP</title>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #root {
        height: 100%;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      // ✅ 引入地图工厂函数
      const { MapFactory } = ReactMap;

      // ✅ 创建地图组件
      const MapComponent = MapFactory({
        accessToken: 'access token',
      });

      function App() {
        return (
          <div style={{ height: '100%', width: '100%' }}>
            {/* ✅ 在 JSX 中使用 MapComponent */}
            <MapComponent />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    </script>
  </body>
</html>
```

**地图展示效果如下：**

<code src="../examples/base/start/hellowolrd.tsx" inline="true"></code>
