// 静态方法可以直接用类名.方法名去调用的，而实例方法是不可以的，必须要用实例才可以去调用
// 静态属性和实例属性同理
var Person=function(){};
// 静态方法
Person.say=function(){
    console.log('I am a Person,I can say.')
}
// 实例方法
Person.prototype.getName=function(name){
    console.log('My name is '+name);
}