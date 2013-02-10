//Application Window Component Constructor
function ApplicationWindow() {
	
	 var url = "http://localhost:3000/users";
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);	    
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
	
	
	//load component dependencies
	var ArticleListView = require('ui/common/ArticleListView');
	var ArticleDetailView = require('ui/common/ArticleDetailView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#f234ff'
	});
	
	//construct UI
	var articleListView = new ArticleListView({width:300, left:0});
	self.add(articleListView);
	
	var articleDetailView = new ArticleDetailView({backgroundColor:'#c7c7c7', left:0, isOpen:false, articleID:3825});
	articleDetailView.addEventListener('toggle', function(e){
		Ti.API.info('open: ' + this.isOpen);
		if(!this.isOpen) {
			this.animate({
				left: 300,
				duration: 300
			});
			this.isOpen = true;
		} else {
			this.animate({
				left: 0,
				duration: 300
			});
			this.isOpen = false;
		}	
	});
	self.add(articleDetailView);
	
	articleListView.addEventListener('cellPressed', function(e){
		articleDetailView.animate({
			left: 0,
			duration: 300
		});
		articleDetailView.isOpen = false;
		articleDetailView.updateLabel(e.row.title);
	});
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
