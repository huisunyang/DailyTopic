let obj = {
  b: 1,
  a: () => {
    setTimeout(() => {
      console.log(this)
    }, 1000);
  }
}
obj.a()

let a = 1
let obj = {
  a: 2,
  b: () => {
    console.log(this.a)
  }
}
obj.b()