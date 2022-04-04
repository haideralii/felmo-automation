const { test, expect } = require("../fixtures/base")

test.describe("Felmo Automation Tasks", () => {
	test.beforeEach(async ({ page }) => {
		// Go to the starting url before each test.
		await page.goto("/")
		await page.waitForLoadState("networkidle")
	})

	test("UI Automation", async ({ page, landingPage, petPage }) => {
		const visitReason = "Impfung"
		await landingPage.dogBtnOption.first().click()
		await landingPage.reasonBookingField.first().type(visitReason)
		await landingPage.reasonBookingFieldAutoCompleteList.first().click()
		await landingPage.checkAvailabilityBtn.first().click()
		await page.waitForLoadState("networkidle")
		await expect.soft(page).toHaveURL("/termin/buchen")

		// pet page
		const petName = "Tom"
		await petPage.petNameField.type(petName)
		await petPage.petAgeField.click()
		await petPage.petAgeField.click()
		await page.keyboard.press("1")

		// await petPage.selectPetAge.click([force])

		// enter invalid postal code to verify error message displays
		const invalidPostalCode = "1011"
		const correctPostalCode = "10117"
		await petPage.petPostalField.fill(invalidPostalCode)
		await expect.soft(petPage.alertErrorMsg, "Invalid Postal Code Error Message does not displays").toBeTruthy()
		await petPage.petPostalField.fill(correctPostalCode)
		await petPage.chooseDateBtn.click()
		await page.waitForLoadState("networkidle")
		await expect.soft(page).toHaveURL("/termin/buchen")
	})
})

test("API Automation", async ({ request }) => {
	const response = await request.get(`https://reqres.in/api/users?page=2`, {})
	console.log(await response.json())
	await expect(response.status).toBeTruthy()
})
