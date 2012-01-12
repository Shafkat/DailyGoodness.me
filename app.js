var App = new Ext.Application({
    name: 'DailyGoodness',
    useLoadMask: true,
    launch: function () {

        var bottomTabs =  new Ext.TabPanel({
			tabBar: {
				dock: 'bottom',
				ui: 'dark',
				layout: {
					pack: 'center'
				}
			},
			cardSwitchAnimation: {
				type: 'fade',
				cover: 'true'
			},
			defaults: {
				scroll: 'vertical'
			},
			items: [{
				xtype: 'textfield',
				title: 'More Good',
				iconCls: 'star',
				cls: 'card card1',
				//onSelect: function() { alert('hey!'); }
			},
			{
				xtype: 'textfield',
				title: 'About',
				iconCls: 'info',
				cls: 'card card2'
			}]
		});
		
        DailyGoodness.views.subToolbar = new Ext.Toolbar({
            id: 'subToolbar',
            title: '<h1>Even a Smile can be Charity! :)<h1>'
        });
        
        DailyGoodness.views.titleToolbar = new Ext.Toolbar({
            id: 'titleToolbar',
            title: 'DailyGoodness.me'
        });

        DailyGoodness.views.goodnessSubContainer = new Ext.Panel({
            id: 'goodnessSubContainer',
            layout: 'fit',
            html: '<div><center><br /><br /><br />The Goodness goes here...</center></div>',
            height: '71%'
        });
        
        DailyGoodness.views.goodnessContainer = new Ext.Panel({
            id: 'goodnessContainer',
            layout: 'fit',
            dockedItems: [DailyGoodness.views.titleToolbar, DailyGoodness.views.subToolbar, DailyGoodness.views.goodnessSubContainer, bottomTabs]
        });

        DailyGoodness.views.viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardAnimation: 'slide',
            items: [DailyGoodness.views.goodnessContainer]
        });
    }
})
