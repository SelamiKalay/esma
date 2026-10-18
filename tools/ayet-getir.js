#!/usr/bin/env node
// Her esmanın ayet kaynağındaki ("Haşr 59/22", "Vâkıa 56/1-3") Arapça metni ve meali kaynaktan indirip
// veri/ayetler.js dosyasına yazar. Sunumdaki ayet metni elle yazılmaz, yalnızca buradan gelir.
//
// Kaynaklar (AlQuran Cloud API, Tanzil verisi):
//   Arapça metin: quran-simple (Tanzil Project, tanzil.net)
//   Meal:         tr.vakfi     (Türkiye Diyanet Vakfı Meali)
//
// Uzun ayetlerde esmalar.js'de "bolum" verilir: Arapça kısım baş/son kelimelerle kaynaktan kesilir,
// meal parçası ise kaynaktaki mealin birebir bir parçası olmak zorundadır; değilse betik hata verir.
//
// Kullanım: node tools/ayet-getir.js   (internet gerekir)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const kok = path.resolve(__dirname, "..");
const baglam = { console };
vm.runInNewContext(fs.readFileSync(path.join(kok, "veri", "esmalar.js"), "utf8") + "\nthis.ESMALAR = ESMALAR;", baglam);
const ESMALAR = baglam.ESMALAR;

const bekle = (ms) => new Promise((r) => setTimeout(r, ms));

// "59/22" → ["59:22"], "56/1-3" → ["56:1", "56:2", "56:3"]
function ayetAnahtarlari(kaynak) {
  const m = kaynak.match(/(\d+)\/(\d+)(?:-(\d+))?/);
  if (!m) throw new Error(`Ayet kaynağı okunamadı: ${kaynak}`);
  const [, sure, bas, son] = m;
  const out = [];
  for (let a = Number(bas); a <= Number(son || bas); a++) out.push(`${sure}:${a}`);
  return out;
}

// Karşılaştırma için hareke, işaret ve elif türlerini siler.
const sade = (s) =>
  s.replace(/[ً-ٰٟۖ-ۭـ]/g, "").replace(/[ٱأإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").trim();

// Arapça metinden, sade hâli `bas` ile başlayıp `son` ile biten kelime aralığını kaynaktaki haliyle döndürür.
function arapcaBolum(metin, bas, son) {
  const kelimeler = metin.split(/\s+/);
  const sk = kelimeler.map(sade);
  const basK = bas.split(" "), sonK = son.split(" ");
  const esit = (i, parca) => parca.every((p, j) => sk[i + j] === p);
  const i = sk.findIndex((_, k) => esit(k, basK));
  if (i < 0) throw new Error(`Başlangıç bulunamadı: ${bas}`);
  for (let j = i; j < sk.length; j++) {
    if (esit(j - sonK.length + 1, sonK)) return kelimeler.slice(i, j + 1).join(" ");
  }
  throw new Error(`Bitiş bulunamadı: ${son}`);
}

async function sureGetir(sure, deneme = 0) {
  const url = `https://api.alquran.cloud/v1/surah/${sure}/editions/quran-simple,tr.vakfi`;
  await bekle(1500); // sunucunun istek sınırına takılmamak için
  const yanit = await fetch(url);
  if (yanit.status === 429 && deneme < 5) {
    await bekle(10000 * (deneme + 1));
    return sureGetir(sure, deneme + 1);
  }
  if (!yanit.ok) throw new Error(`${url} → ${yanit.status}`);
  const { data } = await yanit.json();
  const [arapca, meal] = data;
  if (arapca.edition.identifier !== "quran-simple" || meal.edition.identifier !== "tr.vakfi") throw new Error("Beklenmeyen edisyon");
  return { arapca: arapca.ayahs, meal: meal.ayahs };
}

(async () => {
  const gerekli = new Set(ESMALAR.flatMap((e) => ayetAnahtarlari(e.ayet.kaynak)));
  const sureler = [...new Set([...gerekli].map((k) => Number(k.split(":")[0])))].sort((a, b) => a - b);
  const ayet = {};
  for (const sure of sureler) {
    const { arapca, meal } = await sureGetir(sure);
    for (const k of gerekli) {
      const [s, a] = k.split(":").map(Number);
      if (s !== sure) continue;
      let ar = arapca[a - 1].text;
      // Tanzil, surelerin ilk ayetinin başına besmeleyi ekler (Fâtiha hariç); ayetin kendisi değildir.
      const ilkDort = ar.split(/\s+/).slice(0, 4);
      if (a === 1 && sure !== 1 && ilkDort.map(sade).join(" ") === "بسم الله الرحمن الرحيم") {
        ar = ar.split(/\s+/).slice(4).join(" ");
      }
      // Baştaki ۞ hizb (bölüm) işaretidir, ayet metnine ait değildir.
      ar = ar.replace(/^۞\s*/, "");
      ayet[k] = { arapca: ar, meal: meal[a - 1].text, no: a };
    }
    process.stdout.write(`${sure} `);
  }

  const metinler = {};
  for (const e of ESMALAR) {
    const ks = ayetAnahtarlari(e.ayet.kaynak);
    // Tam ayetlerin sonuna Mushaf'taki gibi ayet numarası eklenir: ﴿٢٢﴾
    const arapRakam = (n) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
    let arapca = ks.map((k) => `${ayet[k].arapca} ﴿${arapRakam(ayet[k].no)}﴾`).join(" ");
    let meal = ks.map((k) => ayet[k].meal).join(" ");
    const b = e.ayet.bolum;
    if (b) {
      if (ks.length !== 1) throw new Error(`${e.slug}: bölüm yalnızca tek ayette kullanılabilir`);
      if (!meal.includes(b.meal)) throw new Error(`${e.slug}: meal parçası kaynakta birebir yok:\n  ${b.meal}\n  kaynak: ${meal}`);
      arapca = arapcaBolum(ayet[ks[0]].arapca, b.bas, b.son);
      meal = b.meal;
    }
    metinler[e.slug] = { kaynak: e.ayet.kaynak, bolum: Boolean(b), arapca, meal };
  }

  const tarih = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(kok, "veri", "ayetler.js"),
`// Bu dosya tools/ayet-getir.js tarafından üretilir; elle düzenleme.
// Arapça metin: Tanzil Project (quran-simple). Meal: Türkiye Diyanet Vakfı Meali (tr.vakfi).
// Kaynak: api.alquran.cloud, indirildiği tarih: ${tarih}
const AYET_KAYNAGI = { arapca: "Tanzil Project (tanzil.net)", meal: "Türkiye Diyanet Vakfı Meali", tarih: "${tarih}" };
const AYET_METINLERI = ${JSON.stringify(metinler, null, 2)};
`);
  console.log(`\n${Object.keys(metinler).length} esmanın ayeti yazıldı.`);
})().catch((h) => { console.error(h.message || h); process.exit(1); });
