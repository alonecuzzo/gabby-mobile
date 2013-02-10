function HearstService(){

	//var self = Ti.
	var self = {};
	
	self.lolz = 'tehlolz';
	
	//self.articles = function() {
		var url ='http://hearst.api.mashery.com/Article/search?keywords=fashion&_pretty=1&shape=full&article_type_id=1&start=0&limit=10&sort=publish_date%2Cdesc&total=0&api_key=4mpxekczdccmv22wrf9uqq9j';
		var response, json;
		
		var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         //Ti.API.info("Received text: " + this.responseText);
         	 //alert('success');
	         Ti.App.fireEvent('eventHearst', {json:this.responseText});
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
		 client.open("GET", url);
		 client.send();
		 
		
		
	//};
	
	// var articleId = 15075870;
	
		
	return self;	
		 
}
module.exports = HearstService;