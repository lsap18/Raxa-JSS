Ext.define('RaxaEmr.Registration.view.Viewport', {
    extend: 'Ext.TabPanel',
    id: 'raxaEmrViewport',
    requires: 'RaxaEmr.Registration.view.SearchResults',
	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',

		items: [
		{
			xtype: 'registerpage' // view/Register.js
		},
		{
			xtype: 'searchpage' // view/Search.js
		},
        {
            xtype: 'bmipage' // view/Bmi.js
        }
    ]
	}
});

