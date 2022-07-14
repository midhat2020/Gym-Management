# Copyright (c) 2022, Midhat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymMembership(Document):
	def before_save(self):
		frappe.db.set_value("Gym Member",self.gym_member,"gym_membership",self.name)
		frappe.db.set_value("Gym Member",self.gym_member,"gym_trainer",self.gym_trainer)

