function ArticleListView(args) {
	
	var self = Ti.UI.createWindow(args);
	
	var articleId, title, image, body;
	var HearstService = require('services/HearstService');
	
	var hearstService = new HearstService();
	
	Ti.App.addEventListener('eventHearst', function(e) {
		
		//Ti.API.info('our stuff: '+ e.json);
		
		var json = JSON.parse(e.json);
		var rows = [];
		for(var i = 0; i <=json.items.length; i++) {
			var article = json.items[i];
			if(article){
				articleId = article.id;
				title = article.title;
				image = article.IMAGE_1_url;
				if (article.body){
					 body = article.body;
				}else body = '';
				//Ti.API.info('article: '+ body);
				rows.push(Ti.UI.createTableViewRow({title:title,height:200,image:image,body:body, font:{fontWeight: 'bold'}}));
				
			}
		}
		
		var table = Ti.UI.createTableView({
			data: rows,
			scrollable:true,
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