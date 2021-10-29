var sort_py = function(a, b){
  return a.localeCompare(b);
}
var a1 = ["北京", "上海", "南京", "合肥",'a','s', 'hello'];
console.log(a1.sort(sort_py))
// localeCompare排序同时对汉字和英文字母进行排序会出错