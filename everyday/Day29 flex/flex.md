justify-content: space-evenly; /* 行中的元素在行中的水平位置 */
align-items: stretch; /* 行中的元素在一行中的垂直位置 */
align-content: stretch; /* 所有行在父元素垂直位置，或是父元素中垂直方向额外空间如何分配给行 */
align-self: center; /* 元素自身在行中，交叉轴方向上的摆放 */
flex-basis: 80px; /* 在主轴水平时，它代表宽度，在主轴垂直时，它代表高度，当它不为auto时，总它更优先 */
flex:  auto  ;  /*  在这一个属性上设定 flex-basis flex-grow flex-shrink */

flex-direction 设定主轴方向
flex-wrap 设定交叉轴方向
flex-flow 一个属性设定主轴与交叉轴方向

order 设定元素的展示顺序
gap 设定元素之间及行或列之间的间隔


flex的空间是先近元素自身大小进行折行
折行以后再考虑扩张或收缩，但扩展与收缩一定不会影响子元素在行上分配
扩张以后再考虑额外空间分给margin auto
之后再考虑额外空间通过justify-content来分配
flex子元素不能浮动，设定会无效
flex父元素中的连续的匿名文本会被当成一个flex子元素，但是由于没有元素包裹，所以也无法选中它，所以不能为其设置任何flex样式