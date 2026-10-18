// Sayfaların ortak yardımcıları.
const TOPLAM = 99;

// Parametreler ?esma=5 veya #esma=5 biçiminde gelebilir (tek dosya sürümü # kullanır).
const parametreler = new URLSearchParams(location.search);
new URLSearchParams(location.hash.slice(1)).forEach((v, k) => parametreler.set(k, v));

function baglanti(sayfa, ek = {}) {
  const p = new URLSearchParams(ek);
  // Tek dosya sürümünde sayfalar arası geçiş adres çubuğundaki # ile yapılır.
  if (window.TEK_DOSYA) {
    if (sayfa === "arsiv.html") p.set("sayfa", "arsiv");
    return `#${p.toString()}`;
  }
  const q = p.toString();
  return q ? `${sayfa}?${q}` : sayfa;
}
