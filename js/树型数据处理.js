// 树型数据扁平化
let arr = [{
  "id": "1",
  "name": "女装/男装/内衣",
  "parentId": "0",
  "children": [{
      "id": "2",
      "name": "女装",
      "parentId": "1",
      "children": [{
          "id": "6",
          "name": "连衣裙",
          "parentId": "2"
      }, {
          "id": "7",
          "name": "毛呢外套",
          "parentId": "2"
      }, {
          "id": "8",
          "name": "休闲裤",
          "parentId": "2"
      }, {
          "id": "9",
          "name": "牛仔外套",
          "parentId": "2"
      }]
  }, {
      "id": "3",
      "name": "男装",
      "parentId": "1"
  }, {
      "id": "4",
      "name": "童装",
      "parentId": "1"
  }, {
      "id": "5",
      "name": "内衣",
      "parentId": "1"
  }]
}, {
  "id": "10",
  "name": "鞋靴/箱包/配件",
  "parentId": "0"
}]
let res = []
let fn = arr => {
  arr.map(item => {
    res.push(item)
    item.children && item.children.length > 0 ? fn(item.children) : ''
  })
}
fn(arr)
// console.log(res)
// 扁平数据树型话
let dataList = [
  {
    name: 'f0',
    id: '1',
    pid: '0',
  },
  {
    name: 'f01',
    id: '2',
    pid: '1',
  },
  {
    name: 'f02',
    id: '3',
    pid: '1',
  },
  {
    name: 'f021',
    id: '6',
    pid: '3',
  },
  {
    name: 'f021',
    id: '7',
    pid: '6',
  },
  {
    name: 'f40',
    id: '4',
    pid: '0',
  },
  {
    name: 'f41',
    id: '5',
    pid: '4',
  }
];

function setTreeData(source){
  let cloneData = JSON.parse(JSON.stringify(source))      // 对源数据深度克隆
  // console.log(cloneData)
  return  cloneData.filter(father=>{                      // 循环所有项，并添加children属性
      // console.log(father)
      let branchArr = cloneData.filter(child=> father.id == child.pid);   // 返回每一项的子级数组
      // console.log(branchArr)
      branchArr.length>0 ? father.children=branchArr : ''   //给父级添加一个children属性，并赋值
      return father.pid==0;      //返回第一层
  });
}

console.log(setTreeData(dataList))