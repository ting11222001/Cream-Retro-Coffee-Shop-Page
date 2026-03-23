import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Li-Ting/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

const ph = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= ph + 900; y += 300) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await new Promise(r => setTimeout(r, 60));
}
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 2600));

const sections = [
  { name: 'hero',         y: 0,    h: 900 },
  { name: 'menu',         y: 900,  h: 850 },
  { name: 'community',    y: 1700, h: 950 },
  { name: 'testimonials', y: 2650, h: 750 },
  { name: 'visit',        y: 3050, h: 800 },
  { name: 'newsletter',   y: 3850, h: 500 },
];

for (const s of sections) {
  await page.screenshot({
    path: path.join(dir, `final-${s.name}.png`),
    clip: { x: 0, y: s.y, width: 1440, height: s.h }
  });
  console.log(`Saved ${s.name}`);
}

await browser.close();
