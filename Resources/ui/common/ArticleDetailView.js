function ArticleDetailView(args) {
	var self = Ti.UI.createWindow(args);
	
	var button = Titanium.UI.createButton({
	   title: 'Toggle Menu',
	   top: 10,
	   width: 100,
	   height: 50,
	   left: 10
	});
	button.addEventListener('click',function(e)
	{
	   self.fireEvent('toggle');
	});
	
	self.add(button);
	
	return self;
}

module.exports = ArticleDetailView;