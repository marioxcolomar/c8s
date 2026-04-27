import { test, expect } from "@playwright/test";

test.describe("Converter.vue - Distance", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/converter/distance");
  });

  test("displays conversion title", async ({ page }) => {
    await expect(page.locator("h1.title")).toHaveText("Distance");
  });

  test("shows correct unit labels", async ({ page }) => {
    await expect(page.locator(".input-label").first()).toHaveText("Kilometers");
    await expect(page.locator(".input-label").nth(1)).toHaveText("Miles");
  });

  test("shows correct unit symbols", async ({ page }) => {
    await expect(page.locator(".unit-symbol").first()).toHaveText("km");
    await expect(page.locator(".unit-symbol").nth(1)).toHaveText("mi");
  });

  test("converts km to miles correctly", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await leftInput.fill("1");
    await page.waitForTimeout(100);
    await expect(rightInput).toHaveValue("0.62");
  });

  test("converts miles to km correctly", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await rightInput.fill("1");
    await page.waitForTimeout(100);
    await expect(leftInput).toHaveValue("1.61");
  });

  test("clears both inputs", async ({ page }) => {
    const leftInput = page.locator(".large-input").first();
    const rightInput = page.locator(".large-input").nth(1);

    await leftInput.fill("100");
    await page.waitForTimeout(100);

    await page.locator(".clear-btn").click();

    await expect(leftInput).toHaveValue("");
    await expect(rightInput).toHaveValue("");
  });

  test("navigates back to home", async ({ page }) => {
    await page.locator(".back-btn").click();

    await expect(page).toHaveURL("/");
  });
});