const Base = require("@playwright/test")
const { LandingPage } = require("../models/landing-page")
const { PetPage } = require("../models/pet-page")

exports.test = Base.test.extend({
	landingPage: async ({ page }, use) => {
		await use(new LandingPage(page))
	},

	petPage: async ({ page }, use) => {
		await use(new PetPage(page))
	},

})

exports.expect = Base.test.expect
