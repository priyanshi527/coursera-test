(function () {
var AyushGreeter ={};
AyushGreeter.name = "Ayush";
var greeting = "HI ";
AyushGreeter.sayHi = function (){
	console.log(greeting +AyushGreeter.name);
}
window.AyushGreeter = AyushGreeter;
})(window);