import { test, expect } from "@playwright/test";

test.describe("Converter.vue - Weight", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/converter/weight");
  });

  test("displays weight conversion title", async ({ page }) => {
    await expect(page.locator("h1.title")).toHaveText("Weight");
  });

  test("converts kg to pounds", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await leftInput.fill("1");
    await page.waitForTimeout(100);
    await expect(rightInput).toHaveValue("2.20");
  });

  test("converts pounds to kg", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await rightInput.fill("1");
    await page.waitForTimeout(100);
    await expect(leftInput).toHaveValue("0.45");
  });
});