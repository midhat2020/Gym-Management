// Copyright (c) 2022, Midhat and contributors
// For license information, please see license.txt

frappe.ui.form.on('Trainer Feedback', {
	refresh: function(frm) {
		frm.set_query("full_name",function(){
			return{
				"filters":[
					["gym_trainer","!=",""]
				]
			}

		})
	}
});
