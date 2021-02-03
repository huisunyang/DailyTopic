let obj1 = { a: 1,b:4 }
let obj2 = Object.create(obj1,{b:{value: 2}}) 
// console.log(obj2.a)
// console.log(obj2.b)
obj1.a = 3
// console.log(obj2.a) // 3 
//创建一个可写的,可枚举的,可配置的属性p
let obj3 = Object.create({}, {
  p: {
    value: 2,       // 属性值
    writable: true,     //  是否可以重写值
    enumerable: true,   //是否可枚举
    configurable: true  //是否可以修改以上几项配置
  }
})

obj3.p = 3;
console.log('123',Object.keys(obj3)  ) 

/* enumerable属性的影响：
for...in 遍历包括对象原型上的属性
Object.keys()  只能遍历自身属性
JSON.stringify 只能序列化自身属性 */


 Object.keys() // 遍历自身可枚举的属性  不包含原型对象上的
 Object.values() // 遍历自身可枚举的属性值 不包含原型对象上的
Object.keys() // 返回一个给定对象自身可枚举属性的键值对数组


Object.freeze() // 冻结对象是指那些不能添加新的属性，不能修改已有属性的值，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性的对象。也就是说，这个对象永远是不可变的。


const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2); target // {a:1, b:2, c:3}


Object.assign() // 对象合并
Object.assign( target, source, source1 ) 
/* 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。拷贝的属性是有限制的，
只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
*/

