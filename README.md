# Günlük Esmaül Hüsna

99 esmayı 4 slaytlık, kaynakları gösterilmiş bir sunum olarak gösteren statik site. Plan: `../esmaul-husna-proje-plani.md`.

## Yerelde açma

```bash
python -m http.server 8765
```

Sonra `http://localhost:8765` adresini aç. `index.html` dosyaya çift tıklayarak da açılır.

Belirli bir esmayı açmak için: `index.html?esma=17` (tek dosyada `#esma=17`).

## İçerik ve kaynaklar

- Metinler `veri/esmalar.js` içindedir; hangi alanın hangi kaynaktan geldiği dosyanın başında yazar.
- Ayet metni elle yazılmaz. Bir esmanın ayetini değiştirmek için `ayet.kaynak` alanını (ör. `"Haşr 59/22"`) düzenleyip şunu çalıştır:
  `node tools/ayet-getir.js` (Arapça metni ve meali kaynaktan çekip `veri/ayetler.js`'e yazar; uzun ayetlerde `bolum` kullanılır ve meal parçası kaynakta birebir yoksa hata verir).
- Bir din görevlisi okuyup onayladıktan sonra `kontrol: true` yapılabilir.
- PDF'leri üret: `node tools/pdf-uret.js` (Chrome veya Edge ve internet gerekir).

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

## Tek dosya sürümü (paylaşmak için)

```bash
node tools/tek-dosya.js
```

Bir üst klasöre `esmaülhüsna.html` yazar. CSS, veri ve betikler gömülüdür; içerik değiştikçe yeniden üret. PDF'ler gömülmez, "PDF İndir" yazdırma penceresini açar (orada "PDF olarak kaydet" seçilir).
