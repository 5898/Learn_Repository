### flex
盒子:.box
.box{
  display: -webkit-flex; /* Webkit 内核的浏览器 */
  display: flex;
}

主轴的方向
flex-direction: row（默认值，水平） | row-reverse（水平，从右到左） | column（垂直） | column-reverse（垂直，从下到上）;

主轴上的对齐方式
justify-content: flex-start （默认值，左对齐）| flex-end （右对齐）| center（居中） | space-between（两端对齐）| space-around（均散）;

垂直方向对齐方式
align-items: flex-start（顶端对齐）| flex-end （底端对齐）| center（居中）| baseline | stretch（默认值，如果项目未设置高度或设为auto，将占满整个容器的高度）;

多根轴线的对齐方式
align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认值）;

是否换行
flex-wrap: nowrap（默认值，不换行） | wrap（换行）| wrap-reverse;

盒子直系元素：.box > *
order
flex-grow
flex-shrink
flex-basis
flex

元素与其他元素不同的垂直对齐方式
align-self:auto （默认值）| flex-start | flex-end | center | baseline | stretch;
