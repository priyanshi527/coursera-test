//Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
    	// Unobstructive event binding
    	document.querySelector("button")
    	.addEventListener("click",function (){
        //call server to get the name
        $ajaxUtils
          .sendGetRequest("/data/name.json",
          	function (res) {
          		var message=
          		  res.firstName + " " + res.lastName
                  if (res.likeIndianfood) {
                  	message+="likes Indian food";
                  }
                  else {
                  	message+="doesn't like Indian food";
                  }
                  message +="and uses ";
                  message +=res.Rollno - 2;
                  message +="for coding.";
                  document.querySelector("#content")
                    .innerHTML="<h2>" + message + "</h2"
           	});
      });
   }
);
