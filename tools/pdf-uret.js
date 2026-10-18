#!/usr/bin/env node
// İçeriği hazır olan esmaların PDF'lerini headless Chrome/Edge ile üretir ve pdf/ klasörüne yazar.
// Kullanım:  node tools/pdf-uret.js          (hazır olanların hepsi)
//            node tools/pdf-uret.js 1 2     (yalnızca belirtilen sıralar)
// Not: Yazı tipleri Google Fonts'tan yüklendiği için internet bağlantısı gerekir.

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const { pathToFileURL } = require("url");

const kok = path.resolve(__dirname, "..");
const cikti = path.join(kok, "pdf");

// esmalar.js tarayıcı için yazıldı; burada ayrı bir bağlamda çalıştırıp ESMALAR'ı alıyoruz.
const baglam = { console };
vm.runInNewContext(fs.readFileSync(path.join(kok, "veri", "esmalar.js"), "utf8") + "\nthis.ESMALAR = ESMALAR;", baglam);
const ESMALAR = baglam.ESMALAR;

function tarayiciBul() {
  const adaylar = [
    process.env.CHROME_YOLU,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];
  const bulunan = adaylar.find((a) => a && fs.existsSync(a));
  if (!bulunan) throw new Error("Chrome/Edge bulunamadı. CHROME_YOLU ortam değişkeniyle yol verin.");
  return bulunan;
}

const istenen = process.argv.slice(2).map(Number).filter(Boolean);
const liste = ESMALAR.filter((e) => e.hazir && (istenen.length === 0 || istenen.includes(e.sira)));
if (liste.length === 0) {
  console.log("Üretilecek hazır esma yok.");
  process.exit(0);
}

fs.mkdirSync(cikti, { recursive: true });
const tarayici = tarayiciBul();
const sayfa = pathToFileURL(path.join(kok, "index.html")).href;

for (const e of liste) {
  const dosya = path.join(cikti, `${String(e.sira).padStart(3, "0")}-${e.slug}.pdf`);
  // ?yazdir: gezinme kapalı, tüm slaytlar alt alta.
  const url = `${sayfa}?esma=${e.sira}&yazdir=1`;
  execFileSync(tarayici, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${dosya}`,
    url,
  ], { stdio: "ignore" });
  const kb = Math.round(fs.statSync(dosya).size / 1024);
  console.log(`✓ ${path.basename(dosya)} (${kb} KB)`);
}
