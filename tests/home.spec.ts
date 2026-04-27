import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows all converter cards", async ({ page }) => {
    const cards = page.locator(".icon-card");
    await expect(cards).toHaveCount(4);
  });

  test("shows length converter card", async ({ page }) => {
    const lengthCard = page
      .locator(".icon-card")
      .filter({ hasText: "Length" })
      .first();
    await expect(lengthCard).toBeVisible();
  });

  test("navigates to length converter", async ({ page }) => {
    await page
      .locator(".icon-card")
      .filter({ hasText: "Length" })
      .first()
      .click();
    await expect(page).toHaveURL("/converter/length");
  });
});