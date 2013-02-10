//Application Window Component Constructor
function ApplicationWindow() {

	//load component dependencies
	var ArticleListView = require('ui/common/ArticleListView');
	var ArticleDetailView = require('ui/common/ArticleDetailView');
	// var HearstService = require('services/HearstService');
	var GabbbyService = require('services/GabbbyService');
		
	var gabbbyService = new GabbbyService();
	gabbbyService.getOrCreateNewUser();
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#f234ff'
	});
	
	//construct UI
	var articleListView = new ArticleListView({width:300, left:0});
	self.add(articleListView);
	
	var articleDetailView = new ArticleDetailView({backgroundColor:'white', left:0, isOpen:false, articleID:3825});
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
	
	Ti.App.addEventListener('onUserGetOrCreation', function(e){
		Ti.App.uid = e.json._id;
	});
	
	articleListView.addEventListener('cellPressed', function(e){
		articleDetailView.animate({
			left: 0,
			duration: 300
		});
		articleDetailView.isOpen = false;
		articleDetailView.updateLabel(e.row.title);
		articleDetailView.updateImage(e.row.image);
		articleDetailView.updateBody(e.row.body);
	});
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
