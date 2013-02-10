//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var ArticleListView = require('ui/common/ArticleListView');
	var ArticleDetailView = require('ui/common/ArticleDetailView')
		
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
