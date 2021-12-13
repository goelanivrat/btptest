sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("login.login.controller.main", {
			 onInit: function () {
             },
             onLoad: function(){
               var oModel = new sap.ui.model.json.JSONModel("https://reqres.in/api/users?page=2");
               this.getView().setModel(oModel,"user");
            }
		});
	});
