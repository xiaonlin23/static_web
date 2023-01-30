# HTML learning through w3school
## DAY01
- `<img>` style inline  <b>priority</b> `<style>` in `<head>` 
- 行内设置的width和height会被样式表改变，单独设置会改变原图比例
- percentage表示的是相对于原图片大小
#### `float` property
图片浮动，变成与内联元素相当的盒子，所以很容易溢出父级盒子；相当于在父级块盒子上浮动（物理意义的`on`）遇到文字会环绕，碰到其他的浮动元素按照各个浮动属性值以及上下层关系排列;
解决方法
- 为父级盒子设置`overflow: auto`
- 为父级盒子设置`display: flow-root`
> 两者的区别就是，`overflow`属性文字溢出的话显示在父级盒子里
> `flow-root`属性文字移除显示在父级盒子外

<img src="https://cdn.jsdelivr.net/gh/xiaonlin23/images/float.png" style="width:50%">

<a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context#%E5%8C%85%E5%90%AB%E5%86%85%E9%83%A8%E6%B5%AE%E5%8A%A8">MDN_web_css_docs</a>
## DAY02
