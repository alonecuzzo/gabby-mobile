function SharePopover(args) {
	var self = Ti.UI.iPad.createPopover({
		width: 250, 
	    height: 100,
	    title: 'Share'
	});
	
	return self;
}

module.exports = SharePopover;