//var patientStore = Ext.create('Ext.data.Store', {
//	model: "RaxaEmr.Registration.model.Patient"
//});

//var patientSearchResults = new Ext.DataView({
//	store: patientStore,
//	tpl: '<tpl for="."><img src="{firstName}" /></tpl>',
//	collectData: function() {
//		var data = this.callParent(arguments);
//		return Ext.Array.slice(data, 0, 5);
//	}
//});

Ext.define('RaxaEmr.Registration.view.SearchResults', {
    extend: 'Ext.form.Panel',
    id: 'searchPatientsResults',

    config: {
        title: 'Search Results',
        iconCls: 'searchResults',
        styleHtmlContent: true,
        // List takes a store and a template
        items: [{
            xtype: 'dataview',
            fullscreen: true,
            config:
            {
                store: Ext.data.StoreManager.lookup('patientStore'),
                itemTpl: '<div>{lastName}, {firstName}</div>'
            }


    }]

}
});