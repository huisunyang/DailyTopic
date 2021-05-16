let [a,b] = ['珠峰', 10]
// console.log(a,b)

// 获取数组长度
let { length } = ['珠峰', 10]
// console.log(length)

let { name, age, default:d} = { name: 'zhufeng', age: 10, default: 'xxx'}
// console.log(d)


let [,{address:[,test]}, hobby='hobby'] = [
  {name: 'zf'},
  {age: 10, address: [1,2,3]}
]

// console.log(test, hobby)

