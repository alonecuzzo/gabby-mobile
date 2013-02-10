function ArticleListView(args) {
	
	var self = Ti.UI.createWindow(args);
	
	var HearstService = require('services/HearstService');
	
	var hearstService = new HearstService();
	
	Ti.App.addEventListener('eventHearst', function(e) {
		
		//Ti.API.info('our stuff: '+ e.json);
		
		var json = JSON.parse(e.json);
		var rows = [];
		for(var i = 0; i <=json.items.length; i++) {
			var article = json.items[i];
			if(article){
				var artId = article.id;
				Ti.API.info('artId: '+artId);
				rows.push(Ti.UI.createTableViewRow({title:'sosksandak #'+i, font:{fontWeight: 'bold'}}));
			}
		}
		
		var table = Ti.UI.createTableView({
			data: rows,
			selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
		});
		
		self.add(table);
		
		table.addEventListener('click', function(e){
			self.fireEvent('cellPressed', e);
		});
		
	});

	
	
	return self;
}

module.exports = ArticleListView;