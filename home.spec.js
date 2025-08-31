// tests/autofi.spec.js
const { test, expect } = require('@playwright/test');

test.describe('AutoFi on Supra - UI & Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://autofi.supra.com/');
  });

  test('Page title and header validation', async ({ page }) => {
    await expect(page).toHaveTitle(/AutoFi/i);
    await expect(page.getByRole('heading', { name: 'How may I assist you?' })).toBeVisible();
  });

  test('Check navigation elements', async ({ page }) => {
    await expect(page.getByRole('button', { name: /CONNECT WALLET/i })).toBeVisible();
    await expect(page.getByText('Mainnet', { exact: true })).toBeVisible();
  });

  test('Verify available options', async ({ page }) => {
    const options = [
      'Smart Top-up',
      'Smart Withdraw',
      'Limit Order',
      'Stop Loss Order',
      'Trailing Stop Order',
      'TWAP Order',
      'Averaging Down',
      'Limit Order with Oracle Score'
    ];
    for (const opt of options) {
      await expect(page.getByText(opt, { exact: true })).toBeVisible();
    }
  });

 

  test('FAQs and Feedback should be visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'FAQs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Feedback' })).toBeVisible();
  });

  test('Click Smart Top-up and validate popup/modal', async ({ page }) => {
    await page.getByRole('link', { name: /^Smart Top-up/ }).click();
    // Adjust modal locator when you know the exact text
    await expect(page.getByText('Top-up', { exact: false })).toBeVisible();
  });

  test('Connect Wallet button opens wallet modal', async ({ page }) => {
    await page.getByRole('button', { name: /CONNECT WALLET/i }).click();
    await expect(page.getByRole('heading', { name: 'Connect Wallet' })).toBeVisible();
  });

});
