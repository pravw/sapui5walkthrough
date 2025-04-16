// sap.ui.define(
//     [
//     "sap/ui/core/mvc/XMLView"
//     ],
//     function(XMLView){
//         "use strict";
//         XMLView.create({
//             viewName:"project2.view.App"
//         }).then(function(oView){
//              oView.placeAt("content");
            



//             });
     
// });


sap.ui.define([
    
    "sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name: "project2",
        settings: {
            id: "project2"
        },
        async: true
    }).placeAt("content");

});
