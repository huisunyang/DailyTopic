//  数组求和
let arr = [1,2,3]
let total = arr.reduce((acc,cur) => {
  return acc + cur
},0)
console.log(total)


// 数组降维
let arr2 = [1,[2],[3,[4,[5]]]]

const flattenDeep = arr => Array.isArray(arr) ? arr.reduce((a,b)=> [...a,...flattenDeep(b)] ,[]) : [arr]


console.log(flattenDeep(arr2))

