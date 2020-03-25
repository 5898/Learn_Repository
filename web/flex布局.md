### flex
盒子:.box
```css
.box{
  display: -webkit-flex; /* Webkit 内核的浏览器 */
  display: flex;
}
```

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


flex:1
<===>
{
  flex-grow：1
  flex-shrink：1
  flex-basis：0
}

项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-grow:0(默认值)/1/2/inherit
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-shrink:1(默认值)/0/inherit
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小

定义了在分配多余空间之前，项目占据的主轴空间（main size）
可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间
flex-basis:auto(默认值)

flex:0 1 auto(默认值)/auto (1 1 auto)/none (0 0 auto)

### inline-flex
`display:inline-flex;`对内部元素flex，对外部inline