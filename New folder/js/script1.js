(function () {
var shanuGreeter = {};//fake namespace as it doesn't have namespaces
shanuGreeter.name="shanu";
var greeting = "hello ";
shanuGreeter.sayHello =function (){
	console.log(greeting +shanuGreeter.name);
}
window.shanuGreeter = shanuGreeter;
})(window);