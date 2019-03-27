// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi!"+foo();
  function foo(){
	  let map = new Map();
	  map.set('a','--min demo text of webpack！');
	  return map.get('a');
  }
  return greet;
};