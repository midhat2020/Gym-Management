# Copyright (c) 2022, Midhat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymLocker(Document):
	pass
	def before_save(self):
		if self.status == "Allocated":
			frappe.db.set_value('Lockers',self.name,'status','Unavailable')
			frappe.db.set_value('Gym Membership',self.member_name,'locker_opted',1)
		