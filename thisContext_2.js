var obj1 = {
  a: 10,
  b: 20,
  sum: function(){
    console.log(this.a + this.b);
  }
}

var obj2 = {
  a: 5,
  b: 2,
  sum: obj1.sum
}

var a = 1;
var b = 1;
var sum = obj2.sum;

obj1.sum();
obj2.sum();
//sum();
obj1.sum.call(obj2);
