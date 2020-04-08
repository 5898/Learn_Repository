#### :not选择器

tr:not(:first-child):not(:last-child){}

button:not([class*=" el-icon-"]):not([class^=el-icon-]){}

### fit-content
div 宽度根据文字内容自适应宽
```css
div{
  width: fit-content;
}
```

### min-content
外层容器{
  width:min-content
}
采用宽度最小的子元素 作为外层容器的宽度
和display:inline-block区别：display:inline-block虽然也具有收缩特性，但宽度随最大长度长的那一个（同时不超过可用宽度）
```css
width: max/min-content;
```