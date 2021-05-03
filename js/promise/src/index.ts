// 1 每个promise都有三个状态 pending等待态 resolve标识为成功态 reject标识为失败态
// 2、每个promise需要又一个then方法  传入两个参数 一个是成功的回调 一个是失败的回调
// 3、new Promise会立即执行
// 4、一旦成功就不能失败 一旦失败就不能成功  状态不可逆
// 5、当promise抛出异常后 也会走失败态


// promise的链式调用
// 1、无论是成功还是失败都可以返回结果（1、出错了走错误 2、返回一个普通值（不是promise的值） 就会作为下一次then的成功结果）

// 状态枚举
const enum STATUS {
  pending = 'PENDING',
  fulfilled = 'FULFILLED',
  rejected = 'REJECTED'
}
function resolvePromise(promise2:any,x:any,resolve:any,reject:any) {

}
class Promise {
  status: STATUS
  value: any
  reason: any
  onResolvedCallbacks:Function[]
  onRejectedCallbacks:Function[]
  constructor (executor:(resolve:(value?:any) => void,reject:(reason?:any)=>void) => void) {
    this.status = STATUS.pending // 当前默认状态
    this.value = undefined // 成功原因
    this.reason = undefined // 失败原因
    this.onResolvedCallbacks = [] // 成功回调
    this.onRejectedCallbacks = [] // 失败回调
    const resolve = (value:any) => {
      if (this.status === STATUS.pending){ // 必须是由pending状态开始
        this.status = STATUS.fulfilled
        this.value = value
        // 发布模式
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason:any) => {
      if (this.status === STATUS.pending) {
        this.status = STATUS.rejected
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  
  }
  then(onFulfilled:any, onRejected:any) {
    // 每次调用then都产生一个全新的promise
    let promise2 = new Promise((resolve:any,reject:any) => {
      if (this.status === STATUS.fulfilled) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2,x,resolve,reject)
            // resolve(x) // 用then返回的值 作为下一次then的成功结果
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.status === STATUS.rejected) {
       setTimeout(() => {
        try {
          let x = onRejected(this.reason)
          resolvePromise(promise2,x,resolve,reject)
        } catch (error) {
          reject(error)
        }
       }, 0);
      }
      if (this.status === STATUS.pending) {
        //订阅模式
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2,x,resolve,reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2,x,resolve,reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
      }
    })
    
    return promise2
    
  }
}
let promise = new Promise((resolve:any,reject:any) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
  // resolve('ok')
  // reject('ok')
  // throw new Error('失败')

})
let promise2 = new Promise((resolve:any,reject:any) => {
  resolve('ok')
}).then((data: any) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('xx')
    },1000)
  })
},(err: any) =>{
  return 1
})
promise2.then((data: any) => {
  console.log(data, '1111')
},(err: any) => {
  console.log(err,'222')
})
export default Promise