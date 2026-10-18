/*
 * Esmaül Hüsna verisi.
 * Sıralama: Tirmizî rivayeti / Diyanet listesi (Allah lafzıyla birlikte 99 isim).
 * file:// üzerinden de çalışsın diye JSON yerine JS dosyası olarak tutulur.
 *
 * DİKKAT: Tüm metinler yayından önce bilgili birine kontrol ettirilmelidir.
 * "kontrol": false olan kayıtlar henüz kontrol edilmemiştir.
 */

// [arapça, okunuş, slug, kısa anlam]
const ESMA_LISTESI = [
  ["اللّٰهُ", "Allah", "allah", "Bütün güzel isimlerin sahibi, ibadete layık tek ilah."],
  ["الرَّحْمٰنُ", "er-Rahmân", "er-rahman", "Dünyada bütün yaratılmışlara merhamet eden."],
  ["الرَّحِيمُ", "er-Rahîm", "er-rahim", "Ahirette müminlere özel olarak merhamet eden."],
  ["الْمَلِكُ", "el-Melik", "el-melik", "Bütün varlıkların gerçek sahibi ve hükümdarı."],
  ["الْقُدُّوسُ", "el-Kuddûs", "el-kuddus", "Her türlü eksiklikten uzak, tertemiz olan."],
  ["السَّلَامُ", "es-Selâm", "es-selam", "Kullarını esenliğe çıkaran, her türlü tehlikeden koruyan."],
  ["الْمُؤْمِنُ", "el-Mü'min", "el-mumin", "Güven veren, vaadine sadık olan."],
  ["الْمُهَيْمِنُ", "el-Müheymin", "el-muheymin", "Her şeyi gözetip koruyan."],
  ["الْعَزِيزُ", "el-Azîz", "el-aziz", "İzzet sahibi, mağlup edilemeyen."],
  ["الْجَبَّارُ", "el-Cebbâr", "el-cebbar", "Dilediğini yaptırmaya gücü yeten, kırılanı onaran."],
  ["الْمُتَكَبِّرُ", "el-Mütekebbir", "el-mutekebbir", "Büyüklükte eşi olmayan."],
  ["الْخَالِقُ", "el-Hâlık", "el-halik", "Her şeyi yoktan yaratan."],
  ["الْبَارِئُ", "el-Bâri'", "el-bari", "Her şeyi kusursuz ve uyumlu yaratan."],
  ["الْمُصَوِّرُ", "el-Musavvir", "el-musavvir", "Her varlığa ayrı bir şekil ve özellik veren."],
  ["الْغَفَّارُ", "el-Gaffâr", "el-gaffar", "Günahları tekrar tekrar bağışlayan."],
  ["الْقَهَّارُ", "el-Kahhâr", "el-kahhar", "Her şeye galip gelen, gücü her şeye yeten."],
  ["الْوَهَّابُ", "el-Vehhâb", "el-vehhab", "Karşılıksız olarak bol bol veren."],
  ["الرَّزَّاقُ", "er-Rezzâk", "er-rezzak", "Bütün canlıların rızkını veren."],
  ["الْفَتَّاحُ", "el-Fettâh", "el-fettah", "Her türlü hayır kapısını açan."],
  ["الْعَلِيمُ", "el-Alîm", "el-alim", "Her şeyi en ince ayrıntısıyla bilen."],
  ["الْقَابِضُ", "el-Kâbıd", "el-kabid", "Dilediğine rızkı daraltan."],
  ["الْبَاسِطُ", "el-Bâsıt", "el-basit", "Dilediğine rızkı genişleten."],
  ["الْخَافِضُ", "el-Hâfıd", "el-hafid", "Dilediğini alçaltan."],
  ["الرَّافِعُ", "er-Râfi'", "er-rafi", "Dilediğini yükselten."],
  ["الْمُعِزُّ", "el-Muiz", "el-muiz", "Dilediğine izzet ve şeref veren."],
  ["الْمُذِلُّ", "el-Müzil", "el-muzil", "Dilediğini zillete düşüren."],
  ["السَّمِيعُ", "es-Semî'", "es-semi", "Her şeyi işiten."],
  ["الْبَصِيرُ", "el-Basîr", "el-basir", "Her şeyi gören."],
  ["الْحَكَمُ", "el-Hakem", "el-hakem", "Hakkı batıldan ayıran, hükmeden."],
  ["الْعَدْلُ", "el-Adl", "el-adl", "Mutlak adalet sahibi."],
  ["اللَّطِيفُ", "el-Latîf", "el-latif", "En ince işleri bilen, kullarına lütufla davranan."],
  ["الْخَبِيرُ", "el-Habîr", "el-habir", "Her şeyin iç yüzünden haberdar olan."],
  ["الْحَلِيمُ", "el-Halîm", "el-halim", "Cezalandırmada acele etmeyen, yumuşak davranan."],
  ["الْعَظِيمُ", "el-Azîm", "el-azim", "Büyüklüğü akılla kavranamayan."],
  ["الْغَفُورُ", "el-Gafûr", "el-gafur", "Affı ve bağışlaması çok olan."],
  ["الشَّكُورُ", "eş-Şekûr", "es-sekur", "Az amele çok karşılık veren."],
  ["الْعَلِيُّ", "el-Aliyy", "el-aliyy", "Yüceler yücesi."],
  ["الْكَبِيرُ", "el-Kebîr", "el-kebir", "Büyüklükte benzeri olmayan."],
  ["الْحَفِيظُ", "el-Hafîz", "el-hafiz", "Her şeyi koruyan ve muhafaza eden."],
  ["الْمُقِيتُ", "el-Mukît", "el-mukit", "Her canlının ihtiyacını veren ve gözeten."],
  ["الْحَسِيبُ", "el-Hasîb", "el-hasib", "Kullarını hesaba çeken, kullarına yeten."],
  ["الْجَلِيلُ", "el-Celîl", "el-celil", "Celâl ve azamet sahibi."],
  ["الْكَرِيمُ", "el-Kerîm", "el-kerim", "Cömertliği ve ikramı bol olan."],
  ["الرَّقِيبُ", "er-Rakîb", "er-rakib", "Her şeyi gözetim altında tutan."],
  ["الْمُجِيبُ", "el-Mucîb", "el-mucib", "Dualara karşılık veren."],
  ["الْوَاسِعُ", "el-Vâsi'", "el-vasi", "İlmi ve rahmeti her şeyi kuşatan."],
  ["الْحَكِيمُ", "el-Hakîm", "el-hakim", "Her işi hikmetli olan."],
  ["الْوَدُودُ", "el-Vedûd", "el-vedud", "Kullarını seven ve sevilmeye layık olan."],
  ["الْمَجِيدُ", "el-Mecîd", "el-mecid", "Şanı ve şerefi yüce olan."],
  ["الْبَاعِثُ", "el-Bâis", "el-bais", "Ölüleri dirilten, peygamber gönderen."],
  ["الشَّهِيدُ", "eş-Şehîd", "es-sehid", "Her şeye şahit olan."],
  ["الْحَقُّ", "el-Hak", "el-hak", "Varlığı hiç değişmeden duran, gerçeğin ta kendisi."],
  ["الْوَكِيلُ", "el-Vekîl", "el-vekil", "Kendisine güvenilen, işleri yoluna koyan."],
  ["الْقَوِيُّ", "el-Kaviyy", "el-kaviyy", "Kuvveti en mükemmel olan."],
  ["الْمَتِينُ", "el-Metîn", "el-metin", "Kudreti sarsılmaz olan."],
  ["الْوَلِيُّ", "el-Veliyy", "el-veliyy", "İnananların dostu ve yardımcısı."],
  ["الْحَمِيدُ", "el-Hamîd", "el-hamid", "Övülmeye layık olan."],
  ["الْمُحْصِي", "el-Muhsî", "el-muhsi", "Her şeyin sayısını bilen."],
  ["الْمُبْدِئُ", "el-Mübdi'", "el-mubdi", "Varlıkları ilk defa yaratan."],
  ["الْمُعِيدُ", "el-Muîd", "el-muid", "Yarattıklarını yeniden dirilten."],
  ["الْمُحْيِي", "el-Muhyî", "el-muhyi", "Can veren, hayat bağışlayan."],
  ["الْمُمِيتُ", "el-Mümît", "el-mumit", "Ölümü yaratan."],
  ["الْحَيُّ", "el-Hayy", "el-hayy", "Ezelî ve ebedî hayat sahibi."],
  ["الْقَيُّومُ", "el-Kayyûm", "el-kayyum", "Her şeyi ayakta tutan, varlığı kendinden olan."],
  ["الْوَاجِدُ", "el-Vâcid", "el-vacid", "İstediğini istediği anda bulan, hiçbir şeye muhtaç olmayan."],
  ["الْمَاجِدُ", "el-Mâcid", "el-macid", "Kerem ve ikramı bol olan."],
  ["الْوَاحِدُ", "el-Vâhid", "el-vahid", "Zatında, sıfatlarında ve fiillerinde tek olan."],
  ["الصَّمَدُ", "es-Samed", "es-samed", "Hiçbir şeye muhtaç olmayan, her şeyin kendisine muhtaç olduğu."],
  ["الْقَادِرُ", "el-Kâdir", "el-kadir", "Her şeye gücü yeten."],
  ["الْمُقْتَدِرُ", "el-Muktedir", "el-muktedir", "Kudretini dilediği gibi kullanan."],
  ["الْمُقَدِّمُ", "el-Mukaddim", "el-mukaddim", "Dilediğini öne alan."],
  ["الْمُؤَخِّرُ", "el-Muahhir", "el-muahhir", "Dilediğini geriye bırakan."],
  ["الْأَوَّلُ", "el-Evvel", "el-evvel", "Varlığının başlangıcı olmayan."],
  ["الْآخِرُ", "el-Âhir", "el-ahir", "Varlığının sonu olmayan."],
  ["الظَّاهِرُ", "ez-Zâhir", "ez-zahir", "Varlığı delillerle apaçık olan."],
  ["الْبَاطِنُ", "el-Bâtın", "el-batin", "Zatının mahiyeti akıllarca kavranamayan."],
  ["الْوَالِي", "el-Vâlî", "el-vali", "Bütün kâinatı yöneten."],
  ["الْمُتَعَالِي", "el-Müteâlî", "el-muteali", "Yaratılmışlara ait her türlü niteliğin ötesinde olan."],
  ["الْبَرُّ", "el-Berr", "el-berr", "İyilik ve ihsanı bol olan."],
  ["التَّوَّابُ", "et-Tevvâb", "et-tevvab", "Tövbeleri kabul eden."],
  ["الْمُنْتَقِمُ", "el-Müntekim", "el-muntekim", "Suçluları adaletle cezalandıran."],
  ["الْعَفُوُّ", "el-Afüvv", "el-afuvv", "Affı çok olan, günahları silen."],
  ["الرَّؤُوفُ", "er-Raûf", "er-rauf", "Çok şefkatli olan."],
  ["مَالِكُ الْمُلْكِ", "Mâlikü'l-Mülk", "maliku-l-mulk", "Mülkün tek sahibi."],
  ["ذُو الْجَلَالِ وَالْإِكْرَامِ", "Zü'l-Celâli ve'l-İkrâm", "zul-celali-vel-ikram", "Büyüklük ve ikram sahibi."],
  ["الْمُقْسِطُ", "el-Muksit", "el-muksit", "Bütün işlerini adaletle yapan."],
  ["الْجَامِعُ", "el-Câmi'", "el-cami", "İstediğini istediği yerde toplayan."],
  ["الْغَنِيُّ", "el-Ganiyy", "el-ganiyy", "Hiçbir şeye ihtiyacı olmayan."],
  ["الْمُغْنِي", "el-Mugnî", "el-mugni", "Dilediğini zengin eden."],
  ["الْمَانِعُ", "el-Mâni'", "el-mani", "Dilemediği şeye engel olan."],
  ["الضَّارُّ", "ed-Dârr", "ed-darr", "Zarar verecek şeyleri de yaratan."],
  ["النَّافِعُ", "en-Nâfi'", "en-nafi", "Fayda veren şeyleri yaratan."],
  ["النُّورُ", "en-Nûr", "en-nur", "Âlemleri nurlandıran, aydınlatan."],
  ["الْهَادِي", "el-Hâdî", "el-hadi", "Hidayet veren, doğru yolu gösteren."],
  ["الْبَدِيعُ", "el-Bedî'", "el-bedi", "Eşi ve örneği olmayan şekilde yaratan."],
  ["الْبَاقِي", "el-Bâkî", "el-baki", "Varlığının sonu olmayan, daima var olan."],
  ["الْوَارِثُ", "el-Vâris", "el-varis", "Her şey yok olduktan sonra kalan, her şeyin asıl sahibi."],
  ["الرَّشِيدُ", "er-Reşîd", "er-resid", "Bütün işleri yerli yerinde olan, doğru yolu gösteren."],
  ["الصَّبُورُ", "es-Sabûr", "es-sabur", "Çok sabırlı olan, cezalandırmada acele etmeyen."],
];

