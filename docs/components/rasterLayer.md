---
nav:
  title: 组件
  order: 2
group:
  title: 图层组件
  order: 3

title: 栅格图层
order: 6

toc: content
---

## 栅格图层

:::info{title=介绍}
栅格图层是一种专门用于渲染栅格切片服务的图层。主要的地图服务包括 WMS Layer 和 Tile Layer 等服务。
:::

### 1.Tile Layer

> Tile Layer 是采用预生成的方法，将地图存放在服务器端，然后根据用户提交的不同请求，把相应的地图瓦片发送给客户端

加载 XYZ 服务。

<code src="../examples/rasterLayer/demo1.tsx" compact="true"></code>

### 2.WMS Layer

> WMS 的全称是 Web Map Service，是一种 web 地图服务，是将地理数据添加样式后进行实时出图。

加载 WMS 服务。

<code src="../examples/rasterLayer/demo2.tsx" compact="true"></code>

### 2.设置样式

可以设置图层的透明度、饱和度等样式。

<code src="../examples/rasterLayer/demo3.tsx" compact="true"></code>

## API

### RasterLayer API

| 参数             | 类型                                                          | 默认值                        | 说明                   |
| ---------------- | ------------------------------------------------------------- | ----------------------------- | ---------------------- |
| id               | `string`                                                      | 必填                          | 图层的唯一标识符       |
| source           | `RasterSourceSpecification`                                   | 必填                          | 光栅图层的数据源       |
| maxzoom          | `number`                                                      | `24`                          | 最大缩放级别           |
| minzoom          | `number`                                                      | `0`                           | 最小缩放级别           |
| slot             | `string`                                                      | `-`                           | 该层被分配到的图层槽位 |
| filter           | `ExpressionSpecification`                                     | `-`                           | 过滤表达式             |
| beforeId         | `string`                                                      | `-`                           | 在某个图层之前渲染     |
| visibility       | `'visible' \| 'none'`                                         | `'visible'`                   | 是否可见               |
| brightnessMax    | `number \| ExpressionSpecification`                           | `1`                           | 亮度最大值             |
| brightnessMin    | `number \| ExpressionSpecification`                           | `0`                           | 亮度最小值             |
| color            | `ExpressionSpecification`                                     | `-`                           | 颜色表达式             |
| colorMix         | `[number, number, number, number] \| ExpressionSpecification` | `[0.2126, 0.7152, 0.0722, 0]` | 颜色混合模式           |
| colorRange       | `[number, number] \| ExpressionSpecification`                 | `-`                           | 颜色范围               |
| contrast         | `number \| ExpressionSpecification`                           | `0`                           | 对比度                 |
| emissiveStrength | `number \| ExpressionSpecification`                           | `0`                           | 自发光强度             |
| fadeDuration     | `number \| ExpressionSpecification`                           | `300`                         | 渐隐持续时间（毫秒）   |
| hueRotate        | `number \| ExpressionSpecification`                           | `0`                           | 色相旋转角度           |
| opacity          | `number \| ExpressionSpecification`                           | `1`                           | 不透明度               |
| resampling       | `'linear' \| 'nearest'`                                       | `'linear'`                    | 采样方式               |
| saturation       | `number \| ExpressionSpecification`                           | `0`                           | 饱和度                 |
