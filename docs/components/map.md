---
nav:
  title: 组件
  order: 2

group:
  title: 地图组件
  order: 1

title: 基础地图

toc: content
---

## 基础地图

:::info{title=介绍}
基础地图组件，提供基础的地图展示功能。`Layer`、`Control`等组件必须作为地图组件的子组件使用，以便获取到地图实例对象。
:::

### 1.基础用法

地图组件必须通过`MapFactory`函数进行创建，需要传入一些基本配置参数，包括`accessToken`、`interactive`等与地图的展示并非相关的参数。具体有哪些参数可以查看[MapFactory 函数的配置项](/components/map#mapfactory-api)一节。

这是一个基础的地图示例，通过传入`accessToken`来创建地图组件：

<code src="../examples/map/demo1.tsx" compact="true"></code></code>

### 2.禁用地图交互

通过给`MapFactory`函数传入`interactive`参数为`false`，可以禁用地图的交互功能，使得地图只能展示静态的地图数据。

<code src="../examples/map/demo2.tsx" compact="true"></code>

### 3.设置地图状态

通过`MapFactory`创建出来的地图组件同样可以传递一些参数，用来设置地图的状态，包括`zoom`、`center`、`bearing`、`pitch`等。具体参数可以查看[地图组件的配置项](/components/map#map-api)一节。

<code src="../examples/map/demo3.tsx" compact="true"></code>

### 4.设置地图样式

用户可以自定义地图样式，通过给地图组件传入`style`参数（参数可以是一个`url`地址，也可以是一个`JSON`对象），即可自定义地图的样式。

<code src="../examples/map/demo4.tsx" compact="true"></code>

> 注意：`style`的标准应该符合`Mapbox`官方标准，不符合可能无法正常展示。 具体配置项和内置样式可以去[Mapbox Styles](https://docs.mapbox.com/mapbox-gl-js/guides/styles/)查看。

### 5.地图事件

地图组件提供了一些事件回调函数，可以监听地图的各种事件变化，包括`load`、`click`、`zoom`等。具体的事件函数和参数可以查看[地图组件的事件回调函数](/components/map#map-event)一节。

<code src="../examples/map/demo5.tsx" compact="true"></code>

### 6.子组件获取地图实例

用户自定义的地图子组件如果想要获取地图实例，可以通过`useContext`获取地图实例,本组件库暴露了`MapContext`对象，因此可以在子组件内部通过`useContext(MapContext)`获取到地图实例。

<code src="../examples/map/demo6.tsx" compact="true"></code>

## API

### MapFactory API

| 参数                           | 类型                                                           | 默认值                 | 描述                                                                  |
| ------------------------------ | -------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------- |
| `accessToken`                  | `string`                                                       | **必填**               | Mapbox 访问令牌，必须提供。                                           |
| `apiUrl`                       | `string`                                                       | -                      | 自定义 Mapbox API 的基础 URL。                                        |
| `antialias`                    | `boolean`                                                      | `false`                | 是否启用抗锯齿。                                                      |
| `attributionControl`           | `boolean`                                                      | `false`                | 是否显示版权归属信息。                                                |
| `bearingSnap`                  | `number`                                                       | `7`                    | 旋转地图时的吸附角度（单位：度）。                                    |
| `boxZoom`                      | `boolean`                                                      | `true`                 | 是否启用框选缩放功能。                                                |
| `clickTolerance`               | `number`                                                       | `3`                    | 点击事件的容错像素范围。                                              |
| `collectResourceTiming`        | `boolean`                                                      | `false`                | 是否收集资源加载时间数据。                                            |
| `config`                       | `Record<string, ConfigSpecification>`                          | `-`                    | 额外的 Mapbox 配置参数。                                              |
| `cooperativeGestures`          | `boolean`                                                      | `false`                | 是否启用协作手势控制。                                                |
| `crossSourceCollisions`        | `boolean`                                                      | `true`                 | 是否跨数据源检测符号冲突。                                            |
| `customAttribution`            | `string \| string[]`                                           | `-`                    | 自定义归属信息。                                                      |
| `doubleClickZoom`              | `boolean`                                                      | `true`                 | 是否启用双击缩放功能。                                                |
| `dragPan`                      | `boolean`                                                      | `true`                 | 是否启用拖拽平移功能。                                                |
| `dragRotate`                   | `boolean`                                                      | `true`                 | 是否启用拖拽旋转功能。                                                |
| `fadeDuration`                 | `number`                                                       | `300`                  | 过渡动画持续时间（单位：毫秒）。                                      |
| `failIfMajorPerformanceCaveat` | `boolean`                                                      | `false`                | 如果存在重大性能问题，是否停止初始化。                                |
| `hash`                         | `boolean \| string`                                            | `false`                | 是否使用 URL 哈希管理地图状态。                                       |
| `interactive`                  | `boolean`                                                      | `true`                 | 是否启用交互功能。                                                    |
| `keyboard`                     | `boolean`                                                      | `true`                 | 是否启用键盘控制功能。                                                |
| `language`                     | `'auto' \| string`                                             | `-`                    | 语言代码，`'auto'` 让 Mapbox 自动识别语言。                           |
| `locale`                       | `object`                                                       | `-`                    | 本地化配置对象。                                                      |
| `localFontFamily`              | `string`                                                       | `-`                    | 本地字体族名称。                                                      |
| `localIdeographFontFamily`     | `string`                                                       | `-`                    | 本地表意文字字体。                                                    |
| `logoPosition`                 | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'`       | Mapbox Logo 位置。                                                    |
| `maxTileCacheSize`             | `number`                                                       | `-`                    | 最大瓦片缓存大小（单位：字节）。                                      |
| `minTileCacheSize`             | `number`                                                       | `-`                    | 最小瓦片缓存大小（单位：字节）。                                      |
| `performanceMetricsCollection` | `boolean`                                                      | `true`                 | 是否收集性能指标。                                                    |
| `pitchWithRotate`              | `boolean`                                                      | `true`                 | 是否允许旋转时更改地图俯仰角。                                        |
| `preserveDrawingBuffer`        | `boolean`                                                      | `false`                | 是否保留 WebGL 绘制缓冲区。                                           |
| `projection`                   | `ProjectionSpecification`                                      | `{ name: 'mercator' }` | 地图投影方式。                                                        |
| `refreshExpiredTiles`          | `boolean`                                                      | `true`                 | 是否刷新过期瓦片。                                                    |
| `renderWorldCopies`            | `boolean`                                                      | `true`                 | 是否重复渲染世界副本。                                                |
| `respectPrefersReducedMotion`  | `boolean`                                                      | `true`                 | 是否遵守用户的 "减少动画" 设置。                                      |
| `scrollZoom`                   | `boolean`                                                      | `true`                 | 是否启用滚轮缩放。                                                    |
| `spriteFormat`                 | `'raster' \| 'icon_set' \| 'auto'`                             | `'auto'`               | Sprite 图片格式（`'raster'` 为光栅图像，`'icon_set'` 为矢量图标集）。 |
| `touchPitch`                   | `boolean`                                                      | `true`                 | 是否启用双指俯仰功能。                                                |
| `touchZoomRotate`              | `boolean`                                                      | `true`                 | 是否启用双指旋转与缩放功能。                                          |
| `trackResize`                  | `boolean`                                                      | `true`                 | 是否自动调整地图大小。                                                |
| `transformRequest`             | `RequestTransformFunction`                                     | `-`                    | 自定义请求处理函数。                                                  |

### Map API

| 参数               | 类型                                   | 默认值                               | 描述                                            |
| ------------------ | -------------------------------------- | ------------------------------------ | ----------------------------------------------- |
| `center`           | `[number, number]`                     | `[113.94, 22.52]`                    | 地图中心坐标 `[lng, lat]`。                     |
| `zoom`             | `number`                               | `10`                                 | 地图缩放级别。                                  |
| `pitch`            | `number`                               | `0`                                  | 地图俯仰角度（单位：度）。                      |
| `bearing`          | `number`                               | `0`                                  | 地图旋转角度（单位：度）。                      |
| `bounds`           | `[[number, number], [number, number]]` | `-`                                  | 地图边界，格式 `[[西经, 南纬], [东经, 北纬]]`。 |
| `fitBoundsOptions` | `CameraOptions & AnimationOptions`     | `-`                                  | 适应 `bounds` 的相机与动画选项。                |
| `maxBounds`        | `LngLatBoundsLike`                     | `-`                                  | 限制地图范围。                                  |
| `maxPitch`         | `number`                               | `85`                                 | 最大俯仰角度。                                  |
| `minPitch`         | `number`                               | `0`                                  | 最小俯仰角度。                                  |
| `maxZoom`          | `number`                               | `22`                                 | 最大缩放级别。                                  |
| `minZoom`          | `number`                               | `0`                                  | 最小缩放级别。                                  |
| `style`            | `string \| StyleSpecification`         | `mapbox://styles/mapbox/streets-v11` | 地图样式 URL 或 `StyleSpecification` 对象。     |
| `className`        | `string`                               | `-`                                  | 自定义 CSS 类名。                               |
| `moveMethod`       | `'flyTo' \| 'easeTo' \| 'jumpTo'`      | `flyTo`                              | 地图移动方式。                                  |
| `cameraOptions`    | `CameraOptions`                        | `-`                                  | 地图相机选项。                                  |
| `animationOptions` | `AnimationOptions`                     | `{}`                                 | 地图动画选项。                                  |
| `onMapLoad`        | `(map: Map) => void`                   | `-`                                  | 地图加载完成时的回调函数。                      |

### Map Event

| 事件名                   | 参数            | 返回值 | 描述                                    |
| ------------------------ | --------------- | ------ | --------------------------------------- |
| `onResize`               | `MapDataEvent`  | `void` | 地图大小发生变化时触发。                |
| `onIdle`                 | `MapDataEvent`  | `void` | 地图完成渲染且无需更新时触发。          |
| `onRemove`               | `MapDataEvent`  | `void` | 地图实例被销毁时触发。                  |
| `onMouseDown`            | `MapMouseEvent` | `void` | 用户按下鼠标按钮时触发。                |
| `onMouseUp`              | `MapMouseEvent` | `void` | 用户释放鼠标按钮时触发。                |
| `onMouseOver`            | `MapMouseEvent` | `void` | 鼠标悬停在地图上时触发。                |
| `onMouseMove`            | `MapMouseEvent` | `void` | 鼠标在地图上移动时触发。                |
| `onMouseEnter`           | `MapMouseEvent` | `void` | 鼠标进入地图容器时触发。                |
| `onMouseLeave`           | `MapMouseEvent` | `void` | 鼠标离开地图容器时触发。                |
| `onMouseOut`             | `MapMouseEvent` | `void` | 鼠标离开地图元素时触发。                |
| `onPreClick`             | `MapMouseEvent` | `void` | 鼠标点击前触发（比 `onClick` 先触发）。 |
| `onClick`                | `MapMouseEvent` | `void` | 用户在地图上单击时触发。                |
| `onDblClick`             | `MapMouseEvent` | `void` | 用户在地图上双击时触发。                |
| `onContextMenu`          | `MapMouseEvent` | `void` | 右键点击地图时触发。                    |
| `onWheel`                | `MapWheelEvent` | `void` | 用户滚动鼠标滚轮时触发。                |
| `onTouchStart`           | `MapTouchEvent` | `void` | 触摸开始时触发（移动端）。              |
| `onTouchEnd`             | `MapTouchEvent` | `void` | 触摸结束时触发（移动端）。              |
| `onTouchMove`            | `MapTouchEvent` | `void` | 触摸移动时触发（移动端）。              |
| `onTouchCancel`          | `MapTouchEvent` | `void` | 触摸取消时触发（移动端）。              |
| `onMoveStart`            | `MapDataEvent`  | `void` | 地图移动开始时触发。                    |
| `onMove`                 | `MapDataEvent`  | `void` | 地图正在移动时触发。                    |
| `onMoveEnd`              | `MapDataEvent`  | `void` | 地图移动结束时触发。                    |
| `onDragStart`            | `MapMouseEvent` | `void` | 用户开始拖拽地图时触发。                |
| `onDrag`                 | `MapMouseEvent` | `void` | 用户拖拽地图时持续触发。                |
| `onDragEnd`              | `MapMouseEvent` | `void` | 用户结束拖拽地图时触发。                |
| `onZoomStart`            | `MapDataEvent`  | `void` | 地图缩放开始时触发。                    |
| `onZoom`                 | `MapDataEvent`  | `void` | 地图缩放时触发。                        |
| `onZoomEnd`              | `MapDataEvent`  | `void` | 地图缩放结束时触发。                    |
| `onRotateStart`          | `MapDataEvent`  | `void` | 地图旋转开始时触发。                    |
| `onRotate`               | `MapDataEvent`  | `void` | 地图旋转时触发。                        |
| `onRotateEnd`            | `MapDataEvent`  | `void` | 地图旋转结束时触发。                    |
| `onPitchStart`           | `MapDataEvent`  | `void` | 地图倾斜开始时触发。                    |
| `onPitch`                | `MapDataEvent`  | `void` | 地图倾斜时触发。                        |
| `onPitchEnd`             | `MapDataEvent`  | `void` | 地图倾斜结束时触发。                    |
| `onBoxZoomStart`         | `MapMouseEvent` | `void` | 用户开始框选缩放时触发。                |
| `onBoxZoomEnd`           | `MapMouseEvent` | `void` | 框选缩放结束时触发。                    |
| `onBoxZoomCancel`        | `MapMouseEvent` | `void` | 框选缩放被取消时触发。                  |
| `onRenderStart`          | `MapDataEvent`  | `void` | 地图开始渲染时触发。                    |
| `onRender`               | `MapDataEvent`  | `void` | 地图每次渲染帧时触发。                  |
| `onError`                | `MapDataEvent`  | `void` | 发生错误时触发。                        |
| `onWebglContextLost`     | `MapDataEvent`  | `void` | WebGL 上下文丢失时触发。                |
| `onWebglContextRestored` | `MapDataEvent`  | `void` | WebGL 上下文恢复时触发。                |
| `onData`                 | `MapDataEvent`  | `void` | 地图数据加载完成时触发。                |
| `onStyleData`            | `MapDataEvent`  | `void` | 地图样式数据加载完成时触发。            |
| `onSourceData`           | `MapDataEvent`  | `void` | 地图源数据加载完成时触发。              |
| `onDataLoading`          | `MapDataEvent`  | `void` | 地图数据开始加载时触发。                |
| `onStyleDataLoading`     | `MapDataEvent`  | `void` | 地图样式数据开始加载时触发。            |
| `onSourceDataLoading`    | `MapDataEvent`  | `void` | 地图源数据开始加载时触发。              |
| `onStyleImageMissing`    | `MapDataEvent`  | `void` | 地图样式中缺失图像时触发。              |
| `onStyleLoad`            | `MapDataEvent`  | `void` | 地图样式加载完成时触发。                |
| `onStyleImportLoad`      | `MapDataEvent`  | `void` | 地图样式导入完成时触发。                |
