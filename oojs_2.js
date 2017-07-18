function Rectangle(){
  var test = function(){}
  this.getLength = function(){
    return this.length;
  }

  this.setLength = function(val){
    this.length = val;
  }

  this.getBreadth = function(){
    return this.breadth;
  }

  this.setBreadth = function(val){
    this.breadth = val;
  }
}

Rectangle.prototype.area = function(){
  return this.getLength() * this.getBreadth();
}


var rect = new Rectangle();
rect.setLength(2);
rect.setBreadth(2);
var rectArea = rect.area();
console.log(rectArea);

function Square(){
  Rectangle.call(this);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function(){};

var square = new Square();
square.setLength(10);
square.setBreadth(10);
var squareArea = square.area();
console.log(squareArea);
