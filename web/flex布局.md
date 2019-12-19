### flex
盒子:.box
.box{
   display: -webkit-flex; /* Webkit 内核的浏览器 */
  display: flex;
}

主轴的方向
flex-direction: row（默认值） | row-reverse | column | column-reverse;

主轴上的对齐方式
justify-content: flex-start （默认值）| flex-end | center | space-between | space-around;

垂直方向对齐方式
 align-items: flex-start | flex-end | center | baseline | stretch;

多根轴线的对齐方式
align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认值）;


盒子直系元素：.box > *
order
flex-grow
flex-shrink
flex-basis
flex

元素与其他元素不同的垂直对齐方式
align-self:auto （默认值）| flex-start | flex-end | center | baseline | stretch;