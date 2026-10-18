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

Bu klasör zaten bir git deposu (`main` dalı, ilk commit atıldı).

1. https://github.com/new adresinde **`esma`** adlı, **Public** bir depo oluştur. README, .gitignore veya lisans **ekleme** (depo boş olmalı).
2. Bu klasörde şu iki komutu çalıştır:

   ```bash
   git remote add origin https://github.com/SelamiKalay/esma.git
   git push -u origin main
   ```

   İlk gönderimde tarayıcıda GitHub girişi istenebilir.
3. Depoda **Settings > Pages** bölümüne git. "Source" için **Deploy from a branch**, dal olarak **main** ve klasör olarak **/ (root)** seç, Save'e bas.
4. 1-2 dakika sonra site şu adreste açılır: **https://selamikalay.github.io/esma/**
5. Telefondan aç ve kontrol et: bugünün esması, Arşiv, PDF İndir.

Sonraki güncellemeler:

```bash
git add -A
git commit -m "3. esma içeriği"
git push
```
