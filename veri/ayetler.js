// Bu dosya tools/ayet-getir.js tarafından üretilir; elle düzenleme.
// Arapça metin: Tanzil Project (quran-simple). Meal: Türkiye Diyanet Vakfı Meali (tr.vakfi).
// Kaynak: api.alquran.cloud, indirildiği tarih: 2026-10-18
const AYET_KAYNAGI = { arapca: "Tanzil Project (tanzil.net)", meal: "Türkiye Diyanet Vakfı Meali", tarih: "2026-10-18" };
const AYET_METINLERI = {
  "allah": {
    "kaynak": "Haşr 59/22",
    "bolum": false,
    "arapca": "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ ﴿٢٢﴾",
    "meal": "O, öyle Allah'tır ki, O'ndan başka tanrı yoktur. Görülmeyeni ve görüleni bilendir. O, esirgeyendir, bağışlayandır."
  },
  "er-rahman": {
    "kaynak": "İsrâ 17/110",
    "bolum": false,
    "arapca": "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ ۖ أَيًّا مَا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ وَلَا تَجْهَرْ بِصَلَاتِكَ وَلَا تُخَافِتْ بِهَا وَابْتَغِ بَيْنَ ذَٰلِكَ سَبِيلًا ﴿١١٠﴾",
    "meal": "De ki: \"İster Allah deyin, ister Rahman deyin. Hangisini deseniz olur. Çünkü en güzel isimler O'na hastır.\" Namazında yüksek sesle okuma; onda sesini fazla da kısma; ikisinin arası bir yol tut."
  },
  "er-rahim": {
    "kaynak": "Ahzâb 33/43",
    "bolum": false,
    "arapca": "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا ﴿٤٣﴾",
    "meal": "Sizi karanlıklardan aydınlığa çıkarmak için üzerinize rahmetini gönderen O'dur. Melekleri de size istiğfar eder. Allah, müminlere karşı çok merhametlidir."
  },
  "el-melik": {
    "kaynak": "Tâhâ 20/114",
    "bolum": false,
    "arapca": "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِنْ قَبْلِ أَنْ يُقْضَىٰ إِلَيْكَ وَحْيُهُ ۖ وَقُلْ رَبِّ زِدْنِي عِلْمًا ﴿١١٤﴾",
    "meal": "Gerçek hükümdar olan Allah, yücedir. Sana O'nun vahyi tamamlanmazdan önce Kur'an'ı (okumakta) acele etme ve \"Rabbim, benim ilmimi artır\" de."
  },
  "el-kuddus": {
    "kaynak": "Cuma 62/1",
    "bolum": false,
    "arapca": "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ الْعَزِيزِ الْحَكِيمِ ﴿١﴾",
    "meal": "Göklerde ve yerde olanların hepsi, mülkün sahibi, eksiklikten münezzeh, aziz ve hakim olan Allah'ı tesbih eder."
  },
  "es-selam": {
    "kaynak": "Yûnus 10/25",
    "bolum": false,
    "arapca": "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَنْ يَشَاءُ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ ﴿٢٥﴾",
    "meal": "Allah kullarını esenlik yurduna çağırıyor ve O, dilediğini doğru yola iletir."
  },
  "el-mumin": {
    "kaynak": "Haşr 59/23",
    "bolum": false,
    "arapca": "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ﴿٢٣﴾",
    "meal": "O, öyle Allah'tır ki, kendisinden başka hiçbir tanrı yoktur. O, mülkün sahibidir, eksiklikten münezzehtir, selamet verendir, emniyete kavuşturandır, gözetip koruyandır, üstündür, istediğini zorla yaptıran, büyüklükte eşi olmayandır. Allah, müşriklerin ortak koştukları şeylerden münezzehtir."
  },
  "el-muheymin": {
    "kaynak": "Haşr 59/23",
    "bolum": false,
    "arapca": "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ﴿٢٣﴾",
    "meal": "O, öyle Allah'tır ki, kendisinden başka hiçbir tanrı yoktur. O, mülkün sahibidir, eksiklikten münezzehtir, selamet verendir, emniyete kavuşturandır, gözetip koruyandır, üstündür, istediğini zorla yaptıran, büyüklükte eşi olmayandır. Allah, müşriklerin ortak koştukları şeylerden münezzehtir."
  },
  "el-aziz": {
    "kaynak": "Münâfikûn 63/8",
    "bolum": false,
    "arapca": "يَقُولُونَ لَئِنْ رَجَعْنَا إِلَى الْمَدِينَةِ لَيُخْرِجَنَّ الْأَعَزُّ مِنْهَا الْأَذَلَّ ۚ وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ ﴿٨﴾",
    "meal": "Onlar: Andolsun, eğer Medine'ye dönersek, üstün olan, zayıf olanı oradan mutlaka çıkaracaktır, diyorlardı. Halbuki asıl üstünlük, ancak Allah'ın, Peygamberinin ve müminlerindir. Fakat münafıklar bunu bilmezler."
  },
  "el-cebbar": {
    "kaynak": "Haşr 59/23",
    "bolum": false,
    "arapca": "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ﴿٢٣﴾",
    "meal": "O, öyle Allah'tır ki, kendisinden başka hiçbir tanrı yoktur. O, mülkün sahibidir, eksiklikten münezzehtir, selamet verendir, emniyete kavuşturandır, gözetip koruyandır, üstündür, istediğini zorla yaptıran, büyüklükte eşi olmayandır. Allah, müşriklerin ortak koştukları şeylerden münezzehtir."
  },
  "el-mutekebbir": {
    "kaynak": "Câsiye 45/37",
    "bolum": false,
    "arapca": "وَلَهُ الْكِبْرِيَاءُ فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ ﴿٣٧﴾",
    "meal": "Göklerde ve yerde azamet yalnız O'nundur. O, azizdir, hakimdir."
  },
  "el-halik": {
    "kaynak": "Zümer 39/62",
    "bolum": false,
    "arapca": "اللَّهُ خَالِقُ كُلِّ شَيْءٍ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ ﴿٦٢﴾",
    "meal": "Allah her şeyin yaratıcısıdır. O, her şeye vekildir."
  },
  "el-bari": {
    "kaynak": "Haşr 59/24",
    "bolum": false,
    "arapca": "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ ﴿٢٤﴾",
    "meal": "O, yaratan, var eden, şekil veren Allah'tır. En güzel isimler O'nundur. Göklerde ve yerde olanlar O'nun şanını yüceltmektedirler. O, galiptir, hikmet sahibidir."
  },
  "el-musavvir": {
    "kaynak": "Âl-i İmrân 3/6",
    "bolum": false,
    "arapca": "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ ﴿٦﴾",
    "meal": "Rahimlerde sizi dilediği gibi şekillendiren O'dur. O'ndan başka ilah yoktur. O mutlak güç ve hikmet sahibidir."
  },
  "el-gaffar": {
    "kaynak": "Nûh 71/10",
    "bolum": false,
    "arapca": "فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا ﴿١٠﴾",
    "meal": "Dedim ki: Rabbinizden mağfiret dileyin; çünkü O çok bağışlayıcıdır."
  },
  "el-kahhar": {
    "kaynak": "Yûsuf 12/39",
    "bolum": false,
    "arapca": "يَا صَاحِبَيِ السِّجْنِ أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ ﴿٣٩﴾",
    "meal": "Ey zindan arkadaşlarım! Çeşitli tanrılar mı daha iyi, yoksa gücüne karşı durulamaz olan bir tek Allah mı?"
  },
  "el-vehhab": {
    "kaynak": "Âl-i İmrân 3/8",
    "bolum": false,
    "arapca": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ ﴿٨﴾",
    "meal": "(Onlar şöyle yakarırlar:) Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi eğriltme. Bize tarafından rahmet bağışla. Lütfu en bol olan sensin."
  },
  "er-rezzak": {
    "kaynak": "Hûd 11/6",
    "bolum": false,
    "arapca": "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا ۚ كُلٌّ فِي كِتَابٍ مُبِينٍ ﴿٦﴾",
    "meal": "Yeryüzünde yürüyen her canlının rızkı, yalnızca Allah'ın üzerinedir. Allah o canlının durduğu yeri ve sonunda bırakılacağı mekanı bilir. (Bunların) hepsi açık bir kitapta (levh-i mahfuz'da) dır."
  },
  "el-fettah": {
    "kaynak": "Sebe' 34/26",
    "bolum": false,
    "arapca": "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ وَهُوَ الْفَتَّاحُ الْعَلِيمُ ﴿٢٦﴾",
    "meal": "De ki: Rabbimiz hepimizi bir araya toplayacak, sonra aramızda hak ile hükmedecektir. O, en adil hüküm veren, (her şeyi) hakkıyla bilendir."
  },
  "el-alim": {
    "kaynak": "En'âm 6/59",
    "bolum": true,
    "arapca": "وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا",
    "meal": "Gaybın anahtarları Allah'ın yanındadır; onları O'ndan başkası bilmez. O, karada ve denizde ne varsa bilir; O'nun ilmi dışında bir yaprak bile düşmez."
  },
  "el-kabid": {
    "kaynak": "Bakara 2/245",
    "bolum": false,
    "arapca": "مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً ۚ وَاللَّهُ يَقْبِضُ وَيَبْسُطُ وَإِلَيْهِ تُرْجَعُونَ ﴿٢٤٥﴾",
    "meal": "Verdiğinin kat kat fazlasını kendisine ödemesi için Allah'a güzel bir borç (isteyene faizsiz ödünç) verecek yok mu? Darlık veren de bolluk veren de Allah'tır. Sadece O'na döndürüleceksiniz."
  },
  "el-basit": {
    "kaynak": "Ra'd 13/26",
    "bolum": false,
    "arapca": "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ وَيَقْدِرُ ۚ وَفَرِحُوا بِالْحَيَاةِ الدُّنْيَا وَمَا الْحَيَاةُ الدُّنْيَا فِي الْآخِرَةِ إِلَّا مَتَاعٌ ﴿٢٦﴾",
    "meal": "Allah dilediğine rızkını bollaştırır da daraltır da. Onlar dünya hayatıyla şımardılar. Oysa ahiretin yanında dünya hayatı, geçici bir faydadan başka bir şey değildir."
  },
  "el-hafid": {
    "kaynak": "Vâkıa 56/1-3",
    "bolum": false,
    "arapca": "إِذَا وَقَعَتِ الْوَاقِعَةُ ﴿١﴾ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ﴿٢﴾ خَافِضَةٌ رَافِعَةٌ ﴿٣﴾",
    "meal": "Kıyamet koptuğu zaman, Ki onun oluşunu yalanlayacak hiçbir kimse yoktur; O, alçaltıcı, yükselticidir."
  },
  "er-rafi": {
    "kaynak": "Mücâdele 58/11",
    "bolum": true,
    "arapca": "وَإِذَا قِيلَ انْشُزُوا فَانْشُزُوا يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    "meal": "Size \"Kalkın\" denilince de kalkın ki Allah sizden inananları ve kendilerine ilim verilenleri derecelerle yükseltsin."
  },
  "el-muiz": {
    "kaynak": "Fâtır 35/10",
    "bolum": true,
    "arapca": "مَنْ كَانَ يُرِيدُ الْعِزَّةَ فَلِلَّهِ الْعِزَّةُ جَمِيعًا",
    "meal": "Kim izzet ve şeref istiyor idiyse, bilsin ki, izzet ve şerefin hepsi Allah'ındır."
  },
  "el-muzil": {
    "kaynak": "Âl-i İmrân 3/26",
    "bolum": true,
    "arapca": "وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    "meal": "Dilediğini yüceltir, dilediğini de alçaltırsın. Her türlü iyilik senin elindedir. Gerçekten sen her şeye kadirsin."
  },
  "es-semi": {
    "kaynak": "Mücâdele 58/1",
    "bolum": true,
    "arapca": "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا وَتَشْتَكِي إِلَى اللَّهِ وَاللَّهُ يَسْمَعُ تَحَاوُرَكُمَا",
    "meal": "Kocası hakkında seninle tartışan ve Allah'a şikayette bulunan kadının sözünü Allah işitmiştir. Allah, sizin konuşmanızı işitir."
  },
  "el-basir": {
    "kaynak": "Şûrâ 42/11",
    "bolum": false,
    "arapca": "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ ۚ جَعَلَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا وَمِنَ الْأَنْعَامِ أَزْوَاجًا ۖ يَذْرَؤُكُمْ فِيهِ ۚ لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ ﴿١١﴾",
    "meal": "O, gökleri ve yeri yoktan yaratandır. Size kendinizden eşler, hayvanlardan da (kendilerine) eşler yaratmıştır. Bu suretle çoğalmanızı sağlamıştır. O'nun benzeri hiçbir şey yoktur. O işitendir, görendir."
  },
  "el-hakem": {
    "kaynak": "En'âm 6/114",
    "bolum": true,
    "arapca": "أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا وَهُوَ الَّذِي أَنْزَلَ إِلَيْكُمُ الْكِتَابَ مُفَصَّلًا",
    "meal": "(De ki): Allah'dan başka bir hakem mi arayacağım? Halbuki size Kitab'ı açık olarak indiren O'dur."
  },
  "el-adl": {
    "kaynak": "Nahl 16/90",
    "bolum": false,
    "arapca": "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ ﴿٩٠﴾",
    "meal": "Muhakkak ki Allah, adaleti, iyiliği, akrabaya yardım etmeyi emreder, çirkin işleri, fenalık ve azgınlığı da yasaklar. O, düşünüp tutasınız diye size öğüt veriyor."
  },
  "el-latif": {
    "kaynak": "Mülk 67/14",
    "bolum": false,
    "arapca": "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ ﴿١٤﴾",
    "meal": "Hiç yaratan bilmez mi? O, en ince işleri görüp bilmektedir ve her şeyden haberdardır."
  },
  "el-habir": {
    "kaynak": "En'âm 6/18",
    "bolum": false,
    "arapca": "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ ﴿١٨﴾",
    "meal": "O, kullarının üstünde her türlü tasarrufa sahiptir. O, hüküm ve hikmet sahibidir, herşeyden haberdardır."
  },
  "el-halim": {
    "kaynak": "Bakara 2/263",
    "bolum": false,
    "arapca": "قَوْلٌ مَعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ مِنْ صَدَقَةٍ يَتْبَعُهَا أَذًى ۗ وَاللَّهُ غَنِيٌّ حَلِيمٌ ﴿٢٦٣﴾",
    "meal": "Güzel söz ve bağışlama, arkasından incitme gelen sadakadan daha iyidir. Allah zengindir, acelesi de yoktur."
  },
  "el-azim": {
    "kaynak": "Vâkıa 56/96",
    "bolum": false,
    "arapca": "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ﴿٩٦﴾",
    "meal": "Öyleyse ulu Rabbinin adını tenzih ile an."
  },
  "el-gafur": {
    "kaynak": "Zümer 39/53",
    "bolum": false,
    "arapca": "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ ﴿٥٣﴾",
    "meal": "De ki: Ey kendi nefisleri aleyhine haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin! Çünkü Allah bütün günahları bağışlar. Şüphesiz ki O, çok bağışlayan, çok esirgeyendir."
  },
  "es-sekur": {
    "kaynak": "Fâtır 35/34",
    "bolum": false,
    "arapca": "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ ۖ إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ ﴿٣٤﴾",
    "meal": "(Cennette şöyle) derler: Bizden tasayı gideren Allah'a hamdolsun. Doğrusu Rabbimiz çok bağışlayan, çok nimet verendir."
  },
  "el-aliyy": {
    "kaynak": "Şûrâ 42/4",
    "bolum": false,
    "arapca": "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴿٤﴾",
    "meal": "Göklerde ve yerde ne varsa hepsi O'nundur. O yücedir, uludur."
  },
  "el-kebir": {
    "kaynak": "Lokmân 31/30",
    "bolum": false,
    "arapca": "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِنْ دُونِهِ الْبَاطِلُ وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ ﴿٣٠﴾",
    "meal": "Çünkü Allah, hakkın ta kendisidir; O'ndan başka taptıkları ise hiç şüphesiz batıldır. Gerçekten Allah çok yüce, çok uludur."
  },
  "el-hafiz": {
    "kaynak": "Hûd 11/57",
    "bolum": false,
    "arapca": "فَإِنْ تَوَلَّوْا فَقَدْ أَبْلَغْتُكُمْ مَا أُرْسِلْتُ بِهِ إِلَيْكُمْ ۚ وَيَسْتَخْلِفُ رَبِّي قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّونَهُ شَيْئًا ۚ إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ ﴿٥٧﴾",
    "meal": "\"Eğer yüz çevirirseniz şüphesiz ki benimle size gönderileni size bildirdim. Rabbim (dilerse) sizden başka bir kavmi yerinize getirir de O'na hiçbir zarar veremezsiniz. Çünkü benim Rabbim her şeyi gözetendir.\""
  },
  "el-mukit": {
    "kaynak": "Nisâ 4/85",
    "bolum": false,
    "arapca": "مَنْ يَشْفَعْ شَفَاعَةً حَسَنَةً يَكُنْ لَهُ نَصِيبٌ مِنْهَا ۖ وَمَنْ يَشْفَعْ شَفَاعَةً سَيِّئَةً يَكُنْ لَهُ كِفْلٌ مِنْهَا ۗ وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُقِيتًا ﴿٨٥﴾",
    "meal": "Kim iyi bir işe aracılık ederse onun da o işten bir nasibi olur. Kim kötü bir işe aracılık ederse onun da ondan bir payı olur. Allah her şeyin karşılığını vericidir."
  },
  "el-hasib": {
    "kaynak": "Ahzâb 33/39",
    "bolum": false,
    "arapca": "الَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللَّهِ وَيَخْشَوْنَهُ وَلَا يَخْشَوْنَ أَحَدًا إِلَّا اللَّهَ ۗ وَكَفَىٰ بِاللَّهِ حَسِيبًا ﴿٣٩﴾",
    "meal": "O peygamberler ki Allah'ın gönderdiği emirleri duyururlar, Allah'tan korkarlar ve O'ndan başka kimseden korkmazlar. Hesap görücü olarak Allah (herkese) yeter."
  },
  "el-celil": {
    "kaynak": "Hac 22/74",
    "bolum": false,
    "arapca": "مَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ ۗ إِنَّ اللَّهَ لَقَوِيٌّ عَزِيزٌ ﴿٧٤﴾",
    "meal": "Onlar, (Bu aciz putları Allah'a ortak koşmak suretiyle) Allah'ın kadrini hakkıyla bilemediler. Hiç şüphesiz Allah, çok kuvvetlidir, çok üstündür."
  },
  "el-kerim": {
    "kaynak": "İnfitâr 82/6",
    "bolum": false,
    "arapca": "يَا أَيُّهَا الْإِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ ﴿٦﴾",
    "meal": "Ey insan! İhsanı bol Rabbine karşı seni aldatan nedir?"
  },
  "er-rakib": {
    "kaynak": "Nisâ 4/1",
    "bolum": true,
    "arapca": "إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
    "meal": "Şüphesiz Allah sizin üzerinizde gözetleyicidir."
  },
  "el-mucib": {
    "kaynak": "Hûd 11/61",
    "bolum": true,
    "arapca": "إِنَّ رَبِّي قَرِيبٌ مُجِيبٌ",
    "meal": "Çünkü Rabbim (kullarına) çok yakındır, (dualarını) kabul edendir."
  },
  "el-vasi": {
    "kaynak": "Bakara 2/115",
    "bolum": false,
    "arapca": "وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ ۚ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ ﴿١١٥﴾",
    "meal": "Doğu da Allah'ındır batı da. Nereye dönerseniz Allah'ın yüzü (zatı) oradadır. Şüphesiz Allah'(ın rahmeti ve nimeti) geniştir, O her şeyi bilendir."
  },
  "el-hakim": {
    "kaynak": "Bakara 2/32",
    "bolum": false,
    "arapca": "قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ ﴿٣٢﴾",
    "meal": "Melekler: Ya Rab! Seni noksan sıfatlardan tenzih ederiz, senin bize öğrettiklerinden başka bizim bilgimiz yoktur. Şüphesiz alim ve hakim olan ancak sensin, dediler."
  },
  "el-vedud": {
    "kaynak": "Bürûc 85/14",
    "bolum": false,
    "arapca": "وَهُوَ الْغَفُورُ الْوَدُودُ ﴿١٤﴾",
    "meal": "O, çok bağışlayan ve çok sevendir."
  },
  "el-mecid": {
    "kaynak": "Hûd 11/73",
    "bolum": false,
    "arapca": "قَالُوا أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ ۖ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ ۚ إِنَّهُ حَمِيدٌ مَجِيدٌ ﴿٧٣﴾",
    "meal": "(Melekler) dediler ki: Allah'ın emrine şaşıyor musun? Ey ev halkı! Allah'ın rahmeti ve bereketleri sizin üzerinizdedir. Şüphesiz ki O, övülmeye layıktır, iyiliği boldur."
  },
  "el-bais": {
    "kaynak": "Hac 22/7",
    "bolum": false,
    "arapca": "وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ ﴿٧﴾",
    "meal": "Kıyamet vakti de gelecektir; bunda şüphe yoktur. Ve Allah kabirlerdeki kimseleri diriltip kaldıracaktır."
  },
  "es-sehid": {
    "kaynak": "Fussilet 41/53",
    "bolum": false,
    "arapca": "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ ۗ أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ ﴿٥٣﴾",
    "meal": "İnsanlara ufuklarda ve kendi nefislerinde ayetlerimizi göstereceğiz ki onun (Kur'an'ın) gerçek olduğu, onlara iyice belli olsun. Rabbinin her şeye şahit olması, yetmez mi?"
  },
  "el-hak": {
    "kaynak": "Hac 22/6",
    "bolum": false,
    "arapca": "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّهُ يُحْيِي الْمَوْتَىٰ وَأَنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿٦﴾",
    "meal": "Çünkü Allah hakkın ta kendisidir; O, ölüleri diriltir; yine O, her şeye hakkıyla kadirdir."
  },
  "el-vekil": {
    "kaynak": "Âl-i İmrân 3/173",
    "bolum": false,
    "arapca": "الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ ﴿١٧٣﴾",
    "meal": "Bir kısım insanlar, müminlere: \"Düşmanlarınız olan insanlar, size karşı asker topladılar; aman sakının onlardan!\" dediklerinde bu, onların imanlarını bir kat daha arttırdı ve \"Allah bize yeter. O ne güzel vekildir!\" dediler."
  },
  "el-kaviyy": {
    "kaynak": "Şûrâ 42/19",
    "bolum": false,
    "arapca": "اللَّهُ لَطِيفٌ بِعِبَادِهِ يَرْزُقُ مَنْ يَشَاءُ ۖ وَهُوَ الْقَوِيُّ الْعَزِيزُ ﴿١٩﴾",
    "meal": "Allah kullarına lütufkardır, dilediğini rızıklandırır. O kuvvetlidir, güçlüdür."
  },
  "el-metin": {
    "kaynak": "Zâriyât 51/58",
    "bolum": false,
    "arapca": "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ ﴿٥٨﴾",
    "meal": "Şüphesiz rızık veren, güç ve kuvvet sahibi olan ancak Allah'tır."
  },
  "el-veliyy": {
    "kaynak": "Bakara 2/257",
    "bolum": true,
    "arapca": "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ",
    "meal": "Allah, inananların dostudur, onları karanlıklardan aydınlığa çıkarır."
  },
  "el-hamid": {
    "kaynak": "Fâtiha 1/2",
    "bolum": false,
    "arapca": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾",
    "meal": "Hamd (övme ve övülme), alemlerin Rabbi Allah'a mahsustur."
  },
  "el-muhsi": {
    "kaynak": "Cin 72/28",
    "bolum": false,
    "arapca": "لِيَعْلَمَ أَنْ قَدْ أَبْلَغُوا رِسَالَاتِ رَبِّهِمْ وَأَحَاطَ بِمَا لَدَيْهِمْ وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا ﴿٢٨﴾",
    "meal": "Ki böylece onların (peygamberlerin), Rablerinin gönderdiklerini hakkıyla tebliğ ettiklerini bilsin. (Allah) onların nezdinde olup bitenleri çepeçevre kuşatmış ve her şeyi bir bir saymıştır (kaydetmiştir)."
  },
  "el-mubdi": {
    "kaynak": "Ankebût 29/19",
    "bolum": false,
    "arapca": "أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ ثُمَّ يُعِيدُهُ ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ ﴿١٩﴾",
    "meal": "Allah'ın, yaratılanı ilk baştan nasıl yarattığını, (ölümden) sonra bunu(nasıl) tekrarladığını görmediler mi? Şüphesiz bu, Allah'a göre kolaydır."
  },
  "el-muid": {
    "kaynak": "Bürûc 85/13",
    "bolum": false,
    "arapca": "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ ﴿١٣﴾",
    "meal": "Bilin ki O, (kainat yokken) ilk olarak yaratan, (ölümden sonra tekrar hayatı) geri getirendir."
  },
  "el-muhyi": {
    "kaynak": "Rûm 30/50",
    "bolum": false,
    "arapca": "فَانْظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿٥٠﴾",
    "meal": "Allah'ın rahmetinin eserlerine bir bak: Arzı, ölümünün ardından nasıl diriltiyor! Şüphesiz O, ölüleri de mutlaka diriltecektir. O, her şeye kadirdir."
  },
  "el-mumit": {
    "kaynak": "Mülk 67/2",
    "bolum": false,
    "arapca": "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾",
    "meal": "O ki, hanginizin daha güzel davranacağını sınamak için ölümü ve hayatı yaratmıştır. O, mutlak galiptir, çok bağışlayıcıdır."
  },
  "el-hayy": {
    "kaynak": "Furkân 25/58",
    "bolum": false,
    "arapca": "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِ ۚ وَكَفَىٰ بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا ﴿٥٨﴾",
    "meal": "Ölümsüz ve daima diri olan Allah'a güvenip dayan. O'nu hamd ile tesbih et. Kullarının günahlarını O'nun bilmesi yeter."
  },
  "el-kayyum": {
    "kaynak": "Âl-i İmrân 3/2",
    "bolum": false,
    "arapca": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ﴿٢﴾",
    "meal": "Hayy ve kayyum olan Allah'tan başka ilah yoktur."
  },
  "el-vacid": {
    "kaynak": "Duhâ 93/6-8",
    "bolum": false,
    "arapca": "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ ﴿٦﴾ وَوَجَدَكَ ضَالًّا فَهَدَىٰ ﴿٧﴾ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ ﴿٨﴾",
    "meal": "O, seni yetim bulup barındırmadı mı? Şaşırmış bulup da yol göstermedi mi? Seni fakir bulup zengin etmedi mi?"
  },
  "el-macid": {
    "kaynak": "Bürûc 85/15-16",
    "bolum": false,
    "arapca": "ذُو الْعَرْشِ الْمَجِيدُ ﴿١٥﴾ فَعَّالٌ لِمَا يُرِيدُ ﴿١٦﴾",
    "meal": "Şerefli Arş'ın sahibidir. Dilediği şeyleri mutlaka yapandır."
  },
  "el-vahid": {
    "kaynak": "Bakara 2/163",
    "bolum": false,
    "arapca": "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ ﴿١٦٣﴾",
    "meal": "İlahınız bir tek Allah'tır. O'ndan başka ilah yoktur. O, rahmandır, rahimdir."
  },
  "es-samed": {
    "kaynak": "İhlâs 112/1-2",
    "bolum": false,
    "arapca": "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾",
    "meal": "De ki: O, Allah birdir. Allah sameddir."
  },
  "el-kadir": {
    "kaynak": "Kıyâme 75/40",
    "bolum": false,
    "arapca": "أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَنْ يُحْيِيَ الْمَوْتَىٰ ﴿٤٠﴾",
    "meal": "Peki (bunları yapan) Allah'ın, ölüleri tekrar diriltmeye gücü yetmez mi?"
  },
  "el-muktedir": {
    "kaynak": "Kamer 54/54-55",
    "bolum": false,
    "arapca": "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ ﴿٥٤﴾ فِي مَقْعَدِ صِدْقٍ عِنْدَ مَلِيكٍ مُقْتَدِرٍ ﴿٥٥﴾",
    "meal": "Takva sahipleri cennetlerde ve ırmakların kenarlarındadır. Güçlü ve Yüce Allah'ın huzurunda hak meclisindedirler."
  },
  "el-mukaddim": {
    "kaynak": "Vâkıa 56/10-11",
    "bolum": false,
    "arapca": "وَالسَّابِقُونَ السَّابِقُونَ ﴿١٠﴾ أُولَٰئِكَ الْمُقَرَّبُونَ ﴿١١﴾",
    "meal": "(Hayırda) önde olanlar, (ecirde de) öndedirler. İşte bunlar, (Allah'a) en yakın olanlardır,"
  },
  "el-muahhir": {
    "kaynak": "Nahl 16/61",
    "bolum": true,
    "arapca": "وَلَٰكِنْ يُؤَخِّرُهُمْ إِلَىٰ أَجَلٍ مُسَمًّى ۖ فَإِذَا جَاءَ أَجَلُهُمْ لَا يَسْتَأْخِرُونَ سَاعَةً ۖ وَلَا يَسْتَقْدِمُونَ",
    "meal": "Fakat onları takdir edilen bir müddete kadar erteliyor. Ecelleri geldiği zaman onlar ne bir saat geri kalabilirler ne de öne geçebilirler."
  },
  "el-evvel": {
    "kaynak": "Hadîd 57/3",
    "bolum": false,
    "arapca": "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ ﴿٣﴾",
    "meal": "O ilktir, sondur, zahirdir, batındır. O, her şeyi bilendir."
  },
  "el-ahir": {
    "kaynak": "Kasas 28/88",
    "bolum": false,
    "arapca": "وَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ ۘ لَا إِلَٰهَ إِلَّا هُوَ ۚ كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ ۚ لَهُ الْحُكْمُ وَإِلَيْهِ تُرْجَعُونَ ﴿٨٨﴾",
    "meal": "Allah ile birlikte başka bir tanrıya tapıp yalvarma! O'ndan başka tanrı yoktur. O'nun zatından başka her şey yok olacaktır. Hüküm O'nundur ve siz ancak O'na döndürüleceksiniz."
  },
  "ez-zahir": {
    "kaynak": "Fussilet 41/53",
    "bolum": false,
    "arapca": "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ ۗ أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ ﴿٥٣﴾",
    "meal": "İnsanlara ufuklarda ve kendi nefislerinde ayetlerimizi göstereceğiz ki onun (Kur'an'ın) gerçek olduğu, onlara iyice belli olsun. Rabbinin her şeye şahit olması, yetmez mi?"
  },
  "el-batin": {
    "kaynak": "En'âm 6/103",
    "bolum": false,
    "arapca": "لَا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ ﴿١٠٣﴾",
    "meal": "Gözler O'nu göremez; halbuki O, gözleri görür. O, eşyayı pek iyi bilen, her şeyden haberdar olandır."
  },
  "el-vali": {
    "kaynak": "Ra'd 13/11",
    "bolum": true,
    "arapca": "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ ۗ وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ ۚ وَمَا لَهُمْ مِنْ دُونِهِ مِنْ وَالٍ",
    "meal": "Bir toplum kendilerindeki özellikleri değiştirinceye kadar Allah, onlarda bulunanı değiştirmez. Allah bir topluma kötülük diledi mi, artık onun için geri çevrilme diye bir şey yoktur. Onların Allah'tan başka yardımcıları da yoktur."
  },
  "el-muteali": {
    "kaynak": "Ra'd 13/9",
    "bolum": false,
    "arapca": "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ ﴿٩﴾",
    "meal": "O, görüleni de görülmeyeni de bilir; çok büyüktür, yücedir."
  },
  "el-berr": {
    "kaynak": "Tûr 52/28",
    "bolum": false,
    "arapca": "إِنَّا كُنَّا مِنْ قَبْلُ نَدْعُوهُ ۖ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ ﴿٢٨﴾",
    "meal": "\"Gerçekten biz bundan önce O'na yalvarıyorduk. Çünkü iyilik eden, esirgeyen ancak O'dur.\""
  },
  "et-tevvab": {
    "kaynak": "Bakara 2/37",
    "bolum": false,
    "arapca": "فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ ﴿٣٧﴾",
    "meal": "Bu durum devam ederken Âdem, Rabbinden bir takım ilhamlar aldı ve derhal tevbe etti. Çünkü Allah tevbeleri kabul eden ve merhameti bol olandır."
  },
  "el-muntekim": {
    "kaynak": "Âl-i İmrân 3/4",
    "bolum": false,
    "arapca": "مِنْ قَبْلُ هُدًى لِلنَّاسِ وَأَنْزَلَ الْفُرْقَانَ ۗ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ وَاللَّهُ عَزِيزٌ ذُو انْتِقَامٍ ﴿٤﴾",
    "meal": "Daha önce de, insanlara doğru yolu göstermek üzere Furkan'ı indirmiştir. Bilinmeli ki, Allah'ın ayetlerini inkar edenler için şiddetli bir azap vardır. Allah, suçlunun hakkından gelen mutlak güç sahibidir."
  },
  "el-afuvv": {
    "kaynak": "Nisâ 4/149",
    "bolum": false,
    "arapca": "إِنْ تُبْدُوا خَيْرًا أَوْ تُخْفُوهُ أَوْ تَعْفُوا عَنْ سُوءٍ فَإِنَّ اللَّهَ كَانَ عَفُوًّا قَدِيرًا ﴿١٤٩﴾",
    "meal": "Bir iyiliği açıklar yahut gizlerseniz veya bir kötülüğü (açıklamayıp) affederseniz, şüphesiz Allah da ziyadesiyle affedici ve kadirdir."
  },
  "er-rauf": {
    "kaynak": "Hadîd 57/9",
    "bolum": false,
    "arapca": "هُوَ الَّذِي يُنَزِّلُ عَلَىٰ عَبْدِهِ آيَاتٍ بَيِّنَاتٍ لِيُخْرِجَكُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَإِنَّ اللَّهَ بِكُمْ لَرَءُوفٌ رَحِيمٌ ﴿٩﴾",
    "meal": "Sizi karanlıklardan aydınlığa çıkarmak için kuluna apaçık ayetler indiren O'dur. Şüphesiz Allah, size karşı çok şefkatli, çok merhametlidir."
  },
  "maliku-l-mulk": {
    "kaynak": "Âl-i İmrân 3/26",
    "bolum": true,
    "arapca": "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ",
    "meal": "(Resulüm!) De ki: Mülkün gerçek sahibi olan Allah'ım! Sen mülkü dilediğine verirsin ve mülkü dilediğinden geri alırsın."
  },
  "zul-celali-vel-ikram": {
    "kaynak": "Rahmân 55/78",
    "bolum": false,
    "arapca": "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ ﴿٧٨﴾",
    "meal": "Büyüklük ve ikram sahibi Rabbinin adı yücelerden yücedir."
  },
  "el-muksit": {
    "kaynak": "Âl-i İmrân 3/18",
    "bolum": false,
    "arapca": "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ ﴿١٨﴾",
    "meal": "Allah, adaleti ayakta tutarak (delilleriyle) şu hususu açıklamıştır ki, kendisinden başka ilah yoktur. Melekler ve ilim sahipleri de (bunu ikrar etmişlerdir. Evet) mutlak güç ve hikmet sahibi Allah'tan başka ilah yoktur."
  },
  "el-cami": {
    "kaynak": "Âl-i İmrân 3/9",
    "bolum": false,
    "arapca": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ ﴿٩﴾",
    "meal": "Rabbimiz! Gelmesinde şüphe edilmeyen bir günde, insanları mutlaka toplayacak olan sensin. Allah asla sözünden dönmez."
  },
  "el-ganiyy": {
    "kaynak": "Fâtır 35/15",
    "bolum": false,
    "arapca": "يَا أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ ۖ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ ﴿١٥﴾",
    "meal": "Ey insanlar! Allah'a muhtaç olan sizsiniz. Zengin ve övülmeye layık olan ancak O'dur."
  },
  "el-mugni": {
    "kaynak": "Necm 53/48",
    "bolum": false,
    "arapca": "وَأَنَّهُ هُوَ أَغْنَىٰ وَأَقْنَىٰ ﴿٤٨﴾",
    "meal": "Zengin eden de yoksul kılan da O'dur."
  },
  "el-mani": {
    "kaynak": "Fâtır 35/2",
    "bolum": false,
    "arapca": "مَا يَفْتَحِ اللَّهُ لِلنَّاسِ مِنْ رَحْمَةٍ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ مِنْ بَعْدِهِ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ ﴿٢﴾",
    "meal": "Allah'ın insanlara açacağı herhangi bir rahmeti tutup hapseden olamaz. O'nun tuttuğunu O'ndan sonra salıverecek de yoktur. O, üstündür, hikmet sahibidir."
  },
  "ed-darr": {
    "kaynak": "En'âm 6/17",
    "bolum": false,
    "arapca": "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١٧﴾",
    "meal": "Eğer Allah seni bir zarara uğratırsa, onu kendisinden başka giderecek yoktur. Ve eğer sana bir hayır verirse, (bunu da geri alacak yoktur). Şüphesiz O herşeye kadirdir."
  },
  "en-nafi": {
    "kaynak": "Fetih 48/11",
    "bolum": true,
    "arapca": "قُلْ فَمَنْ يَمْلِكُ لَكُمْ مِنَ اللَّهِ شَيْئًا إِنْ أَرَادَ بِكُمْ ضَرًّا أَوْ أَرَادَ بِكُمْ نَفْعًا",
    "meal": "De ki: Allah size bir zarar gelmesini dilerse veya bir fayda elde etmenizi isterse O'na karşı kimin bir şeye gücü yetebilir?"
  },
  "en-nur": {
    "kaynak": "Nûr 24/35",
    "bolum": true,
    "arapca": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    "meal": "Allah, göklerin ve yerin nurudur."
  },
  "el-hadi": {
    "kaynak": "Furkân 25/31",
    "bolum": false,
    "arapca": "وَكَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا مِنَ الْمُجْرِمِينَ ۗ وَكَفَىٰ بِرَبِّكَ هَادِيًا وَنَصِيرًا ﴿٣١﴾",
    "meal": "(Resulüm!) İşte biz böylece her peygamber için suçlulardan düşmanlar peyda ettik. Hidayet verici ve yardımcı olarak Rabbin yeter."
  },
  "el-bedi": {
    "kaynak": "Bakara 2/117",
    "bolum": false,
    "arapca": "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ ۖ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ ﴿١١٧﴾",
    "meal": "(O), göklerin ve yerin eşsiz yaratıcısıdır. Bir şeyi dilediğinde ona sadece \"Ol!\" der, o da hemen oluverir."
  },
  "el-baki": {
    "kaynak": "Rahmân 55/26-27",
    "bolum": false,
    "arapca": "كُلُّ مَنْ عَلَيْهَا فَانٍ ﴿٢٦﴾ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ﴿٢٧﴾",
    "meal": "Yer yüzünde bulunan her canlı yok olacak. Ancak azamet ve ikram sahibi Rabbinin zatı baki kalacak."
  },
  "el-varis": {
    "kaynak": "Hicr 15/23",
    "bolum": false,
    "arapca": "وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ ﴿٢٣﴾",
    "meal": "Şüphesiz biz diriltir ve biz öldürürüz! Ve her şeye biz varis oluruz."
  },
  "er-resid": {
    "kaynak": "Bakara 2/186",
    "bolum": false,
    "arapca": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ ﴿١٨٦﴾",
    "meal": "Kullarım sana, beni sorduğunda (söyle onlara): Ben çok yakınım. Bana dua ettiği vakit dua edenin dileğine karşılık veririm. O halde (kullarım da) benim davetime uysunlar ve bana inansınlar ki doğru yolu bulalar."
  },
  "es-sabur": {
    "kaynak": "Bakara 2/153",
    "bolum": false,
    "arapca": "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ ﴿١٥٣﴾",
    "meal": "Ey iman edenler! Sabır ve namaz ile Allah'tan yardım isteyin. Çünkü Allah muhakkak sabredenlerle beraberdir."
  }
};
