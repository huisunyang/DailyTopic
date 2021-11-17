let obj = {
 name: 'chichu',
 age: 25,
 work: 'FE',
 test: Symbol('1')
}
obj.__proto__.hobby = 'coding'
obj.__proto__.study = Symbol('test')
// console.log(obj)
for (let key in obj) {
  // console.log(key, '====', obj[key])
}
// 第一种遍历方式  for...in.. 遍历
// 循环遍历自身和原型链上的可枚举属性

Object.keys(obj).forEach(key => {
  // console.log(key, '=====', obj[key])
})
// 第二种 Object.keys Object.values 
// 返回自身的键/值 集合 不包含原型链上的



Object.getOwnPropertyNames(obj).forEach( key => {
  console.log(key, '=====', obj[key])
})

// 第三种 Object.getOwnPropertyNames 
// 返回自身的键/值 集合 不包含原型链上的