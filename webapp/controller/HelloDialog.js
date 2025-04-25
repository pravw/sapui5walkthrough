sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"
    // HelloDialog   is represent this file hello dialog.js   It doesn't do anything by itself — it's just a label SAPUI5 uses to identify the code in that file
    return ManagedObject.extend("project1.controller.HelloDialog", {     
        //   oview is main view
        constructor: function (oView) {
            this._oView = oView
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            // create the dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                // load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "project2.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // connect dialog to the root view of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oView.byId("helloDialog").open();
            }
        }
    });
});