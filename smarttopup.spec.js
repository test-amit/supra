// tests/smart-topup.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Smart Top-up Flow Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://autofi.supra.com/smart-topup');
  });

  // --- UI VALIDATIONS ---
  test('Smart Top-up page loads with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Smart Top-up' })).toBeVisible();
  });

  test('Flow blocks (Interval, Trigger, Action) are visible', async ({ page }) => {
    await expect(page.getByText('Interval', { exact: true })).toBeVisible();
    await expect(page.getByText('Trigger', { exact: true })).toBeVisible();
    await expect(page.getByText('Action', { exact: true })).toBeVisible();
  });

 

  test('Market price tokens should still be visible on sidebar', async ({ page }) => {
    const tokens = ['SUPRA/USDT', 'BTC/USDT', 'ETH/USDT', 'BNB/USDT',
      'SOL/USDT', 'AVAX/USDT', 'LINK/USDT', 'XRP/USDT', 'ADA/USDT', 'DOGE/USDT'];
    for (const token of tokens) {
      await expect(page.getByText(token, { exact: true })).toBeVisible();
    }
  });

  // --- FUNCTIONAL TESTS ---
  test('Interval block should display default time', async ({ page }) => {
    const intervalText = await page.getByText(/This task executes for/i).textContent();
    expect(intervalText).toContain('hours'); // e.g. "4 hours"
  });

  test('Trigger block should display default threshold value', async ({ page }) => {
    const triggerText = await page.getByText(/drops below/i).textContent();
    expect(triggerText).toMatch(/SUPRA/);
  });

  test('Action block should display default top-up value', async ({ page }) => {
    const actionText = await page.getByText(/Help me top up/i).textContent();
    expect(actionText).toMatch(/SUPRA/);
  });

  // --- NEGATIVE VALIDATION (only if inputs are interactive) ---
  test('Start Time and Connect Wallet button are visible', async ({ page }) => {
    const startTime = page.locator('text=/Start Time/i');
    await expect(startTime).toBeVisible();
  
    // Pick the first matching visible button
    const walletBtn = page.locator('button:has-text("Connect wallet")').first();
    await expect(walletBtn).toBeVisible();
  });
  
  test('Should not allow creating Smart Top-up without wallet connected', async ({ page }) => {
    const walletBtn = page.locator('button:has-text("Connect wallet")').first();
    await walletBtn.click();
  
    const walletModal = page.locator('div[role="dialog"]');
    await expect(walletModal).toBeVisible();
    await expect(walletModal.getByRole('heading', { name: /Connect Wallet/i })).toBeVisible();
  });
  

});
