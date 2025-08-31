

# Autofi QA Automation (Playwright + JavaScript)

This repository contains end-to-end (E2E) UI automation test scripts for validating **Autofi** web flows using [Playwright](https://playwright.dev/).  
The primary focus is on the following pages:

- [`/`](https://autofi.supra.com/) → **Landing Page**
- [`/smart-topup`](https://autofi.supra.com/smart-topup) → **Smart Top-up Flow**

---

## 📌 Features
- Playwright test suite written in **JavaScript**
- Validates core UI components & flows for **Autofi Landing Page** and **Smart Top-up**
- Parallel execution with Playwright Test Runner
- Includes **UI validations**, **form checks**, and **wallet connection flow**
- Can run headless or headed for debugging

---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/autofi-playwright-tests.git
cd autofi-playwright-tests

2. Install dependencies
npm install

3. Install Playwright browsers
npx playwright install

▶️ Running Tests

Run the full test suite:

npx playwright test


Run in headed mode (for debugging):

npx playwright test --headed


Run only Smart Top-up tests:

npx playwright test tests/smarttopup.spec.js


Generate an HTML report:

npx playwright show-report

✅ Test Coverage
Landing Page (/)

Page loads with correct Autofi branding

Navigation bar items are visible and clickable

Hero section CTA (Get Started, Connect Wallet) is functional

Sidebar tokens / market prices are displayed

Page responsiveness check

Smart Top-up (/smart-topup)

Page loads with Smart Top-up heading

Start Time field is visible

Connect Wallet button is visible and clickable

Wallet connection modal appears

Validation: Cannot proceed without wallet connection

Form elements: Token selection, top-up configuration

Sidebar market data is displayed

Submit flow validation (with/without wallet)

📂 Project Structure
autofi-playwright-tests/
│
├── tests/
│   ├── landing.spec.js        # Landing Page test cases
│   ├── smarttopup.spec.js     # Smart Top-up Page test cases
│
├── playwright.config.js       # Playwright configuration
└── README.md                  # Project documentation

🔍 Example Test
test('Smart Top-up page loads with correct heading', async ({ page }) => {
  await page.goto('https://autofi.supra.com/smart-topup');
  await expect(page.getByRole('heading', { name: /Smart Top-up/i })).toBeVisible();
});

🚀 Tech Stack

Playwright
 (E2E automation)

Node.js (JavaScript)

GitHub Actions (CI/CD ready – optional)
