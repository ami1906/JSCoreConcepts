
var globalStr = 'I am a Global Scoped Variable';
(function(){
	var str = 'I am a function Scoped Variable';
  console.log(str);
  (function(){
		console.log(globalStr);
  })();
})();
