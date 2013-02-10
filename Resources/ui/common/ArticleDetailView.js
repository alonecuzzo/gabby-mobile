function ArticleDetailView(args) {
	var self = Ti.UI.createWindow(args);
	//need to pass articleID to to instantiate 
	var articleID = args.articleID;
	
	//socket business
	var io = require('socket/socket.io-titanium');
	var socket = io.connect('169.254.10.100:8080');
	
	var chat = socket.of('/chat');
	chat.emit('join', {
      channelId: articleID
    });
	chat.emit('post', 'some lolz matey!!', 'hotness');
	
	
	var ChatPopover = require('ui/common/ChatPopover');
	var SharePopover = require('ui/common/SharePopover');
	
	var chatPopover = new ChatPopover();
	var sharePopover = new SharePopover();
	
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
	
	var chatButton = Titanium.UI.createButton({
	   title: 'Chat',
	   top: 10,
	   width: 100,
	   height: 50,
	   left: 300
	});
	
	self.add(chatButton);
	
	chatButton.addEventListener('click', function(e){
		chatPopover.show({view: chatButton});
	});
	
	var shareButton = Titanium.UI.createButton({
	   title: 'Share',
	   top: 10,
	   width: 100,
	   height: 50,
	   left: 450
	});
	
	self.add(shareButton);
	
	shareButton.addEventListener('click', function(e){
		sharePopover.show({view: shareButton});
	});
	
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
			chat.emit('join', {
	      channelId: txt
	    });
		chat.emit('post', 'state name', 'hotness');
	}
	
	return self;
}

module.exports = ArticleDetailView;