var patientStore;   
var searchResultsForm;
var resultsDataView;
Ext.define('RaxaEmr.Registration.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // gives getCreatePatientForm()
            createPatientForm: '#createPatientForm',
            // gives getSearchPatientsForm()
            searchPatientsForm: '#searchPatientsForm',
            raxaEmrViewport: '#raxaEmrViewport'

        }
    },

    init: function () {
        console.log('Main controller init');
        this.initializePatientStore();
        this.printPatientStore();

        this.control({
            'button[action=createPatient]': {
                tap: 'createPatient'
            },
            'button[action=searchPatients]': {
                tap: 'searchPatients'
            }
        });
    },

    initializePatientStore: function () {
        console.log('initializePatientStore');
        //our Store automatically picks up the LocalStorageProxy defined on the
        //Patient model

        //TODO: provide unique value for storeId
        patientStore = Ext.create('Ext.data.Store', {
            model: 'RaxaEmr.Registration.model.Patient',
            storeId: 'patients4321'
        });
        console.log('store initialized');
    },

    addPatientToStore: function () {
        console.log("add patient to patientStore");

        var form = this.getCreatePatientForm();
        var values = form.getValues();

        console.log("form values:");
        console.log(values);
        patientStore.add(values);
        patientStore.add({ firstName: values.firstName, lastName: values.lastName });
        patientStore.sync();

        console.log("patient object:");
        console.log(patientStore.last());
    },

    printPatientStore: function () {
        console.log("loading store...");
        patientStore.load();
        console.log("store loaded");
        console.log("# of records in PatientStore = " + patientStore.getCount());
    },

    // TODO: Remove this. Just a test to validate that Jasmine hooks are working
    testFunction: function () {
        return true;
    },

    /*
    * Takes input from Registration Form and creates a patient in LocalStorage
    */
    createPatient: function () {
        console.log("createPatient");
        this.addPatientToStore();
    },

    /*
    * Takes input from Search Form and returns one exact match
    * TODO: Make search a lot more flexible, to return multiple matches,
    * and imperfect matches
    */
    searchPatients: function () {
        console.log("searchPatients");
        // TODO: patient store must be initialize
        var form = this.getSearchPatientsForm();
        var values = form.getValues();
        console.log(values);
        console.log('First name: ' + values.firstName);
        var query = values.firstName;
        /*var rec = patientStore.findRecord('firstName', query);*/
        patientStore.clearFilter();
        var fistNameFilter = new Ext.util.Filter({ property: 'firstName', value: values.firstName });
        var lastNameFilter = new Ext.util.Filter({ property: 'lastName', value: values.lastName });
        
        var rec = patientStore.filter([nameFilter, lastFilter]);

        console.log(rec);
        //wasPatientFound = (rec === null) ? "No patient found" : "Patient found";
        //TODO: check number of records in store after filter instead of using returned variable (which is always null)
        var hasResults = (rec === null) ? false : true;

        if (hasResults) {
            var viewport = this.getRaxaEmrViewport();

            if (resultsDataView == null) {
                resultsDataView = Ext.create('Ext.DataView', {
                    fullscreen: true,
                    store: patientStore,
                    title: 'Search Results',
                    iconCls: 'list',
                    styleHtmlContent: true,
                    itemTpl: '<div>{lastName}, {firstName}</div>'
                });
                viewport.add(resultsDataView);
            }
            //For some reason, couldnt get dataview to display within a panel... 
            //            if (searchResultsForm == null) {
            //                searchResultsForm = Ext.create('RaxaEmr.Registration.view.SearchResults', { storeId: 'patients4321' });
            //                viewport.add(searchResultsForm);
            //            }

            resultsDataView.setStore(patientStore);
            //resultsDataView.show();

            if (resultsDataView != null) {
                viewport.setActiveItem(resultsDataView);
            }
        }
        else {
            alert("No patients found");
        }




        this.printPatientStore()
        // alert("Searching for patient with first name = '" + query + "'..." + wasPatientFound);
    }
});

