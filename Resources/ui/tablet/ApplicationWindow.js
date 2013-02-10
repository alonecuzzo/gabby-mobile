//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var ArticleListView = require('ui/common/ArticleListView');
	var ArticleDetailView = require('ui/common/ArticleDetailView');
	// var HearstService = require('services/HearstService');
	var GabbbyService = require('services/GabbbyService');
	
	//create
	// var hearstService = new HearstService();
	var gabbbyService = new GabbbyService();
	//alert('asdas');
	// Ti.App.addEventListener('eventHearst', function(e) {
// 		
		// Ti.API.info('our stuff: '+ e.json);
	// });
	
	Ti.App.addEventListener('listenGabbby', function(e){
		//alert(e.json);
		//Ti.API.info('the stuff'+ e.json);
	});
	
	// Ti.API.info('our service var: ' + thing.lolz);
	//alert(stuff);
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#f234ff'
	});
		
	//construct UI
	var articleListView = new ArticleListView({width:300, left:0});
	self.add(articleListView);
	
	var articleDetailView = new ArticleDetailView({backgroundColor:'#c7c7c7', left:0, isOpen:false});
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
