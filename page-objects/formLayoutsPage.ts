import { Page } from '@playwright/test'

export class FormLayoutsPage {

  private readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  /**
   * This method fills out the 'Using the Grid' form with user details
   * @param email - should be a valid email
   * @param password - should be a valid password
   * @param optionText - should be 'Option 1' or 'Option 2'
   */
  async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
    const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
    await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email)
    await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
    await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
    await usingTheGridForm.getByRole('button').click()
  }

  /**
   * This method fills out the 'Inline Grid' form with user details
   * @param name - should be a first and a last name
   * @param email - should be a valid email
   * @param rememberMe - should be true or false
   */
  async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
    const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"})
    await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
    await inlineForm.getByRole('textbox', {name: "Email"}).fill(email)
    if (rememberMe)
      await inlineForm.getByRole('checkbox').check({force:true})
    await inlineForm.getByRole('button').click()
  }
}
