const { Locator, Page } = require("@playwright/test")

exports.PetPage = class PetPage {
	constructor(page) {
		this.page = page

		this.petNameField = page.locator(`[data-qa="input-name-of-pet"]`)
		this.petAgeField = page.locator(`[data-qa="animal-age-selector"]`)
		this.selectPetAge = page.locator(`[data-qa="animal-age-selector"] option[value="2"]`)

		this.petPostalField = page.locator(`[data-qa="booking-zip-input"]`)
		this.alertErrorMsg = page.locator(`[data-qa="error-postal-code"]`)
		this.chooseDateBtn = page.locator(`[data-qa="booking-choose-button"]`)
	}

}
