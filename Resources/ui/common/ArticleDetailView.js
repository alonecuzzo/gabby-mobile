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
	
	var titleLabel = Titanium.UI.createLabel({
	    color:'#000',
	    height:'auto',
	    width:'auto',
	    top:150,
	    left: 30,
	    text:'Pick an article!',
	    textAlign:'center',
	    font:{fontSize:20,fontWeight:'bold'},
	    shadowColor:'#eee',shadowOffset:{x:0,y:1}
	});
	
	self.add(titleLabel);
	
	self.updateLabel = function(txt) {
		titleLabel.text = 'you just clicked: ' + txt;
	}
	
	return self;
}

module.exports = ArticleDetailView;