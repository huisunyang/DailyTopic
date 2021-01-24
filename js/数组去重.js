var arr = [1,2,3,4,5,4,5,3,2]
console.log(Array.from(new Set(arr)))

var arr1=[
  {
    "id": "1",
    "name": "王小虎"
  },
  {
    "id": "2",
    "name": "王小虎"
  },
  {
    "id": "3",
    "name": "王小虎"
  },
  {
    "id": "4",
    "name": "赵晓红"
  },
  {
    "id": "5",
    "name": "赵晓红"
  },
  {
    "id": "6",
    "name": "张文霞"
  }
]
function unique (arr, attrName) {
  const res = new Map()
  return arr.filter((a) => !res.has(a[attrName]) && res.set(a[attrName], 1))
}
console.log(unique(arr1,'name'))