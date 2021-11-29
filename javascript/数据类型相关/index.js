/**
 * 数据类型分类
 * 两大类 八种 
 * 基本数据类型：number string boolean null undefined  symbol bigInt
 * 引用数据类型: object array function
 * symbol 常用作唯一的值 Symbol('1') === Symbol('1') 的值是false
 * bigInt用来处理大数据（没遇到过😂）
 */


/**
 * 类型判断
 * typeOf: 一般用于基本数据类型的判断 
 * console.log(typeof 2);               // number
   console.log(typeof true);            // boolean
   console.log(typeof 'str');           // string
   console.log(typeof []);              // object    
   console.log(typeof function(){});    // function
   console.log(typeof {});              // object
   console.log(typeof undefined);       // undefined
   console.log(typeof null);            // object
 * 
 * instanceOf
 * object instanceof constructor
 * instanceof运算符用来检测constructor.prototype是否存在于参数object的原型链上
 * function C() {}
 * var o = new C()
 * o instanceof C; // true 因为Object.getPrototypeOf(o) === C.prototype
 * console.log(2 instanceof Number);                    // false
   console.log(true instanceof Boolean);                // false 
   console.log('str' instanceof String);                // false 
  
   console.log([] instanceof Array);                    // true
   console.log(function(){} instanceof Function);       // true
   console.log({} instanceof Object);                   // true
   instanceof只能正确判断引用数据类型 而不能判断基本数据类型
  

  constructor

  console.log((2).constructor === Number); // true
  console.log((true).constructor === Boolean); // true
  console.log(('str').constructor === String); // true
  console.log(([]).constructor === Array); // true
  console.log((function() {}).constructor === Function); // true
  console.log(({}).constructor === Object); // true

  constructor有两个作用，一是判断数据的类型，二是实例通过constructor对象访问它的构造函数，需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了
  
  function Fn(){};
 
  Fn.prototype = new Array();
  
  var f = new Fn();
  
  console.log(f.constructor===Fn);    // false
  console.log(f.constructor===Array); // true
   




 Object.prototype.toString.call() 利用call借用Object的toString方法
   
   Object.prototype.toString.call(2) // [object Number]
   Object.prototype.toString.call(true) // [object Boolean]
   Object.prototype.toString.call('str') // [object String]
   Object.prototype.toString.call([]) // [object Array]
   Object.prototype.toString.call(function (){}) // [object Function]
   Object.prototype.toString.call({}) // [object Object]
   Object.prototype.toString.cal(undefined) // [object Undefined]
   Object.prototype.toString.call(null) // [object Null]

   同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
  这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，
  根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），
  而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，
  在想要得到对象的具体类型时，应该调用Object原型上的toString方法。


 */
 function myInstanceOf (left,right) {
   // 获得实例对象的原型
   let proto = Object.getPrototypeOf(left)
   // 获得构造函数的prototype对象
   let prototype = right.prototype
   while(true) {
     if (!proto) return false;
     if (proto === prototype) return true;
     // 如果没有找到 就继续从其原型上找 
     proto = Object.getPrototypeOf(proto)
   }
 }
/**
 * typeof null 为object的解释说明
 * “typeof null”错误是 JavaScript 第一个版本的残余。在这个版本中，值以 32 位为单位存储，它由一个小型标签（1-3 位）和值的实际数据组成。类型标签存储在单元的低位中。其中有五个
 * 
 * 000：对象。数据是对对象的引用。
 * 1：整数。数据是一个 31 位有符号整数。
 * 010：双倍。数据是对双浮点数的引用。
 * 100：字符串。数据是对字符串的引用。
 * 110：布尔值。数据是一个布尔值。
 * 也就是说，最低位是任一位，那么类型标签只有一位长。或者它是零，那么类型标签的长度是三位，为四种类型提供两个额外的位。
 * 两个特殊值：
 *    undefined ( JSVAL_VOID ) 是整数 -2 30（整数范围之外的数字）。
 *    null ( JSVAL_NULL ) 是机器码空指针。或者：一个对象类型标签加上一个为零的引用。
 * 
 * 参考链接： https://2ality.com/2013/10/typeof-null.html (需翻墙)
 */



/**
 * 类型转化
 * 注意点：
 *  1、原始值转数字： 
 *    利用Number转化： 如果通过 Number 转换函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 0，如果有一个字符不是数字，结果都会返回 NaN
 *    parseInt(string,radix): 当radix不填写时默认当做十进制处理，但注意10并不是默认值，当字符串以0x开头是会直接处理为16进制
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/**
 * 精度丢失问题
 * 0.1 + 0.2 !== 0.3 
 * 计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和。0.1的二进制是0.0001100110011001100...（1100循环），0.2的二进制是：0.00110011001100...（1100循环），这两个数的二进制都是无限循环的数。
 * 一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循IEEE 754标准，使用64位固定长度来表示，也就是标准的double双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留52位，再加上前面的1，其实就是保留53位有效数字，剩余的需要舍去，遵从“0舍1入”的原则
 * 根据这个原则，0.1和0.2的二进制数相加，再转化为十进制数就是：0.30000000000000004。
 * 
 * 
 * 解决精度丢失问题：
 *    设置一个误差范围，通常称为机器精度（Number.EPSILON）
 *    (0.1+0.2) -0.3 < Number.EPSILON // true
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/**
 * 获得一个安全的undefined值
 * const a = void 0
 */

/**
 * isNaN 和 Number.isNaN函数的区别？
 *  isNaN接收参数后，会尝试将这个参数转化为数字类型，任何不能转化为数值的值都会返回true，传入非数字也会返回true
 *  isNaN('test') // true
 * 
 * Number.isNaN会先判断传入内容是否为数字 ，如果是数字再进行判断，
 * 
 */
 Number.isNaN = function(n) {
  return (
    typeof n === 'number' &&
           window.isNaN(n)
  );
};







