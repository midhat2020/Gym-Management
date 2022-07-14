// Copyright (c) 2022, Midhat and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Class Booking', {
	refresh: function(frm) {
		frm.set_query("classes",function(){
			return{
				"filters":{
					"is_class":1
				}
			}
		})
	}
});
