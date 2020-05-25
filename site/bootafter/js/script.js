//DOM manipulation
//document object model
//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);
//Event Handling
document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			console.log(event);
	this.textContent="Said it!";
	console.log(this);
	var name=
		document.getElementById("name").value;
	var message = "<h2>Hello " + name+ "!</h2>";
	//this is used to print the content inside the message tag
	//document.getElementById("content").textContent=message;
	//this is used to read the html tags ised in content 
	document.getElementById("content").innerHTML=message;
	 if(name === "student") {
	 	//var title =
	 	  // document.getElementById("title"); or
	 	var title =
	 	   document.querySelector("#title").textContent;
	 	  title+= " & lovin' it!"; 
	 	  var title =
	 	   document.querySelector("h1").textContent=title; 
	 	   // we can use h1 instead of title       
	 }
}
document.querySelector("button")
 .onclick = sayHello;
document.querySelector("body")
  .addEventListener("mousemove",
    function (event){
    	if(event.shiftKey === true){
    	console.log("x: " + event.clientX);
    	console.log("y: " + event.clientY);
    }	
    }
  	);   
}
);
/*function sayHello (event) {
	this.textContent="Said it!";
	console.log(this);
	var name=
		document.getElementById("name").value;
	var message = "<h2>Hello " + name+ "!</h2>";
	//this is used to print the content inside the message tag
	//document.getElementById("content").textContent=message;
	//this is used to read the html tags ised in content 
	document.getElementById("content").innerHTML=message;
	 if(name === "student") {
	 	//var title =
	 	  // document.getElementById("title"); or
	 	var title =
	 	   document.querySelector("#title").textContent;
	 	  title+= " & lovin' it!"; 
	 	  var title =
	 	   document.querySelector("h1").textContent=title; 
	 	   // we can use h1 instead of title       
	 }
}
//Unobstrusive event handling - this means that your html doesn't have to know about your javascript
//document.querySelector("button")
  //.addEventListener("click", sayHello);
document.querySelector("button")
 .onclick = sayHello; */ 