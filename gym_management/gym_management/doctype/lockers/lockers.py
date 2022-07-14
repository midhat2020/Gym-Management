# Copyright (c) 2022, Midhat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Lockers(Document):
	pass
	def before_insert(self):
		number_of_lockers = frappe.db.get_single_value('Gym Settings', 'number_of_lockers')
		count_locker = frappe.db.count("Lockers")
		if count_locker == int(number_of_lockers):
			frappe.throw("No of Locker in Gym Setting is "+number_of_lockers)
		