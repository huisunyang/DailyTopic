var a = 0
var b = async () => {
  a = a + await 10
  console.log('2',a)
  a = (await 10) + a
  console.log('3', a)
}
b()
a++
console.log('1', a)
// await 阻塞代码 也许之后的异步代码并不依赖于前者 但仍然要等待前者完成 导致代码失去了并发性