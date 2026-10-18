# Günlük Esmaül Hüsna

Her gün 99 esmadan birini 6 slaytlık bir sunum olarak gösteren statik site. Plan: `../esmaul-husna-proje-plani.md`.

## Yerelde açma

```bash
python -m http.server 8765
```

Sonra `http://localhost:8765` adresini aç. `index.html` dosyaya çift tıklayarak da açılır.

Test modu: `index.html?gun=45` (45. günmüş gibi), `index.html?esma=2` (belirli esma).

## Yeni esma içeriği ekleme

1. `veri/esmalar.js` içindeki `ESMA_ICERIK` nesnesine sıra numarasıyla yeni kayıt ekle (1 ve 2 örnek).
2. Kontrol edildikten sonra `kontrol: true` yap (sunumdaki "Taslak içerik" notu kalkar).
3. PDF'i üret: `node tools/pdf-uret.js 3` (Chrome veya Edge ve internet gerekir).

## Başlangıç tarihini değiştirme

`js/gun.js` içindeki `BASLANGIC` satırı.

## GitHub Pages'e yayınlama

Bu klasörün içeriğini bir depoya (örn. `esma`) gönder, Settings > Pages > `main` dalı / kök klasör.
