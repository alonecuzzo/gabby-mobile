function ChatView() {
	var self = Titanium.UI.createWindow({
	  barColor: '#369',
	  title: 'ti',
	  url: 'socket/win_ti.js'
	});
	
	return self;
}

module.exports = ChatView;
