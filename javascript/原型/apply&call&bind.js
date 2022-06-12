Function.prototype.myCall = function (context) {
  context = context? Object(context) : window
  context.fn = this
  let args = [...arguments].slice(1) //获取参数
  let r = context.fn(...args)
  delete context.fn
  return r
}
var obj ={a: 10,  b: 20}
test.myCall(obj, 'a', 'b') // 30

Function.prototype.myApply = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  let args = [...arguments][1]
  if (!args) {
    return context.fn()
  }
  let r = context.fn(...args)
  delete context.fn
  return r
}
function test(key1, key2){
  console.log(this[key1] + this[key2]) 
}
var obj ={a: 10,  b: 20}
test.myApply(obj, ['a','b'])

Function.prototype.bind = function (context) {
  var args = Array.prototype.slice.call(arguments,1)
  self = this
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments)
    var finalArgs = args.concat(innerArgs) // 考虑科里化的影响 需要将参数拼接
    return self.apply(context,finalArgs)
  }
}


// call & apply 实例
/**
 * 1、获取数组里面的最大值和最小值
 * var  numbers = [5, 458 , 120 , -215 ]; 
 * var maxInNumbers = Math.max.apply(Math, numbers),   //458
 * maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
 * 
 * 2、数据类型的判断
 * Object.ptototype.toString.call(args)
 * 
 * 3、伪数组使用数组方法
 * Array.prototype.slice.call(arguments) 
 * 
 * 
 */