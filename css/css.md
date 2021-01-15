### 盒子模型
标准盒子模型 content-box 
怪异盒子模型（ie盒子模型） border-box
w3c标准盒子模型中 属性width,height只包含content,不包含border和padding
怪异盒子模型中，属性width,height包含content、padding和border

手动更改盒子模型：设置box-sizing的值

### 居中问题
1、水平居中
    非块级元素  利用text-align:center实现
    ```
    .container {
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 0;
    }
    .box {
      display: inline-block;
      width: 500px;
      height: 400px;
      background-color: pink;
    }
    ```
    块级元素    margin:0 auto;

    绝对定位实现
    ```
    div {
      position: absolute;
      width: 300px;
      height: 300px;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: pink; /*方便看效果*/
    }
    ```
2、水平垂直居中
    利用transform
    ```
    div {
      position: absolute; /*相对定位或绝对定位均可*/
      width: 500px;
      height: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: pink; /*方便看效果*/
    }
    ```
    利用flex布局
    ```
    /*利用flex布局实际使用时应考虑兼容性*/
    .container {
      display: flex;
      align-items: center; /*垂直居中*/
      justify-content: center; /*水平居中*/
    }
    .containerdiv {
      width: 100px;
      height: 100px;
      background-color: pink; /*方便看效果*/
    }
    ```
    利用text-align:center; vertical-align:middle
    ```
    .container {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 0;
      white-space: nowrap;
      overflow: auto;
    }
    .container::after {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    .box {
      display: inline-block;
      width: 500px;
      height: 400px;
      background-color: pink;
      white-space: normal;
      vertical-align: middle;
    }
    ```
### 高度塌陷
  父元素包含的子元素脱离了文档流，且父元素没有设置高度，父元素的高度就会塌陷为零，这就是高度塌陷
  解决：
    1、直接给父盒子设置高度
    2、设置父盒子overflow:hidden
    3、额外标签法（父盒子的最后添加一个块级元素，给块级元素设置clear:both）
    4、伪元素清除法
    
  
### 外边距重叠
  外边距重叠是指两个或多个盒子（可能相邻也有可能嵌套）的相邻边界重合在一起而形成一个单一的边界
  解决：
    1、给父盒子设置一个border-top(相当于给父盒子设置一个钢板)
    2、给父盒子设置一个padding-top(相当于给父盒子设置一个泡沫)
    3、给父盒子设置一个overflow:hidden
    4、设置浮动
    5、display:inline-block