function ChatPopover(args) {
	var self = Ti.UI.iPad.createPopover({
		width: 250, 
	    height: 100,
	    title: 'Join Conversation'
	});
	
	return self;
}

module.exports = ChatPopover;
