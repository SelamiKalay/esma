// Ana sayfa: günün (veya ?esma=N ile seçilen) esmasını 6 slaytlık sunum olarak gösterir.
// Tek dosya sürümünde sayfa yenilenmeden başka esmaya geçmek için window.sunumAc kullanılır.

const kacis = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const pad3 = (n) => String(n).padStart(3, "0");
const pdfYolu = (e) => `pdf/${pad3(e.sira)}-${e.slug}.pdf`;

// Başlangıçtan önce açılırsa ilk esma gösterilir.
const bugunSira = bugununSirasi() || 1;
const yazdirModu = parametreler.has("yazdir");

const sahne = document.getElementById("sahne");
const sayac = document.getElementById("sayac");
const pdfButon = document.getElementById("pdf-indir");
const kontroller = document.getElementById("kontroller");
const ilerleme = document.getElementById("ilerleme-dolu");
const slaytNo = document.getElementById("slayt-no");
document.getElementById("arsiv-link").href = baglanti("arsiv.html");
document.getElementById("marka").href = baglanti("index.html");

// Açık olan sunumun durumu; klavye, dokunma ve PDF dinleyicileri bir kez kurulur ve bunu okur.
let liste = [];
let aktif = 0;
let acikEsma = null;

function mesajGoster(baslik, metin, ekHtml = "") {
  document.body.classList.add("mesaj-modu");
  pdfButon.hidden = true;
  kontroller.hidden = true;
  liste = [];
  sahne.innerHTML = `
    <div class="mesaj">
      <div class="mesaj-desen" style="background-image:${desenArkaPlan(7, "#B8913A", 0.5)}"></div>
      <h1>${baslik}</h1>
      <p>${metin}</p>
      ${ekHtml}
    </div>`;
}

function slaytlar(e, secildi) {
  const sonraki = ESMALAR[e.sira % TOPLAM];
  const yarinMi = e.sira === bugunSira && !secildi;
  const etiket = `${e.sira}/${TOPLAM}`;
  const alt = `<footer class="slayt-alt"><span>${kacis(e.okunus)}</span><span>${etiket}</span></footer>`;
  const ust = (no, baslik) => `<header class="slayt-ust"><span class="slayt-no">${no}</span><h2>${baslik}</h2></header>`;

  return [
    `<section class="slayt kapak">
      <div class="kapak-ic">
        <div class="kapak-sira">${etiket}</div>
        <div class="arapca buyuk" lang="ar" dir="rtl">${kacis(e.arapca)}</div>
        <div class="okunus">${kacis(e.okunus)}</div>
        <div class="anlam-kisa">${kacis(e.anlam_kisa)}</div>
      </div>
      ${alt}
    </section>`,

    `<section class="slayt">
      ${ust("1", "Anlamı")}
      <div class="govde">
        <p class="vurgu">${kacis(e.anlam_kisa)}</p>
        <p>${kacis(e.anlam_detay)}</p>
        ${e.kok ? `<p class="kok">${kacis(e.kok)}</p>` : ""}
      </div>
      ${alt}
    </section>`,

    `<section class="slayt">
      ${ust("2", "Kur'an'da")}
      <div class="govde ortali">
        <p class="arapca ayet" lang="ar" dir="rtl">${kacis(e.ayet.arapca)}</p>
        <blockquote>“${kacis(e.ayet.meal)}”</blockquote>
        <p class="kaynak">${kacis(e.ayet.kaynak)}</p>
      </div>
      ${alt}
    </section>`,

    `<section class="slayt">
      ${ust("3", "Hayatımıza Yansıması")}
      <div class="govde"><p class="buyuk-metin">${kacis(e.hayat)}</p></div>
      ${alt}
    </section>`,

    `<section class="slayt">
      ${ust("4", "Tefekkür ve Dua")}
      <div class="govde iki-kolon">
        <div class="kutu"><h3>Düşün</h3><p>${kacis(e.tefekkur)}</p></div>
        <div class="kutu dua"><h3>Dua</h3><p>${kacis(e.dua)}</p></div>
      </div>
      ${alt}
    </section>`,

    `<section class="slayt kapanis">
      <div class="kapak-ic">
        <div class="arapca orta" lang="ar" dir="rtl">${kacis(e.arapca)}</div>
        <p class="ozet">${kacis(e.ozet)}</p>
        <p class="yarin">${yarinMi ? "Yarın" : "Sıradaki"}: <strong>${kacis(sonraki.okunus)}</strong> <span lang="ar" dir="rtl">${kacis(sonraki.arapca)}</span></p>
      </div>
      ${alt}
    </section>`,
  ];
}

