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