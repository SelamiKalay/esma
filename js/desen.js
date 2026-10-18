// Kodla üretilen İslami geometrik desenler (SVG). Her esma sırasına göre farklı motif ve ölçek alır.

function sekizKoseliYildiz(cx, cy, r) {
  const kare = (aci) =>
    [0, 1, 2, 3]
      .map((k) => {
        const a = aci + (k * Math.PI) / 2;
        return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
      })
      .join(" ");
  return `<polygon points="${kare(0)}"/><polygon points="${kare(Math.PI / 4)}"/>`;
}

// Merkezde bir daire ve çevresinde ona değen dört daire (iç içe geçmiş daire örgüsü).
function daireOrgusu(cx, cy, r) {
  return [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]]
    .map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="${r}"/>`)
    .join("");
}

// Döşenebilir tek bir karo üretir.
function desenKarosu(sira, renk, opaklik) {
  const tur = sira % 3;
  const b = 60 + (sira % 4) * 10; // karo boyu
  const h = b / 2;
  let ic;
  if (tur === 0) {
    ic = sekizKoseliYildiz(h, h, h * 0.62) + sekizKoseliYildiz(0, 0, h * 0.3) + sekizKoseliYildiz(b, 0, h * 0.3) +
      sekizKoseliYildiz(0, b, h * 0.3) + sekizKoseliYildiz(b, b, h * 0.3) + `<circle cx="${h}" cy="${h}" r="${h * 0.22}"/>`;
  } else if (tur === 1) {
    // Karo kenarında daireler yarım kalır, komşu karoyla birleşip kesintisiz örgü oluşur.
    ic = daireOrgusu(h, h, h) + sekizKoseliYildiz(h, h, h * 0.32);
  } else {
    ic = sekizKoseliYildiz(h, h, h * 0.75) + `<rect x="${h * 0.62}" y="${h * 0.62}" width="${h * 0.76}" height="${h * 0.76}" transform="rotate(45 ${h} ${h})"/>` +
      `<path d="M0 0L${b} ${b}M${b} 0L0 ${b}"/>`;
  }
  return { b, ic: `<g fill="none" stroke="${renk}" stroke-opacity="${opaklik}" stroke-width="1.2">${ic}</g>` };
}

// CSS background-image olarak kullanılabilecek data URI döndürür.
function desenArkaPlan(sira, renk, opaklik = 0.35) {
  const { b, ic } = desenKarosu(sira, renk, opaklik);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${b}" height="${b}" viewBox="0 0 ${b} ${b}">${ic}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
