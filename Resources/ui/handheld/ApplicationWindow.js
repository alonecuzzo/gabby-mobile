//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	//var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var HearstService = require('services/HearstService');
	var thing = new HearstService();
	Ti.API.info('our service var: ' + thing.lolz);
	/*var userId = 1234;
	var url=['http://hearst.api.mashery.com/Article/search?_pretty=1&shape=brief&id='+articleId+'&start=0&total=0&api_key=4mpxekczdccmv22wrf9uqq9j','http://10.1.212.94:3000/articles/'+articleId+'/'+ userId];
	
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         // Ti.API.info("Received text: " + this.responseText);
	         //alert('here!');
	         var response = JSON.parse(this.responseText);
	         //alert(response);
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
		 
		 //alert('theurl: '+ theurl);
		 client.open("GET", theurl);
		 client.send();
	}
	 		
	//construct UI
	//var firstView = new FirstView();
	//self.add(firstView);*/
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
