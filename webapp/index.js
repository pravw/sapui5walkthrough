sap.ui.define(
    ["sap/m/Text"],
    function(Text){
        "use strict";

        var oText = new Text({
            text: "Hello World! i am from js",
            width: "100%"
        });
      oText.placeAt("content");

});