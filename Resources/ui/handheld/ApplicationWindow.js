//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	//var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	var textField = Ti.UI.createTextField({
	  	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  	color: '#336699',
	  	top: 10, left: 10,
	  	width: 250, height: 60
	});

	self.add(textField);
	
	var articleId = 15075870;
	var userId = 1234;
	//var urlH = 'http://hearst.api.mashery.com/Article/search?_pretty=1&shape=brief&id='+articleId+'&start=0&total=0&api_key=4mpxekczdccmv22wrf9uqq9j';   
	//alert(urlH);
	
	var url=['http://hearst.api.mashery.com/Article/search?_pretty=1&shape=brief&id='+articleId+'&start=0&total=0&api_key=4mpxekczdccmv22wrf9uqq9j','http://10.1.212.94:3000/articles/'+articleId+'/'+ userId];
	
	//alert('url1:'+url[0]);
	//alert('url2:'+url[1]);
	
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         // Ti.API.info("Received text: " + this.responseText);
	         //alert('here!');
	         var response = JSON.parse(this.responseText);
	         alert(response);
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
	 for (var i=0;i<url.length;i++){
		 var theurl = url[i];
		 alert('theurl: '+ theurl);
		 // Prepare the connection.
		 client.open("GET", theurl);
		 // Send the request.
		 client.send();
	}
	 
	//var urlG = 'http://10.1.212.94:3000/articles/'+articleId+'/'+ userId;
	 	//alert(urlG);
	 		
	/*var clientHearst = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         // Ti.API.info("Received text: " + this.responseText);
	         //alert('here!');
	         var response = JSON.parse(this.responseText);
	         alert(response);
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
	 // Prepare the connection.
	 clientHearst.open("GET", urlG);
	 // Send the request.
	 clientHearst.send();	*/			
		
	//construct UI
	//var firstView = new FirstView();
	//self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
