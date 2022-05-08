//定义类
function A(){
    this.current1 = '1';
    this.current2 = function() {alert('lm here')};
};
//定义A类的原型
A.prototype={
    former1:1,
    former2(){alert('lm the A\'s prototype')}
}
//调用类
var A = new A();