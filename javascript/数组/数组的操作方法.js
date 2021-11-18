// 1、reduce
// 第一个参数 处理函数 称为累计器
// 第二个参数 是当前的值 
// 数组求和
console.log([1,2,3,4].reduce((cur,pre) => cur + pre))
// 数组降维 
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

// 2、splice 删除或替换元素 会修改原数组
// 返回值 如果是删除 返回的是删除的元素组成的数组 如果是添加 返回的是空数组
let arr = [1,2,3,4]
// arr.splice(1,0,'a') //  添加元素
// console.log(arr) // [ 1, 'a', 2, 3, 4 ]

// arr.splice(2,1) // 删除元素
// console.log(arr)

// 3、数组添加元素 
// push 从数组后面添加 改变原数组 返回数组更新后的长度
// unshift 从数组前面添加 改变原数组 返回数组更新后的长度


// 4、数组删除元素
// pop 从数组后面删除  改变原数组 返回删除的元素
// shift 从数组前面删除 改变原数组 返回删除的元素

// 5、includes 判断一个数组是否包含一个指定的值 包含返回true 否则返回false
console.log(arr.includes(2), arr.includes('c')) // true  false

// 6、indexOf lastIndexOf
// indexOf  返回数组中可以找到一个给定元素的第一个索引 如果不存在 则返回-1
// lastIndexOf 返回指定元素在数组中的最后一个索引 不存在返回-1 
// 两者结合使用 可以用于查找数组中的重复元素
function duplicates(arr) {
  var result = [];
     arr.forEach(function(elem){
        if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
            result.push(elem);
        }
     });
     return result;
 }

 