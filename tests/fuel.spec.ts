import { test, expect } from "@playwright/test";

test.describe("Converter.vue - Fuel Efficiency", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/converter/fuel");
  });

  test("displays fuel efficiency conversion title", async ({ page }) => {
    await expect(page.locator("h1.title")).toHaveText("Fuel Efficiency");
  });

  test("converts mpg to kpl", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await leftInput.fill("1");
    await page.waitForTimeout(100);
    await expect(rightInput).toHaveValue("0.43");
  });

  test("converts kpl to mpg", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await rightInput.fill("1");
    await page.waitForTimeout(100);
    await expect(leftInput).toHaveValue("2.35");
  });
});