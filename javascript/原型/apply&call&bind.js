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