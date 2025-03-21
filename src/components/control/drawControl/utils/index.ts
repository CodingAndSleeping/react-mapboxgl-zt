/**
 * 插入自定义按钮
 * @param container 地图容器
 * @param index 插入的位置索引
 * @param className 标签的类名
 * @param attributes 标签的自定义属性
 * @param onClickFun 点击事件回调函数
 */
export function insertCustmeButton(
  container: HTMLElement,
  index: number,
  className: string,
  attributes: Record<string, string> = {},
  onClickFun: () => void,
) {
  if (container.getElementsByClassName(className).length > 0) {
    return;
  }

  const controlButtons = container.getElementsByClassName(
    'mapbox-gl-draw_ctrl-draw-btn',
  );
  const controlContainter = controlButtons[0].parentElement;

  if (controlContainter) {
    const customeButton = document.createElement('button');
    customeButton.classList.add('mapbox-gl-draw_ctrl-draw-btn', className);
    Object.entries(attributes).forEach(([key, value]) => {
      customeButton.setAttribute(key, value);
    });
    customeButton.onclick = onClickFun;

    const beforeButton = controlContainter.children[index];
    if (beforeButton) {
      controlContainter.insertBefore(customeButton, beforeButton);
    } else {
      controlContainter.appendChild(customeButton);
    }
  }
}
