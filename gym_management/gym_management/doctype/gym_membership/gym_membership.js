// Copyright (c) 2022, Midhat and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Membership', {		
	from_time: function(frm) {
		
		if (cur_frm.doc.plan_type == "Quarterly"){
			    cur_frm.set_value("months",3)
				cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months));
		}
		else if (cur_frm.doc.plan_type == "Half Year"){
			cur_frm.set_value("months",6)
			cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months))	;
	    }
		else if (cur_frm.doc.plan_type == "Full Year"){
			cur_frm.set_value("months",12)
			cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months));
	    }
		},
		plan_type: function(frm) {	
			if (cur_frm.doc.plan_type == "Quarterly"){
					cur_frm.set_value("months",3)
					cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months));
			}
			else if (cur_frm.doc.plan_type == "Half Year"){
				cur_frm.set_value("months",6)
				cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months))	;
			}
			else if (cur_frm.doc.plan_type == "Full Year"){
				cur_frm.set_value("months",12)
				cur_frm.set_value("to_time", frappe.datetime.add_months(frm.doc.from_time, frm.doc.months));
			}
	
			if(cur_frm.doc.monthly_price){
				cur_frm.set_value("amount",cur_frm.doc.monthly_price * cur_frm.doc.months)	
			}
			},
	gym_plan:function(frm){
		frappe.model.with_doc("Gym Workout Plan",cur_frm.doc.gym_plan, function() {
			var mcd = frappe.model.get_doc("Gym Workout Plan",cur_frm.doc.gym_plan);
			    cur_frm.clear_table("gym_workout_plan_exercise");
				$.each(mcd.gym_workout_plan_exercise, function(i, d) {
				i = cur_frm.add_child("gym_workout_plan_exercise");
				i.exercise = d.exercise;
				i.level = d.level;
					
				
				});
			cur_frm.refresh_field("gym_workout_plan_exercise");
			});
			// var doc = frappe.get_doc('Gym Workout Plan',cur_frm.doc.gym_plan)
			var monthly_price;
			// frappe.msgprint(monthly_price)
			frappe.call({
			async: false,
			method: "frappe.client.get_value",
			args: {
				"doctype": "Gym Workout Plan",
				"filters": {
					'name': frm.doc.gym_plan// where Clause 
				},
				"fieldname": ['monthly_price'] // fieldname to be fetched
			},
			callback: function (res) {
				if (res.message != undefined) {
				var values=res.message;
				monthly_price = values.monthly_price 
				}
			}
		});
	    cur_frm.set_value("monthly_price",monthly_price)
		cur_frm.set_value("amount",monthly_price * cur_frm.doc.months)	
	}	
});	
