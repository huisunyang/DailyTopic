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




// parseInt的第二个参数表示进位数
