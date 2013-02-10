function ArticleListView(args) {
	var self = Ti.UI.createWindow(args);
	
	var rows = [];
	for(var i = 0; i <= 49; i++) {
		rows.push(Ti.UI.createTableViewRow({title:'Article of the Fashions #' + i, font:{fontWeight: 'bold'}}));
	}
	
	var table = Ti.UI.createTableView({
		data: rows,
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	
	self.add(table);
	
	return self;
}

module.exports = ArticleListView;