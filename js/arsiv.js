// Tüm İsimler sayfası: 99 kartlık ızgara ve arama.

const kacis = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const izgara = document.getElementById("izgara");
document.getElementById("sayac").textContent = `${TOPLAM} esma`;
document.getElementById("marka").href = baglanti("index.html");
document.getElementById("bugun-link").href = baglanti("index.html");
// Desen değişkeni arşiv alanına verilir; tek dosyada sunumun desenini ezmesin.
izgara.closest("main").style.setProperty("--desen-acik", desenArkaPlan(7, "#B8913A", 0.12));

document.getElementById("ozet").textContent = "Dilediğin esmayı açabilir ya da aşağıdan arayabilirsin.";

izgara.innerHTML = ESMALAR.map((e) => `
  <a class="kart" style="--kart-renk:${e.renk}" href="${baglanti("index.html", { esma: e.sira })}" data-sira="${e.sira}">
    <span class="kart-sira">${e.sira}</span>
    <span class="arapca" lang="ar" dir="rtl">${kacis(e.arapca)}</span>
    <span class="kart-okunus">${kacis(e.okunus)}</span>
  </a>`).join("");

// Arama: şapkalı harf, Türkçe karakter, boşluk, tire ve kesme işareti farkı gözetmez ("rahman" er-Rahmân'ı bulur).
const sadelestir = (s) =>
  s.toLocaleLowerCase("tr")
    .replace(/[âà]/g, "a").replace(/[îıì]/g, "i").replace(/[ûü]/g, "u").replace(/ö/g, "o")
    .replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g")
    .replace(/[^a-z0-9؀-ۿ]/g, "")
    .replace(/[ً-ٰٟ]/g, ""); // Arapça harekeler
const aramaMetni = ESMALAR.map((e) => sadelestir(`${e.okunus} ${e.arapca} ${e.anlam_kisa}`));

const arama = document.getElementById("arama");
const sonucYok = document.getElementById("sonuc-yok");
const kartlar = [...izgara.children];

arama.addEventListener("input", () => {
  const q = sadelestir(arama.value.trim());
  let gorunen = 0;
  kartlar.forEach((kart, i) => {
    const uyar = !q || (/^\d+$/.test(q) ? ESMALAR[i].sira === Number(q) : aramaMetni[i].includes(q));
    kart.hidden = !uyar;
    if (uyar) gorunen++;
  });
  sonucYok.hidden = gorunen > 0;
});

// Enter ile ilk sonucu aç.
arama.addEventListener("keydown", (ev) => {
  if (ev.key !== "Enter") return;
  const ilk = kartlar.find((k) => !k.hidden);
  if (ilk) ilk.click();
});
