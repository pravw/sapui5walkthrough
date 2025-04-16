sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"

], function(Controller,MessageToast,JSONModel,ResourceModel) {
  "use strict";


  return Controller.extend("project2.controller.App", {

     

      

      onShowHello: function(){
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // Show message
        MessageToast.show(sMsg);
        MessageToast.show("hello i am message toast");
      },

  });
});