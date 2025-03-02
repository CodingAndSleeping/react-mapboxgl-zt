---
nav:
  title: 组件
  order: 2

group:
  title: 地图控件
  order: 2

title: 自定义控件
order: 4

toc: content
---

## 自定义控件

:::info{title=介绍}
本组件库提供了自定义控件功能来实现一些定制化的功能，比如添加一个自定义的按钮或者一个自定义的交互效果。
:::

### 1.基本使用

`CustomeControl` 需要给`controlClass`属性传递一个特定的`Class`，这个 `Class` 需要继承自 `IControl` 类，并实现 `onAdd` 和 `onRemove` 方法。

其中 `onAdd` 方法返回一个 `HTMLElement` 节点，这个节点将会被添加到地图中，`onRemove` 方法则负责移除这个节点。

此外，如果你的组件需要传递`options`参数，可以在构造器中接收一个对象，并通过给组件传递参数的方式来实现。

例如：

```tsx ｜ pure
// 自定义HelloWorld类
class HelloWorldControl {
  private _map: Map | undefined;
  private _container: HTMLElement | undefined;
  private _options: { foo: string; bar: string };
  constructor(options: { foo: string; bar: string }) {
    this._options = options;
  }
  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.textContent = `${this._options.foo}, ${this._options.bar}`;
    return this._container;
  }

  onRemove() {
    this._container?.parentNode?.removeChild(this._container);
    this._map = undefined;
  }
}
```

下面是一个自定义控件的例子：

<code src="../examples/customControl/demo1.tsx" compact="true"></code>

### 2.设置位置

可以通过 `position` 属性设置自定义控件的位置。

<code src="../examples/customControl/demo2.tsx" compact="true"></code>

## API

### CustomControl API

| 参数           | 类型                          | 默认值         | 说明                                                                                                                                                |
| -------------- | ----------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `controlClass` | `{ new (...args: any[]): T }` | -              | 自定义的控制类，必须是一个可实例化的类。可选值有`'left'`,`'right'`,`'top'`,`'bottom'`,`'top-left'`,`'top-right'`,`'bottom-left'`,`'bottom-right'`。 |
| `position`     | `ControlPosition`             | `bottom-right` | 控制控件在地图上的位置。                                                                                                                            |
| `_args`        | -                             | -              | 允许传入其他额外的自定义参数。                                                                                                                      |
