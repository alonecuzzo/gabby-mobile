function GabbbyService(){
	
	var self = {};
	
	var url = 'http://10.1.212.94:3000/users/';
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         // Ti.App.fireEvent('listenGabby', {json: this.responseText});
	         Ti.API.info('gabbby'+ this.responseText);
	         
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
		 client.open("GET", url);
		 client.send();
	
	return self;

}
module.exports= GabbbyService;