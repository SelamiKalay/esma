#!/usr/bin/env node
// Siteyi tek bir HTML dosyasında birleştirir (CSS, veri ve betikler içine gömülür).
// Kullanım:  node tools/tek-dosya.js [çıktı yolu]
// Varsayılan çıktı: proje klasörünün bir üstündeki esmaülhüsna.html
// PDF'ler gömülmez; tek dosyada "PDF İndir" butonu yazdırma penceresini açar (orada "PDF olarak kaydet").

const fs = require("fs");
const path = require("path");

const kok = path.resolve(__dirname, "..");
const cikti = path.resolve(process.argv[2] || path.join(kok, "..", "esmaülhüsna.html"));
const oku = (p) => fs.readFileSync(path.join(kok, p), "utf8");
const betik = (s) => s.replace(/<\/script/gi, "<\\/script");

// sunum.js ve arsiv.js aynı adlarla üst düzey değişken tanımlıyor; kendi kapsamlarına alınır.
const kapsam = (s) => `(() => {\n${s}\n})();`;

const html = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Esmaül Hüsna</title>
  <meta name="description" content="Her gün 99 esmadan biri, görsellerle zenginleştirilmiş bir sunum olarak.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&display=swap">
  <style>
${oku("css/stil.css")}
  </style>
  <style media="print">
${oku("css/yazdir.css")}
  </style>
</head>
<body>
  <header class="ust-bar">
    <a id="marka" class="marka" href="#">Esmaül Hüsna</a>
    <span id="sayac" class="sayac">–/99</span>
    <nav class="ust-linkler">
      <a id="arsiv-link" href="#sayfa=arsiv">Arşiv</a>
      <a id="bugun-link" class="buton" href="#" hidden>Bugünün Esması</a>
      <a id="pdf-indir" class="buton" href="#">PDF İndir</a>
    </nav>
  </header>

  <main id="sunum-sayfa">
    <div id="sahne" class="sahne"></div>
    <div id="kontroller" class="kontroller" hidden>
      <button id="geri" class="ok" aria-label="Önceki slayt">‹</button>
      <div class="ilerleme"><div id="ilerleme-dolu" class="ilerleme-dolu"></div></div>
      <span id="slayt-no" class="slayt-sayac">1/6</span>
      <button id="ileri" class="ok" aria-label="Sonraki slayt">›</button>
    </div>
    <nav id="esma-gezinme" class="esma-gezinme"></nav>
  </main>

  <main id="arsiv-sayfa" class="arsiv" hidden>
    <h1>Arşiv</h1>
    <p id="ozet" class="arsiv-ozet"></p>
    <div id="izgara" class="izgara"></div>
    <p class="kaynak-notu">Sıralama Tirmizî rivayetine (Diyanet listesi) göredir.</p>
  </main>

  <script>
window.TEK_DOSYA = true;
${betik(oku("veri/esmalar.js"))}
${betik(oku("js/gun.js"))}
${betik(oku("js/desen.js"))}

// Sayfa # ile değiştiğinde yeniden çiz.
addEventListener("hashchange", () => { location.reload(); scrollTo(0, 0); });

if (parametreler.get("sayfa") === "arsiv") {
  document.getElementById("sunum-sayfa").hidden = true;
  document.getElementById("arsiv-sayfa").hidden = false;
  document.getElementById("arsiv-link").hidden = true;
  document.getElementById("pdf-indir").hidden = true;
  document.getElementById("bugun-link").hidden = false;
  document.title = "Arşiv · Esmaül Hüsna";
  ${betik(kapsam(oku("js/arsiv.js")))}
} else {
  ${betik(kapsam(oku("js/sunum.js")))}
}
  </script>
</body>
</html>
`;

fs.writeFileSync(cikti, html);
console.log(`✓ ${cikti} (${Math.round(fs.statSync(cikti).size / 1024)} KB)`);