// Slayt içeriği tamamlanmış esmalar (sıra numarasına göre).
const ESMA_ICERIK = {
  1: {
    anlam_detay:
      "\"Allah\" ismi, diğer bütün isimlerin kendisine nispet edildiği özel isimdir (lafza-i celâl). Başka hiçbir varlığa ad olarak verilmez. Diğer 98 isim, O'nun sıfatlarını ve fiillerini anlatır; \"Allah\" ise bu sıfatların tamamına sahip olan zatı ifade eder.",
    kok: "Lafza-i celâl: yalnızca O'na ait özel isim",
    ayet: {
      arapca: "هُوَ اللّٰهُ الَّذِي لَا إِلٰهَ إِلَّا هُوَ ۚ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۚ هُوَ الرَّحْمٰنُ الرَّحِيمُ",
      meal: "O, kendisinden başka hiçbir ilah olmayan Allah'tır. Görüleni de görülmeyeni de bilendir. O, Rahmân'dır, Rahîm'dir.",
      kaynak: "Haşr 59/22",
    },
    hayat:
      "Bir işe başlarken \"Bismillah\" demek, o işi kimin adıyla ve kimin rızası için yaptığımızı hatırlamaktır. Kahvaltı sofrasında, yola çıkarken ya da bir sınav kâğıdına ilk satırı yazarken söylenen bu kısa söz, günü baştan sona O'nun huzurunda yaşama niyetidir.",
    tefekkur: "Bugün hangi işime \"Bismillah\" diyerek başladım, hangisini unuttum?",
    dua: "Allah'ım! Bütün işlerime Senin adınla başlamayı, Senin rızanla bitirmeyi nasip eyle.",
    ozet: "Bütün güzel isimler O'nundur; her isim, bizi O'nu tanımaya çağırır.",
    renk: "#1F4E5F",
    kontrol: false,
  },
  2: {
    anlam_detay:
      "Rahmân, rahmeti dünyada inanan inanmayan ayırmadan bütün varlıkları kuşatan demektir. Güneşin doğması, yağmurun yağması, annenin yavrusuna şefkati bu rahmetin izleridir. Bu isim yalnızca Allah için kullanılır.",
    kok: "R-H-M kökü: merhamet, şefkat, rahim",
    ayet: {
      arapca: "قُلِ ادْعُوا اللّٰهَ أَوِ ادْعُوا الرَّحْمٰنَ ۖ أَيًّا مَا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنٰى",
      meal: "De ki: İster Allah diye dua edin, ister Rahmân diye dua edin. Hangisiyle dua ederseniz edin, en güzel isimler O'nundur.",
      kaynak: "İsrâ 17/110",
    },
    hayat:
      "Bahçedeki ağaç, gölgesini yalnızca onu sulayana değil, altında duran herkese verir. Rahmân isminden pay almak da böyledir: iyiliği karşılık beklemeden, tanıdık tanımadık ayırmadan yapmak. Sokaktaki bir hayvana su koymak ya da yaşlı bir komşunun poşetini taşımak bu ismin gündelik hayattaki yansımasıdır.",
    tefekkur: "Bugün karşılık beklemeden kime merhamet gösterebilirim?",
    dua: "Ey Rahmân! Rahmetinle beni kuşat; kalbimi de yaratılmışlara karşı merhametli kıl.",
    ozet: "O'nun rahmeti her şeyi kuşatmıştır; biz de o rahmetin bir damlası olabiliriz.",
    renk: "#1F6F5C",
    kontrol: false,
  },
  3: {
    anlam_detay:
      "Rahîm, rahmetini sürekli ve özel olarak gösteren demektir. Rahmân ismi dünyada herkesi kuşatan genel rahmeti anlatırken Rahîm, inanan ve iyilik yolunda olan kullara özellikle ahirette gösterilecek ikramı anlatır. İki isim çoğu zaman birlikte anılır; her \"Bismillahirrahmanirrahim\" dediğimizde ikisini birden hatırlarız.",
    kok: "R-H-M kökü: merhamet; Rahîm sürekli ve kalıcı merhameti anlatır",
    ayet: {
      arapca: "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
      meal: "Sizi karanlıklardan aydınlığa çıkarmak için size rahmet eden, melekleri de sizin için rahmet dileyen O'dur. O, müminlere karşı çok merhametlidir.",
      kaynak: "Ahzâb 33/43",
    },
    hayat:
      "Bir öğretmen bütün sınıfa aynı dersi anlatır; ama emek veren, soru soran öğrencisiyle ayrıca ilgilenir, ona fazladan vakit ayırır. Rahîm isminin izi, yöneldikçe karşılık bulmaktır. Bir hatadan sonra pişman olup yeniden başlamak, verilen her ikinci şansın değerini bilmek bu isimle yaşamaktır.",
    tefekkur: "Hayatımda karşılığını hak etmeden bana verilen ikinci şanslar nelerdi?",
    dua: "Ey Rahîm! Beni rahmetinden ayırma; dünyada da ahirette de merhametinle muamele et.",
    ozet: "Rahmân herkese, Rahîm O'na yönelene; kapı her an açıktır.",
    kontrol: false,
  },
  4: {
    anlam_detay:
      "Melik, mülkün gerçek sahibi ve mutlak hükümdar demektir. İnsanların sahip olduğu her şey geçicidir ve emanettir; asıl sahiplik ve hüküm O'na aittir. O'nun hükümranlığı ne bir başkasından alınmıştır ne de sona erer.",
    kok: "M-L-K kökü: sahip olmak, hükmetmek, yönetmek",
    ayet: {
      arapca: "فَتَعَالَى اللّٰهُ الْمَلِكُ الْحَقُّ",
      meal: "Gerçek hükümdar olan Allah, çok yücedir.",
      kaynak: "Tâhâ 20/114",
    },
    hayat:
      "Telefonumuz, evimiz, hatta bedenimiz bile bize bir süreliğine verilmiştir. Kiraladığımız bir eve nasıl özen gösteriyorsak, bize emanet edilen her şeye de öyle davranmak Melik ismini anlamaktır. Bu bilinç hem cimrilikten hem de kibirden korur: Elimizdeki asıl bizim değildir.",
    tefekkur: "\"Benim\" dediğim şeylerden hangisi gerçekten benim?",
    dua: "Ey Melik! Bana verdiğin emanetleri yerli yerinde kullanmayı nasip et; kalbimi Senden başkasına kul etme.",
    ozet: "Her şeyin gerçek sahibi O'dur; biz emanetçiyiz.",
    kontrol: false,
  },
  5: {
    anlam_detay:
      "Kuddûs, her türlü eksiklikten, kusurdan ve yaratılmışlara benzemekten uzak, tertemiz demektir. Akla gelebilecek her noksanlıktan münezzehtir. \"Sübhânallah\" dediğimizde bu ismin anlamını dile getiririz.",
    kok: "K-D-S kökü: temizlik, kutsallık, arınmışlık",
    ayet: {
      arapca: "يُسَبِّحُ لِلّٰهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ الْعَزِيزِ الْحَكِيمِ",
      meal: "Göklerde ve yerde bulunanların hepsi; hükümdar, her türlü eksiklikten uzak, mutlak güç ve hikmet sahibi Allah'ı tesbih eder.",
      kaynak: "Cuma 62/1",
    },
    hayat:
      "Abdest alırken yalnızca elimizi yüzümüzü değil, niyetimizi de tazeleriz. Kuddûs ismi, temizliğin dışarıdan içeriye doğru bir yolculuk olduğunu hatırlatır: temiz bir oda, temiz bir söz, kin tutmayan bir kalp. Bugün dilimizi kırıcı sözlerden arındırmak bu ismin küçük ama gerçek bir yansımasıdır.",
    tefekkur: "Kalbimde arınması gereken bir kırgınlık ya da kötü düşünce var mı?",
    dua: "Ey Kuddûs! Kalbimi, dilimi ve niyetimi her türlü kirden arındır.",
    ozet: "O tertemizdir; O'nu anan kalp de arınır.",
    kontrol: false,
  },
  6: {
    anlam_detay:
      "Selâm, her türlü ayıp ve tehlikeden uzak olan, kullarını esenliğe ve barışa kavuşturan demektir. Gerçek huzur ve güven O'ndan gelir. Cennetin bir adı da \"Dâru's-selâm\", yani esenlik yurdudur.",
    kok: "S-L-M kökü: esenlik, barış, kurtuluş (İslâm ve selâm aynı köktendir)",
    ayet: {
      arapca: "وَاللّٰهُ يَدْعُو إِلَى دَارِ السَّلَامِ",
      meal: "Allah, esenlik yurduna çağırır.",
      kaynak: "Yûnus 10/25",
    },
    hayat:
      "\"Selâmün aleyküm\" demek, karşımızdakine \"Benden sana zarar gelmez, esenlik üzerine olsun\" demektir. Bu ismin yansıması, tanıdık tanımadık herkese selam vermek ve verdiğimiz selamın hakkını vermektir: elimizden ve dilimizden kimsenin incinmemesi.",
    tefekkur: "Bugün kimin hayatına huzur, kimin hayatına huzursuzluk taşıdım?",
    dua: "Ey Selâm! Bizi esenliğe kavuştur; kalbimize huzur, dilimize selam, evimize barış ver.",
    ozet: "Esenlik O'ndandır; selam vermek o esenliği paylaşmaktır.",
    kontrol: false,
  },
  7: {
    anlam_detay:
      "Mü'min, güven veren, kullarını korkudan emin kılan ve vaadine sadık olan demektir. Kalplere iman nurunu yerleştiren de O'dur. İnsan için kullanıldığında \"inanan\" anlamına gelir; Allah için ise güvenin kaynağı olmayı ifade eder.",
    kok: "E-M-N kökü: güven, emniyet, iman, emanet",
    ayet: {
      arapca: "هُوَ اللّٰهُ الَّذِي لَا إِلٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ",
      meal: "O, kendisinden başka hiçbir ilah olmayan Allah'tır. O, hükümdardır, her türlü eksiklikten uzaktır, esenlik verendir, güven verendir.",
      kaynak: "Haşr 59/23",
    },
    hayat:
      "Peygamberimiz peygamberlikten önce de \"el-Emîn\", yani güvenilir diye bilinirdi. İman, emniyet ve emanet aynı kökten gelir. Bu ismin yansıması güvenilir biri olmaktır: söz verince tutmak, sırrı saklamak, ödünç alınanı zamanında geri vermek.",
    tefekkur: "Çevremdeki insanlar bana gönül rahatlığıyla güvenebiliyor mu?",
    dua: "Ey Mü'min! Kalbimi imanla, hayatımı güvenle doldur; beni güvenilir kullarından eyle.",
    ozet: "Güvenin kaynağı O'dur; güvenilir olmak O'nun ismine yaraşır.",
    kontrol: false,
  },
};

const RENKLER = ["#1F4E5F", "#1F6F5C", "#6B3E5E", "#2E4A7D", "#7A4B22", "#3D5A3A", "#5B3F7A", "#7D2E3B", "#2F5D62"];

const ESMALAR = ESMA_LISTESI.map(([arapca, okunus, slug, anlam_kisa], i) => {
  const sira = i + 1;
  const icerik = ESMA_ICERIK[sira] || null;
  return {
    sira,
    slug,
    arapca,
    okunus,
    anlam_kisa,
    renk: RENKLER[i % RENKLER.length],
    ...(icerik || {}),
    hazir: Boolean(icerik),
  };
});

if (ESMALAR.length !== 99) console.error("Esma sayısı 99 olmalı, şu an:", ESMALAR.length);
