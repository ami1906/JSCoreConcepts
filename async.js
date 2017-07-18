
console.log("A");
(function(){
  console.log("B");
  setTimeout(function(){console.log("C");},1000);
  setTimeout(function(){console.log("D");},100);
  setTimeout(function(){console.log("E");},0);
  for(var i=1;i<10;i++)
    console.log("F");
  console.log("G");
})();

(function(){console.log("H");})();
