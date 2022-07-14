// Copyright (c) 2022, Midhat and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Locker', {
	refresh: function(frm) {
		frm.set_query("locker",function(){
			return{
				"filters":{
					"status":"Available"
				}
			};
		});
		frm.set_query("member_name",function(){
			return{
				"filters":{
					"locker_opted":0
				}
			}
		})
	}
});
