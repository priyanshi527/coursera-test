/*console.log("global: message = " + message);
var a = function() {
	var message =" inside a";
	console.log("a: message = " + message);
	function b () {
	console.log("b: message = " + message);
};
	b();
}
a();*/
/*var x;
console.log(x);
if(x == undefined)
{
	console.log("x is undefined")
}
x=5;
if(x== undefined)
{
	console.log("x is undefined")
}
else {
	console.log("x is defined  ")
}
//String Concatenation
var string = "Hello";
string+= " World";
console.log(string + "!");
//math operation
console.log((5+4)/3);
console.log(undefined/5);
function test1 (a) {
	console.log(a/5);
}
test1();
//Equality
var x=4,y=4;
if(x==y)
console.log("x=4 is Equal to y=4");
x="4";
if(x==y){
	console.log("x='4' is Equal to y=4");
}
//Strict Equality
if(x===y){
	console.log("Strict x is  equal to y")
}
else
console.log("Strict x is not equal to y");
// if statement (all false)
if (false || null || undefined || "" || 0 || NaN)
{
	console.log("This won't execute");
}
else{
	console.log("all false");
}
//All true
if (true && "Hello" && 1 && -1 && "false") {
	console.log("ALL True");
}
//curly braces on same line or next....
//Its not a matter of style its syntax for JS
function a()
{
	return//it assumes a semicolon here the semicolon are optional in JS
	{
		name: "shanu"
	};
}
function b() {
	return {
		name:"shanu"// body...
	};
}
console.log(a());
console.log(b());
//for loop
var sum=0;
for(var i=0;i<10;i++){
	console.log(i);
	sum+=i;
}
console.log("Sum = "+sum);
//Default Values
function order(SIDE){
	/*if(SIDE== undefined){
		SIDE="WHATEVER!";
	}
	//instead of above code you can do
	SIDE=SIDE|| "WHATEVER!";
	console.log("manchurian with "+ SIDE);
}
order(" noodeles");
order();
//Object creation
var company = new Object();
company.name="Facebook";
company.ceo = new Object();
company.ceo.firstName =" mark";
company["stock of company"]=110;
console.log(company);
console.log("company ceo is "
	+company.ceo.firstName);
	console.log(company["name"]);
	var stockpropname ="stock of company";
	company.stockpropname=110;
	console.log(company.stockpropname)
	//better way:Object Literal
var Facebook= {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favcolor: "blue"
	},
	$stock:100,
	"stock of company":110
};
console.log(Facebook);
console.log(Facebook.ceo.firstName);
//Functions are called First-Class data Types
//Functions are objects
function multiply(x,y){
	return x*y;
}
//console.log(multiply(5,3));
multiply.version = "v.1.0.0";
//console.log(multiply);
console.log(multiply.version);
function makemultiplier(multiplier) {
	var myfunc=function (x) {
     return multiplier * x;
	};
	return myfunc;
}
var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(10));
var doubleall =makemultiplier(2);
console.log(doubleall(100));
//Passing Functions as arguments
function doOperation(x , operation) {
	return operation(x);
}
var result = doOperation(5, multiplyby3);
console.log(result);
result= doOperation(100,doubleall);
console.log(result);
//pass by value
var a=7;
var b=a;
console.log("a: " +a);
console.log("b: " +b);
b=5;
console.log("after b update:");
console.log("a: " +a);
console.log("b: " +b);
//pass by reference
var a= {x:7};
var b =a;
console.log(a);
console.log(b);
b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);
//pass by reference vs pass by value
function changeprimitive(primvalue) {
	console.log("in changeprimitive...");
	console.log("before:");
	console.log(primvalue);
	primvalue = 5;
	console.log("after:");
	console.log(primvalue);

}
var value=7;
changeprimitive(value);//primvalue=value
console.log("after changeprimitive,arig value:")
console.log(value);

function changeObject(Objvalue){
console.log("in changeObject...");
	console.log("before:");
	console.log(Objvalue);
	Objvalue.x = 5;
	console.log("after:");
	console.log(Objvalue);

}
value={x:7};
changeObject(value);//primvalue=value
console.log("after changeObject,arig value:")
console.log(value);
function test(){
	console.log(this);
	this.myName="shanu";
}
test();
console.log(window.myName);
//function constructors - to point this somewhere else than global window
function Circle (radius) {
  this.radius=radius;
}
 //we should not return any value 
 //this.getArea = function () {
   //return Math.PI * Math.pow(this.radius, 2);
 //};
//}
//proto is same of all the objects of a function
//should not put it inside a funtion
Circle.prototype.getArea = function() {
	// body...
	return Math.PI*Math.pow(this.radius,2)
};
var myCircle = new Circle(10);// new object
console.log(myCircle);
console.log(myCircle.getArea());
var myotherCircle = new Circle(20);
console.log(myotherCircle);
//object literals and "this"
//now this object refers to the new object and not global object
var literalCircle = {
	radius:10,
	getArea: function () {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
			//when this is used inside a nested fuction it starts pointing to the global object 
		    //therefore we use self instead of this
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI*Math.pow(this.radius,2)
	}
};
console.log(literalCircle.getArea());
//Arrays
var array = new Array();
array[0]="Shivam";
array[1]=143;
array[2]= function (name) {
  console.log("Hello " + name);
};	
array[3] = {course: "HTML,CSS & JS"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course)
//Short hand array creation
var names = ["Shiv",
"Shanu",
{name: "Ayush"}];
console.log(names);
//loop over an array
var names=["Shiv","Shanu","Ayush"]
console.log(names);
for (var i = names.length - 1; i >= 0; i--) {
	console.log("hello " +names[i]);
}
names[100]="JIM";
for (var i = names.length - 1; i >= 0; i--) {
	console.log("hello " +names[i]);
}
var names2=["Shiv","Shanu","Ayush"];
var myObj= {
	name: "Shiv",
	course: "HTML/CSS/JS",
	platform: "Coursera",
};
for(var prop in myObj) {
	console.log(prop + ": " +myObj[prop])
}
for(var name in names2){
	console.log("Hello "+names2[name]);
}
names2.greeting = "HI!";
for(var name in names2){
	console.log("Hello "+names2[name]);
}*/
//Closures
function makemultiplier (multiplier) {
	//var multiplier=2
	function b(){
		console.log("multiplier is: "+multiplier);
	}
	b();
	return(
		function (x){
			return multiplier*x;
		}
	);
}
var doubleall=makemultiplier(2);
console.log(doubleall(10));//its own execution env