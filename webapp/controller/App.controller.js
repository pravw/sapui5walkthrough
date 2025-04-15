sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  

  return Controller.extend("project2.controller.App", {
      onInit() {
      },
      onShowHello: function(){
     alert("hi iam from controller");
      }
  });
});