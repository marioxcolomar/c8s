import { test, expect } from "@playwright/test";

test.describe("LengthConverter.vue", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/converter/length");
  });

  test("displays length conversion title", async ({ page }) => {
    await expect(page.locator("h1.title")).toHaveText("Length");
  });

  test("shows correct input labels", async ({ page }) => {
    await expect(page.locator(".input-label").first()).toHaveText(
      "Feet / Inches",
    );
    await expect(page.locator(".input-label").nth(1)).toHaveText(
      "Centimeters / Meters",
    );
  });

  test("shows correct unit symbols left side", async ({ page }) => {
    const symbols = page
      .locator(".input-section")
      .first()
      .locator(".unit-symbol");
    await expect(symbols.first()).toHaveText("ft");
    await expect(symbols.nth(1)).toHaveText("in");
  });

  test("shows correct unit symbols right side", async ({ page }) => {
    const symbols = page
      .locator(".input-section")
      .nth(1)
      .locator(".unit-symbol");
    await expect(symbols.first()).toHaveText("cm");
    await expect(symbols.nth(1)).toHaveText("m");
  });

  test("converts feet and inches to cm and m", async ({ page }) => {
    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await feetInput.fill("6");
    await inchesInput.fill("2");
    await page.waitForTimeout(100);

    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await expect(cmInput).toHaveValue("187.96");
    await expect(mInput).toHaveValue("1.88");
  });

  test("converts feet only to cm and m", async ({ page }) => {
    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();

    await feetInput.fill("1");
    await page.waitForTimeout(100);

    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await expect(cmInput).toHaveValue("30.48");
    await expect(mInput).toHaveValue("0.30");
  });

  test("converts inches only to cm and m", async ({ page }) => {
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await inchesInput.fill("12");
    await page.waitForTimeout(100);

    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await expect(cmInput).toHaveValue("30.48");
    await expect(mInput).toHaveValue("0.30");
  });

  test("converts cm and m to feet and inches", async ({ page }) => {
    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await cmInput.fill("100");
    await page.waitForTimeout(100);

    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await expect(feetInput).toHaveValue("3");
    await expect(inchesInput).toHaveValue("3.37");
  });

  test("converts m only to feet and inches", async ({ page }) => {
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await mInput.fill("1");
    await page.waitForTimeout(100);

    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await expect(feetInput).toHaveValue("3");
    await expect(inchesInput).toHaveValue("3.37");
  });

  test("sums cm and m before converting", async ({ page }) => {
    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await cmInput.fill("50");
    await mInput.fill("0.5");
    await page.waitForTimeout(100);

    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await expect(feetInput).toHaveValue("3");
    await expect(inchesInput).toHaveValue("3.37");
  });

  test("clears all inputs", async ({ page }) => {
    const feetInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .first();
    const inchesInput = page
      .locator(".input-section")
      .first()
      .locator(".large-input")
      .nth(1);

    await feetInput.fill("6");
    await inchesInput.fill("2");
    await page.waitForTimeout(100);

    await page.locator(".clear-btn").click();

    await expect(feetInput).toHaveValue("");
    await expect(inchesInput).toHaveValue("");

    const cmInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .first();
    const mInput = page
      .locator(".input-section")
      .nth(1)
      .locator(".large-input")
      .nth(1);

    await expect(cmInput).toHaveValue("");
    await expect(mInput).toHaveValue("");
  });

  test("navigates back to home", async ({ page }) => {
    await page.locator(".back-btn").click();

    await expect(page).toHaveURL("/");
  });
});