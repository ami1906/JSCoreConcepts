
name = "Amarnath";

var name;

console.log(name);


func();
function func(){
  console.log(name);
  var name = "Krishnan";
}


test();

function test(){
  console.log("My name is Amarnath");
}

var test = function(){
  console.log("My name is Krishnan");
}

function test(){
  console.log("My name is Amarnath Krishnan");
}
