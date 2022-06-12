
function foo() {
  getName = function () { console.log (1); };
  return this;
}
foo.getName = function () { console.log(2);};
foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName () { console.log(5);}


function getName () { console.log(5);} // getName声明被覆盖 永远不会执行
var getName;
function foo() {  
  getName = function () { console.log (1); }; // 相当于全局的getName
  return this;
}
foo.getName = function () { console.log(2);}; // foo对象自身的getName
foo.prototype.getName = function () { console.log(3);};// 原型链上的getName
getName = function () { console.log(4);};


foo.getName() // 调用foo自身的getName函数 2
getName() // 调用全局的getName函数 注意此时foo函数还没有调用故foo内部的全局函数还没有赋上值 4
foo().getName() // foo调用 getName被重新赋值 返回window 此时window上的getName 1
getName() // 1
new foo.getName() // 2
new foo().getName() // new foo()创建了一个新的foo实例 它的getName方法需要去原型链上找 3
new new foo().getName() // 3 var obj = new foo() var obj1 = new obj.getName()




// Object.prototype.toString.call(args)的理解
/**
 * 由于每一种类型都把toString方法改写在了自己对应的原型对象上（除了Object未改写），所以说所有对象都有自己的toString方法
 * 利用toString做类型判断的时候 需要调用Object原型上的toString方法，
 * toString方法中的this指向了args
 * 相当于args调用了Object原型链上的toString方法
 */

const Person = {
  fullname () {
    return this.firstname + this.lastname
  }
}
let p = {
  firstname: 'chi',
  lastname: 'chu'
}

console.log(Person.fullname.call(p)) // 此处即为让p去调用Person的fullname方法 fullname方法中的this是指向p的


