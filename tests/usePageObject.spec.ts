import {test, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import {FormLayoutsPage} from '../page-objects/formLayoutsPage'
import {DatepickerPage} from '../page-objects/datePickerPage'


test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('navigate through pages', async({page}) => {
  const navigateTo = new NavigationPage(page)

  await navigateTo.formLayoutsPage()
  await navigateTo.datepickerPage()
  await navigateTo.smartTablePage()
  await navigateTo.toastrPage()
  await navigateTo.tooltipPage()
})

test('use parametrized login methods', async({page}) => {
  const navigateTo = new NavigationPage(page)
  const onFormsLayoutPage = new FormLayoutsPage(page)
  
  await navigateTo.formLayoutsPage()
  await onFormsLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "test1234", 'Option 1' )
  await onFormsLayoutPage.submitInlineFormWithNameEmailAndCheckbox("John Smith", "John@test.com", true)
})

test('use parametrized datepicker methods', async({page}) => {
  const navigateTo = new NavigationPage(page)
  const onDatepickerPage = new DatepickerPage(page)

  await navigateTo.datepickerPage()
  await onDatepickerPage.selectCommonDatePickerDateFromToday(7)
  await onDatepickerPage.selectDatepickerWithRangeFromToday(2, 5)
})
