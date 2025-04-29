sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment" 
  
  ], function(Controller,MessageToast,JSONModel,ResourceModel,Fragment) {
    "use strict";
  
  
    return Controller.extend("project2.controller.HeloPanel ", {
  
        onShowHello: function(){
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // Show message
          MessageToast.show(sMsg);
  
        },
      
         onOpenDialog : function () {
          debugger;
          // this.byId("helloDialog").close();
          this.getOwnerComponent().openHelloDialog();
      
        }


  
    });
  });