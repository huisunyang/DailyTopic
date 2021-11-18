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



