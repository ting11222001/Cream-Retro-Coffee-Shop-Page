import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Li-Ting/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
const ph = await page.evaluate(() => document.body.scrollHeight);
await page.evaluate(s => window.scrollTo(0, s), ph);
await new Promise(r => setTimeout(r, 500));
await page.screenshot({
  path: path.join(__dirname, 'temporary screenshots', 'final-footer.png'),
  clip: { x: 0, y: ph - 120, width: 1440, height: 120 }
});
await browser.close();
console.log('done');
