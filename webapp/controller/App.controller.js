sap.ui.define([
  "sap/ui/core/mvc/Controller"
 

], function(Controller,MessageToast,JSONModel,ResourceModel) {
  "use strict";


  return Controller.extend("project2.controller.App", {

    onOpenDialog: function () {
             this.getOwnerComponent().openHelloDialog();
         }

  });
});