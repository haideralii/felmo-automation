const { Locator, Page } = require("@playwright/test")

exports.LandingPage = class LandingPage {
	constructor(page) {
		this.page = page

		this.dogBtnOption = page.locator(`[data-qa="booking-dog-button"]`)
		this.reasonBookingField = page.locator(`[data-qa="booking-reason-input"]`)
		this.reasonBookingFieldAutoCompleteList = page.locator(`.reason-input .autocomplete div`)
		this.checkAvailabilityBtn = page.locator(`[data-qa="booking-button"]`)

	}
}
