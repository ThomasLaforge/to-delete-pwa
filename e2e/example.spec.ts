import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('Solution', async ({ page }) => {
  await page.locator('#terre').fill('2');
  await page.locator('#solution-btn').click();

  // Expect a title "to contain" a substring.
  await expect(page.locator('#solution')).toHaveText("mortin");
});

test('form constraint', async ({ page }) => {
  await page.locator('#terre').fill('3');
  await expect(page.locator('#terre')).toHaveValue("2");
});