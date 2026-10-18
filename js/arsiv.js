// Arşiv: 99 kartlık ızgara. Açılmış esmalar tıklanabilir, gelecektekiler kilitli.

const kacis = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const bugunSira = bugununSirasi();
document.getElementById("sayac").textContent = `${bugunSira}/${TOPLAM}`;
document.getElementById("marka").href = baglanti("index.html");
document.getElementById("bugun-link").href = baglanti("index.html");
document.documentElement.style.setProperty("--desen-acik", desenArkaPlan(7, "#B8913A", 0.12));

const acikSayisi = ESMALAR.filter((e) => acikMi(e.sira)).length;
document.getElementById("ozet").textContent =
  bugunSira === 0
    ? `Yolculuk ${baslangicMetni()} tarihinde başlıyor.`
    : `${acikSayisi} esma açıldı, ${TOPLAM - acikSayisi} esma sırasını bekliyor.`;

document.getElementById("izgara").innerHTML = ESMALAR.map((e) => {
  const acik = acikMi(e.sira);
  const ic = `
    <span class="kart-sira">${e.sira}</span>
    <span class="arapca" lang="ar" dir="rtl">${kacis(e.arapca)}</span>
    <span class="kart-okunus">${kacis(e.okunus)}</span>
    ${acik ? "" : `<span class="kilit" aria-label="Kilitli">🔒</span>`}`;
  const sinif = `kart${acik ? "" : " kilitli"}${e.sira === bugunSira ? " bugun" : ""}`;
  const stil = `style="--kart-renk:${e.renk}"`;
  return acik
    ? `<a class="${sinif}" ${stil} href="${baglanti("index.html", { esma: e.sira })}">${ic}</a>`
    : `<div class="${sinif}" ${stil} aria-disabled="true">${ic}</div>`;
}).join("");
