// Gün hesabı: başlangıç tarihinden bu yana geçen gün, 99'luk döngüde sıraya çevrilir.
// Başlangıcı değiştirmek için yalnızca bu satırı düzenle (ay 1'den başlar).
const BASLANGIC = { yil: 2026, ay: 10, gun: 18 };
const TOPLAM = 99;

// Parametreler ?esma=5 veya #esma=5 biçiminde gelebilir (tek dosya sürümü # kullanır).
const parametreler = new URLSearchParams(location.search);
new URLSearchParams(location.hash.slice(1)).forEach((v, k) => parametreler.set(k, v));

// Başlangıçtan bu yana geçen gün sayısı (1. gün = 0). Test için ?gun=45 kullanılabilir.
function gecenGun() {
  const test = parseInt(parametreler.get("gun"), 10);
  if (!Number.isNaN(test)) return test - 1;
  // Yerel gece yarılarını karşılaştır; Date.UTC yaz saati kaymasını dışarıda tutar.
  const simdi = new Date();
  const bugun = Date.UTC(simdi.getFullYear(), simdi.getMonth(), simdi.getDate());
  const baslangic = Date.UTC(BASLANGIC.yil, BASLANGIC.ay - 1, BASLANGIC.gun);
  return Math.round((bugun - baslangic) / 86400000);
}

// Bugünün esma sırası (1..99). Başlangıçtan önce 0 döner.
function bugununSirasi() {
  const fark = gecenGun();
  return fark < 0 ? 0 : (fark % TOPLAM) + 1;
}

// Kilit yok: isteyen her esmayı açabilir. Günün esması yalnızca ana sayfada ve arşivde öne çıkar.
function acikMi() {
  return true;
}

function baslangicMetni() {
  const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  return `${BASLANGIC.gun} ${aylar[BASLANGIC.ay - 1]} ${BASLANGIC.yil}`;
}

// Test modunda iç bağlantılar ?gun parametresini korusun.
function baglanti(sayfa, ek = {}) {
  const p = new URLSearchParams(ek);
  if (parametreler.has("gun")) p.set("gun", parametreler.get("gun"));
  // Tek dosya sürümünde sayfalar arası geçiş adres çubuğundaki # ile yapılır.
  if (window.TEK_DOSYA) {
    if (sayfa === "arsiv.html") p.set("sayfa", "arsiv");
    return `#${p.toString()}`;
  }
  const q = p.toString();
  return q ? `${sayfa}?${q}` : sayfa;
}
