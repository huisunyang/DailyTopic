// 日常开发对数组的处理是最常见的 但是具体用数组的什么方法合适却是需要考量的


// 1、针对涉及过滤的基本采用filter
let arr1 = ['test','abc','abcd','tgea']
let filterArr = arr1.filter(item => item === 'test')
// console.log('arr1===', arr1) // [ 'test', 'abc', 'abcd', 'tgea' ]
// console.log('filterArr===', filterArr) // [ 'test' ]
let arr2 = [
  {
    label: 'test',
    value: 'test'
  },
  {
    label: 'test1',
    value: 'test1'
  },
  {
    label: 'test2',
    value: 'test2'
  }
]

let filterArr2 = arr2.filter(item => {
  if (item.label === 'test') {
     item.label = 'newTest'
     return item
  }
})  
console.log('arr2====', arr2) // [{ label: 'newTest', value: 'test' },{ label: 'test1', value: 'test1' },{ label: 'test2', value: 'test2' }]
console.log('filterArr2====',filterArr2) // [ { label: 'newTest', value: 'test' } ]
// filter 返回了满足条件的项组成的新数组 注意是一个新数组 而不是仅仅是满足的这个项
// filter 并不会改变原数组
// 如果要对满足条件的项做特殊处理的化 也可采用filter 只是此处的修改 原数组也会被修改 只是原数组的项被修改 原数组的内存地址并未修改 因为是对象 指向的是同一片内存空间

// 2、forEach 基本的遍历处理
let handleArr = arr1.forEach(item => {
  item = item + '1'
  return item
})
console.log(arr1,handleArr) // [ 'test', 'abc', 'abcd', 'tgea' ] undefined
// 没有返回值 不改变原数组
// arr2.forEach(item => {
//   item.label = 'updateVal'
// })
// console.log(arr2) // [{ label: 'updateVal', value: 'test' },{ label: 'updateVal', value: 'test1' },{ label: 'updateVal', value: 'test2' }]
// 原数组的数据发生了改变 其实并没有发生改变 因为原数组中的项是引用数据类型 内存空间的地址并没有发生改变

// 3、map
// let mapArr = arr1.map(item => {
//   item = item + '1'
//   return item
// })
// console.log(arr1,mapArr) // [ 'test', 'abc', 'abcd', 'tgea' ] [ 'test1', 'abc1', 'abcd1', 'tgea1' ]

let mapArr2 = arr2.map(item => {
  item.label = 'mapLabel'
  return item
})
console.log(arr2, mapArr2)
/**
 * [
  { label: 'mapLabel', value: 'test' },
  { label: 'mapLabel', value: 'test1' },
  { label: 'mapLabel', value: 'test2' }
] [
  { label: 'mapLabel', value: 'test' },
  { label: 'mapLabel', value: 'test1' },
  { label: 'mapLabel', value: 'test2' }
]
*/
// 原数组arr2 看似发生了改变 实际并没有改变 还是引用数据类型的原因 内存地址并没有发生改变
// 返回值为更新后的数据

/**
 * 对比forEach来说 map方法有返回值 而forEach不会返回执行结果 而是undefined 其实他们都没有改变原数组 数组的项为对象数据类型的时候 能够改变成功该项的内容 但是这
 * 只是引用数据类型的原因
 * 注意 map返回数据时，遍历数组的长度和返回数组的长度相同  如果没有手动返回 会自动添加值为undefined作为占位
 * 简单来说 forEach针对每一个元素执行提供的函数 map:创建一个新的数组 其中每一个元素由调用数组中的每一个元素执行提供的函数得来
 */