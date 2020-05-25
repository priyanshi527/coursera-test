//Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
    	// Unobstructive event binding
    	document.querySelector("button")
    	.addEventListener("click",function (){
           // var self = this;
            //var name = "";
             
            // call server to get the name
            $ajaxUtils.sendGetRequest("/data/name.txt",
            	function (request) {
            		//self.name = request.responseText;
            		var name = request.responseText;
            	document.querySelector("#content")
             .innerHTML="<h2>Hello " + name + "!";
	
            	});
            
            });
    }
);