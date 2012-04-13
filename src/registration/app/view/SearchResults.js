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
    extend: 'Ext.Panel',
    id: 'searchPatientsResults',

    config: {
        title: 'Search Results',
        iconCls: 'searchResults',
        styleHtmlContent: true,
        // List takes a store and a template
        storeId: 'patients4321'
        //        items: [{
        //            xtype: 'dataview',
        //            fullscreen: true,
        //            config:
        //            {
        //                store: Ext.data.StoreManager.lookup(this.storeId),
        //                
        //            }
        //        }]

    }//,

//    displayResults: function () {
//        var resultsDataView = Ext.create('Ext.DataView', {
//            fullscreen: true,
//            itemTpl: '<div>{lastName}, {firstName}</div>'
//        });

//        resultsDataView.setStore(Ext.data.StoreManager.lookup(this.storeId));
//        resultsDataView.show();
//        this.add(resultsDataView);
//    }
});