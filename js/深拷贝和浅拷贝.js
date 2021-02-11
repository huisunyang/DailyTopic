// 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。


// 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。


// 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
let obj = {
  a: 1,
  b: 2,
  c: [1,2,3],
  func: function () {
    console.log('test')
  }
}
let obj2 = obj
obj2.a = '123'
console.log('赋值', obj)

function shallowClone(source){
  let newObj = {}
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      newObj[i] = source[i]
    }
  }
  return newObj
}
// let obj3 = shallowClone(obj)
// Object.assign()实现浅拷贝
// let obj3 = Object.assign({},obj)
// lodash实现
var _ = require('lodash')
let obj3 = _.clone(obj)
obj3.a = '456'
// obj3.c[1] = '23'
// console.log('浅拷贝',obj)


function deepclone (obj) {
  if (obj === null) return obj
  if (obj instanceof Date) return obj
  if (obj instanceof RegExp) return obj
  if (typeof obj !== 'object') return obj
  let cloneObj = new obj.constructor()
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepclone(obj[key])
    }
  }
  return cloneObj
}
// let obj4 = deepclone(obj)
// let obj4 = JSON.parse(JSON.stringify(obj))
let obj4 = _.cloneDeep(obj)
obj4.c[1] = '23'
console.log('深拷贝', obj)
console.log('深拷贝', obj4)
