/* BFC的行为：
     闭合浮动
     阻止子元素的margin跑到自己的外面去
     阻止行内块元素以最后一行内容的基线做为自己的基线
     在与浮动元素重叠时，在可能的情况下将自身变窄以避开浮动元素，如果不能变窄（定宽时），则下移
  触发元素bfc的办法：
    overflow: hidden;
    display: flow-root;
    position: absolute;
    float: left/right;

*/