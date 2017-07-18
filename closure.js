
function outer()
{
  var name = "Amarnath Krishnan";
  var inner = function()
  {
    console.log(name);
  }
  return inner;
}

var result = outer();
result();