function goster(i) {
  if (!liste.length) return;
  aktif = Math.max(0, Math.min(liste.length - 1, i));
  liste.forEach((s, k) => s.classList.toggle("aktif", k === aktif));
  ilerleme.style.width = `${((aktif + 1) / liste.length) * 100}%`;
  slaytNo.textContent = `${aktif + 1}/${liste.length}`;
  document.getElementById("geri").disabled = aktif === 0;
  document.getElementById("ileri").disabled = aktif === liste.length - 1;
}

function sunumuKur(e, secildi) {
  document.title = `${e.okunus} · ${e.sira}/${TOPLAM} · Esmaül Hüsna`;
  document.documentElement.style.setProperty("--esma", e.renk);
  document.documentElement.style.setProperty("--desen", desenArkaPlan(e.sira, "#D9B45A", 0.45));
  document.documentElement.style.setProperty("--desen-acik", desenArkaPlan(e.sira, e.renk, 0.1));

  sahne.innerHTML = `<div class="slaytlar">${slaytlar(e, secildi).join("")}</div>`;
  if (!e.kontrol) {
    sahne.insertAdjacentHTML("beforeend", `<p class="taslak-notu">Taslak içerik: henüz kontrol edilmedi.</p>`);
  }
  if (yazdirModu) {
    document.body.classList.add("yazdir");
    return;
  }
  liste = [...sahne.querySelectorAll(".slayt")];
  kontroller.hidden = false;
  goster(0);
}

function esmaGezinme(e) {
  const nav = document.getElementById("esma-gezinme");
  const onceki = e.sira > 1 ? ESMALAR[e.sira - 2] : null;
  const sonraki = e.sira < TOPLAM ? ESMALAR[e.sira] : null;
  nav.innerHTML =
    (onceki ? `<a href="${baglanti("index.html", { esma: onceki.sira })}">‹ ${kacis(onceki.okunus)}</a>` : "<span></span>") +
    (sonraki ? `<a href="${baglanti("index.html", { esma: sonraki.sira })}">${kacis(sonraki.okunus)} ›</a>` : "<span></span>");
}

// Verilen sıradaki esmayı açar. secildi: kullanıcı belirli bir esma seçtiyse true (günün esması değil).
function ac(siraNo, secildi) {
  const e = ESMALAR[siraNo - 1];
  acikEsma = e;
  document.body.classList.remove("mesaj-modu");
  sayac.textContent = `${e.sira}/${TOPLAM}`;
  esmaGezinme(e);

  if (!e.hazir) {
    mesajGoster(
      kacis(e.okunus),
      `${kacis(e.anlam_kisa)}<br><br>Bu esmanın sunumu hazırlanıyor.`,
      `<div class="arapca orta" lang="ar" dir="rtl">${kacis(e.arapca)}</div>`
    );
    return;
  }
  pdfButon.hidden = false;
  pdfButon.href = pdfYolu(e);
  pdfButon.setAttribute("download", `${pad3(e.sira)}-${e.slug}.pdf`);
  sunumuKur(e, secildi);
}

document.getElementById("geri").onclick = () => goster(aktif - 1);
document.getElementById("ileri").onclick = () => goster(aktif + 1);
document.addEventListener("keydown", (ev) => {
  if (!liste.length || sahne.offsetParent === null) return;
  if (ev.key === "ArrowRight" || ev.key === "PageDown" || ev.key === " ") goster(aktif + 1);
  else if (ev.key === "ArrowLeft" || ev.key === "PageUp") goster(aktif - 1);
  else if (ev.key === "Home") goster(0);
  else if (ev.key === "End") goster(liste.length - 1);
  else return;
  ev.preventDefault();
});

let dokunX = null;
sahne.addEventListener("touchstart", (ev) => (dokunX = ev.touches[0].clientX), { passive: true });
sahne.addEventListener("touchend", (ev) => {
  if (dokunX === null) return;
  const dx = ev.changedTouches[0].clientX - dokunX;
  if (Math.abs(dx) > 40) goster(aktif + (dx < 0 ? 1 : -1));
  dokunX = null;
});

pdfButon.addEventListener("click", async (ev) => {
  ev.preventDefault();
  // Hazır PDF varsa onu indir; yoksa (veya dosyadan açıldıysa) yazdırma penceresine düş.
  if (acikEsma && location.protocol.startsWith("http")) {
    try {
      const yanit = await fetch(pdfButon.href, { method: "HEAD" });
      if (yanit.ok) {
        const a = document.createElement("a");
        a.href = pdfButon.href;
        a.download = pdfButon.getAttribute("download");
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch {}
  }
  window.print();
});

window.sunumAc = ac;

if (!window.TEK_DOSYA) {
  const istenen = parseInt(parametreler.get("esma"), 10);
  const secildi = istenen >= 1 && istenen <= TOPLAM;
  ac(secildi ? istenen : bugunSira, secildi);
}
