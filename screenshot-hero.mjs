import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Li-Ting/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({
  path: 'C:/Users/Li-Ting/Documents/Projects/claude-test/temporary screenshots/hero-viewport.png',
  clip: { x: 0, y: 0, width: 1440, height: 900 }
});
await browser.close();
console.log('done');
