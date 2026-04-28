import { useState } from 'react';
import { Package, Tractor, Hammer, Fish, Presentation, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Item = {
  id: string;
  category: string;
  title: string;
  desc: string;
  longDesc?: string[];
  image: string;
};

const catalogItems: Item[] = [
  { 
    id: '1', 
    category: 'konstruksi', 
    title: 'Pembangunan Gedung & Hunian', 
    desc: 'Layanan konstruksi sipil mulai dari perencanaan hingga penyelesaian gedung perkantoran dan perumahan.', 
    image: '/gedung-hunian.png',
    longDesc: [
      "Wujudkan bangunan impian Anda bersama kami, mitra terpercaya dalam layanan pembangunan gedung dan hunian. Kami menghadirkan solusi konstruksi yang tidak hanya kuat dan aman, tetapi juga modern, fungsional, dan bernilai tinggi.",
      "Kami memahami bahwa setiap proyek adalah investasi besar. Oleh karena itu, kami berkomitmen memberikan hasil terbaik melalui perencanaan matang, eksekusi profesional, dan pengawasan ketat di setiap tahap pembangunan.",
      "Dari konsep awal hingga serah terima, tim kami siap mendampingi Anda dengan pendekatan yang transparan dan terarah. Kami memastikan setiap detail dikerjakan secara presisi untuk menghasilkan bangunan yang sesuai dengan visi dan kebutuhan Anda.",
      "Didukung oleh tenaga ahli berpengalaman, kami mampu menangani berbagai jenis proyek, mulai dari hunian pribadi, perumahan, hingga gedung perkantoran dan komersial dengan standar kualitas tinggi.",
      "Kami hanya menggunakan material pilihan yang telah teruji untuk memastikan kekuatan dan ketahanan bangunan dalam jangka panjang. Hasilnya adalah konstruksi yang tidak hanya indah dipandang, tetapi juga kokoh dan tahan lama.",
      "Ketepatan waktu adalah prioritas kami. Dengan sistem manajemen proyek yang terintegrasi, kami memastikan setiap pekerjaan selesai sesuai jadwal tanpa mengorbankan kualitas.",
      "Keselamatan kerja menjadi bagian penting dalam setiap aktivitas kami. Seluruh tim bekerja sesuai standar K3 dengan perlengkapan APD lengkap untuk menciptakan lingkungan kerja yang aman dan profesional.",
      "Kami juga menghadirkan solusi inovatif untuk meningkatkan efisiensi biaya tanpa mengurangi kualitas hasil akhir. Setiap proyek dirancang agar memberikan nilai maksimal bagi klien.",
      "Komunikasi yang terbuka dan responsif menjadi kunci dalam setiap kerja sama. Kami selalu siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik secara cepat dan tepat.",
      "Percayakan pembangunan gedung dan hunian Anda kepada kami, dan rasakan hasil kerja yang profesional, berkualitas, serta mampu memberikan nilai investasi jangka panjang."
    ]
  },
  { 
    id: '2', category: 'konstruksi', title: 'Infrastruktur Jalan & Jembatan', desc: 'Pengerjaan aspal, beton, instalasi listrik jalan, perpipaan, hingga pemeliharaan rutin jembatan.', image: '/infrastruktur-jalan.png',
    longDesc: [
      "Berkah Hidayatullah hadir sebagai mitra strategis dalam pengembangan infrastruktur jalan dan jembatan yang menjadi urat nadi perekonomian daerah. Kami memahami peran vital konektivitas dalam memajukan kesejahteraan masyarakat dan dunia usaha.",
      "Infrastruktur transportasi yang tangguh adalah pondasi bagi pertumbuhan ekonomi. Oleh karena itu, setiap proyek jalan dan jembatan yang kami tangani dirancang dengan mengedepankan kualitas, durabilitas, dan keamanan jangka panjang.",
      "Layanan kami mencakup pengerjaan aspal dan beton kualitas tinggi yang disesuaikan dengan kondisi geografis dan beban lalu lintas lokal. Material yang digunakan dipilih melalui proses kontrol mutu yang ketat.",
      "Kami juga menangani instalasi listrik jalan yang terintegrasi, memastikan penerangan yang memadai untuk keselamatan pengguna jalan di malam hari, menggunakan teknologi hemat energi.",
      "Sistem perpipaan dan drainase jalan menjadi fokus utama kami untuk mencegah kerusakan akibat genangan air. Drainase yang baik adalah kunci keawetan infrastruktur jalan di iklim tropis.",
      "Pemeliharaan rutin jembatan adalah layanan krusial yang kami tawarkan. Kami melakukan inspeksi berkala, perbaikan struktural, dan perawatan preventif untuk mencegah kerusakan fatal.",
      "Tim teknik kami terdiri dari insinyur sipil berpengalaman yang telah menangani berbagai proyek infrastruktur skala kecil maupun besar dengan rekam jejak yang terbukti.",
      "Keselamatan kerja (K3) selalu menjadi prioritas di setiap lokasi proyek. Kami menerapkan prosedur operasional standar yang ketat untuk melindungi pekerja dan masyarakat sekitar.",
      "Kami terus mengadopsi teknologi konstruksi terbaru untuk meningkatkan efisiensi waktu dan biaya, tanpa pernah mengorbankan kualitas akhir dari infrastruktur yang dibangun.",
      "Dengan dedikasi pada keunggulan, kami siap menjadi solusi andal untuk setiap tantangan pembangunan infrastruktur jalan dan jembatan di wilayah Anda."
    ]
  },
  { 
    id: '3', category: 'eceran', title: 'Suplai Bahan Bangunan', desc: 'Pengadaan semen, kaca, baja, logam, asbes, hingga cat dengan kualitas terbaik.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    longDesc: [
      "Dalam industri konstruksi yang kompetitif, Berkah Hidayatullah hadir sebagai mitra strategis Anda untuk suplai bahan bangunan berkualitas tinggi yang terjamin keaslian dan mutunya.",
      "Kami menyadari bahwa kekuatan sebuah bangunan bermula dari kualitas materialnya. Oleh karena itu, kami hanya menyediakan produk-produk berstandar SNI dari prinsipal dan pabrikan terpercaya.",
      "Layanan pengadaan kami mencakup kebutuhan dasar seperti semen berkualitas, berbagai jenis kaca untuk keperluan arsitektural, hingga baja dan logam konstruksi yang kokoh.",
      "Kami juga menyediakan asbes dan material atap lainnya yang dirancang untuk tahan terhadap cuaca ekstrem, memberikan perlindungan maksimal bagi bangunan Anda.",
      "Untuk kebutuhan penyelesaian akhir, kami menawarkan beragam pilihan cat premium yang tidak hanya memberikan estetika visual tetapi juga perlindungan terhadap jamur dan cuaca.",
      "Rantai pasok (supply chain) kami dikelola secara efisien, memastikan ketersediaan barang dan ketepatan waktu pengiriman langsung ke lokasi proyek Anda tanpa hambatan.",
      "Kami melayani baik kontraktor skala besar maupun pelanggan ritel dengan komitmen pelayanan yang sama responsifnya, memberikan solusi pengadaan yang fleksibel.",
      "Harga yang kami tawarkan sangat kompetitif, didukung oleh hubungan baik kami dengan berbagai distributor utama dan produsen material bangunan terkemuka.",
      "Tim penjualan kami dibekali dengan pengetahuan teknis yang memadai untuk membantu Anda memilih material yang paling tepat sesuai dengan spesifikasi dan anggaran proyek.",
      "Percayakan kebutuhan material bangunan Anda kepada kami, dan pastikan setiap struktur yang Anda bangun memiliki fondasi kualitas yang tidak tertandingi."
    ]
  },
  { 
    id: '4', category: 'eceran', title: 'Farmasi & Alat Tulis', desc: 'Distribusi serta perdagangan eceran obat-obatan, alat kesehatan primer dan kebutuhan ATK dinas.', image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1200&auto=format&fit=crop',
    longDesc: [
      "Di sektor penyediaan kebutuhan esensial, Berkah Hidayatullah hadir sebagai mitra strategis dalam distribusi farmasi, alat kesehatan, serta alat tulis kantor (ATK) untuk berbagai instansi.",
      "Kesehatan adalah prioritas utama. Kami berkomitmen menyediakan obat-obatan esensial dan produk farmasi berizin resmi yang aman dan efektif bagi masyarakat luas.",
      "Selain obat-obatan, kami melayani pengadaan alat kesehatan primer untuk fasilitas kesehatan tingkat pertama, klinik, hingga rumah sakit dengan standar mutu yang terverifikasi.",
      "Pengelolaan penyimpanan produk farmasi kami dilakukan dengan standar ketat (Cold Chain Management jika diperlukan) untuk menjaga stabilitas dan efektivitas setiap produk obat.",
      "Di sisi lain, kami juga memahami pentingnya kelancaran administrasi perkantoran. Layanan pengadaan ATK kami dirancang untuk mendukung efisiensi operasional instansi pemerintah maupun swasta.",
      "Kami menyediakan ragam alat tulis, kertas, perangkat arsip, hingga peralatan kantor elektronik dengan varian merek terkemuka yang terjamin durabilitasnya.",
      "Sistem distribusi kami dirancang untuk merespons permintaan dengan cepat, mengatasi kebutuhan mendesak yang sering kali terjadi baik di sektor kesehatan maupun administrasi.",
      "Kami selalu menjunjung tinggi kepatuhan terhadap regulasi pemerintah dalam peredaran obat dan alat kesehatan, memastikan transparansi dan legalitas dalam setiap transaksi.",
      "Kerja sama yang kami bangun dengan produsen dan distributor resmi memungkinkan kami menawarkan harga grosir dan eceran yang adil dan menguntungkan bagi mitra.",
      "Dengan layanan yang terintegrasi ini, kami siap mendukung kelancaran pelayanan kesehatan dan produktivitas perkantoran Anda dengan dedikasi penuh."
    ]
  },
  { 
    id: '5', category: 'agribisnis', title: 'Budidaya Jagung & Hortikultura', desc: 'Biji unggul pilihan, penyediaan pupuk, hingga pengadaan alat-alat pertanian presisi.', image: '/agribisnis.png',
    longDesc: [
      "Untuk mendukung ketahanan pangan nasional, Berkah Hidayatullah hadir sebagai mitra strategis dalam sektor agribisnis, khususnya budidaya jagung dan tanaman hortikultura.",
      "Kami percaya bahwa pertanian modern adalah kunci kesejahteraan petani. Pendekatan kami mengintegrasikan teknologi tepat guna dengan kearifan pertanian lokal.",
      "Kami memulai proses budidaya dari hulu, menyediakan bibit dan biji jagung serta hortikultura unggul yang memiliki tingkat germinasi tinggi dan tahan terhadap hama penyakit.",
      "Penyediaan pupuk berkualitas, baik organik maupun anorganik, menjadi bagian tak terpisahkan dari layanan kami untuk memastikan nutrisi tanah yang optimal bagi pertumbuhan tanaman.",
      "Kami juga mendukung mekanisasi pertanian melalui pengadaan alat-alat pertanian presisi, mulai dari traktor, mesin tanam, hingga sistem irigasi cerdas.",
      "Tim agronomis kami memberikan pendampingan teknis kepada petani mitra, membagikan pengetahuan tentang praktik budidaya terbaik (Good Agricultural Practices).",
      "Kami menerapkan sistem pemantauan pertumbuhan tanaman secara berkala untuk memitigasi risiko kegagalan panen akibat cuaca atau serangan hama.",
      "Selain fokus pada produktivitas, kami juga sangat memperhatikan aspek keberlanjutan lingkungan dengan meminimalisir penggunaan bahan kimia berbahaya.",
      "Pasca-panen, kami memfasilitasi akses pasar yang lebih luas dan adil, membantu menstabilkan harga jual produk pertanian demi keuntungan maksimal bagi para petani.",
      "Bersama kami, mari kita majukan sektor agribisnis Indonesia menjadi lebih modern, produktif, dan mampu bersaing di pasar global."
    ]
  },
  { 
    id: '6', category: 'agribisnis', title: 'Peternakan Ruminansia', desc: 'Penggemukan sapi dan kambing siap potong dengan pakan bernutrisi tinggi dan pengawasan dokter sipil hewan.', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1200&auto=format&fit=crop',
    longDesc: [
      "Dalam memenuhi kebutuhan protein hewani masyarakat, Berkah Hidayatullah hadir sebagai mitra strategis di bidang peternakan ruminansia yang modern dan terkelola dengan baik.",
      "Fokus utama kami adalah program penggemukan sapi dan kambing siap potong yang menjamin ketersediaan pasokan daging berkualitas tinggi, aman, dan halal di pasaran.",
      "Kesehatan dan kesejahteraan hewan (Animal Welfare) adalah prinsip dasar kami. Kami menyediakan kandang yang bersih, bersirkulasi udara baik, dan memenuhi standar kelayakan.",
      "Kami merumuskan formulasi pakan bernutrisi tinggi yang terdiri dari hijauan berkualitas dan konsentrat seimbang untuk mempercepat pertumbuhan berat badan ternak secara sehat.",
      "Setiap hewan ternak berada di bawah pengawasan rutin dokter hewan tersertifikasi untuk memastikan mereka bebas dari penyakit menular dan tumbuh dengan optimal.",
      "Kami menerapkan sistem biosekuriti yang ketat di area peternakan guna mencegah masuk dan menyebarnya patogen yang dapat merugikan kesehatan ternak.",
      "Manajemen limbah peternakan kami kelola secara ramah lingkungan, mengolah kotoran ternak menjadi pupuk organik yang bernilai ekonomis bagi sektor pertanian.",
      "Selain untuk konsumsi harian, kami juga menyediakan hewan qurban premium dengan kriteria syariat yang ketat menjelang Hari Raya Idul Adha.",
      "Transparansi dalam proses penimbangan dan penilaian kualitas daging menjadi komitmen kami kepada setiap pembeli, baik skala individu maupun industri pengolahan daging.",
      "Dengan standar peternakan yang profesional, kami berupaya menjadi pilar utama dalam swasembada daging nasional yang berkualitas dan terpercaya."
    ]
  },
  { 
    id: '7', category: 'perikanan', title: 'Penangkapan & Budidaya Ikan', desc: 'Operasional penangkapan laut dan budidaya ikan tawar seperti lele, nila, dan ikan mas.', image: '/perikanan.png',
    longDesc: [
      "Mengoptimalkan potensi maritim dan perairan darat, Berkah Hidayatullah hadir sebagai mitra strategis dalam industri perikanan, mencakup penangkapan laut maupun budidaya ikan tawar.",
      "Sektor perikanan merupakan sumber gizi yang krusial. Kami berdedikasi menyediakan hasil tangkapan laut yang segar serta ikan budidaya bermutu tinggi bagi konsumsi masyarakat.",
      "Operasional penangkapan ikan laut kami menggunakan armada yang dilengkapi teknologi navigasi dan sonar modern, serta mengutamakan metode penangkapan yang ramah lingkungan.",
      "Kami berkomitmen menolak praktik Illegal, Unreported, and Unregulated (IUU) fishing demi menjaga kelestarian ekosistem laut untuk generasi mendatang.",
      "Di sektor perairan darat, kami mengelola tambak dan kolam budidaya ikan air tawar secara intensif, dengan komoditas unggulan seperti lele, nila, dan ikan mas.",
      "Budidaya kami menerapkan sistem resirkulasi air (RAS) dan manajemen kualitas air yang ketat untuk memastikan lingkungan hidup yang ideal bagi pertumbuhan ikan.",
      "Pakan ikan yang kami gunakan dipilih dari bahan berkualitas tinggi yang tidak mencemari air, menghasilkan daging ikan yang padat, sehat, dan bebas bau lumpur.",
      "Penanganan pasca-panen (Cold Chain Management) kami jalankan dengan standar ketat untuk menjaga kesegaran ikan sejak dari kolam atau laut hingga ke tangan konsumen.",
      "Kami juga membuka peluang kemitraan dengan nelayan lokal dan peternak ikan kecil untuk meningkatkan kesejahteraan ekonomi masyarakat pesisir dan pedesaan.",
      "Percayakan kebutuhan hasil laut dan ikan tawar Anda pada kami, dan nikmati kualitas produk perikanan terbaik yang segar, sehat, dan berkelanjutan."
    ]
  },
  { 
    id: '8', category: 'jasa', title: 'Event Organizer (MICE)', desc: 'Pengelolaan acara konvensi, rapat, wisata intensif dan pameran skala provinsi maupun nasional.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    longDesc: [
      "Di ranah industri kreatif dan manajemen acara, Berkah Hidayatullah hadir sebagai mitra strategis yang profesional dalam layanan Event Organizer untuk kebutuhan MICE (Meetings, Incentives, Conferences, Exhibitions).",
      "Kami memahami bahwa setiap acara adalah cerminan dari citra institusi atau perusahaan Anda. Oleh karena itu, kesempurnaan dalam perencanaan dan eksekusi adalah hal mutlak bagi kami.",
      "Tim kreatif kami berdedikasi untuk menerjemahkan visi Anda menjadi pengalaman acara yang luar biasa, mulai dari konsep awal, tema, hingga desain produksi yang memukau.",
      "Layanan kami mencakup penyelenggaraan rapat perusahaan, konvensi tingkat nasional, program perjalanan insentif, hingga pameran dagang berskala besar yang terintegrasi.",
      "Kami mengurus seluruh aspek teknis dan logistik, termasuk manajemen lokasi (venue), perizinan, sistem tata suara dan cahaya, hingga penyediaan talent dan pembicara.",
      "Dengan jaringan vendor yang luas dan terpercaya, kami mampu memberikan efisiensi anggaran (cost-efficiency) tanpa mengurangi kemegahan dan kualitas acara yang diselenggarakan.",
      "Kami memanfaatkan teknologi manajemen acara terkini, seperti sistem registrasi digital dan platform interaktif, untuk meningkatkan kenyamanan peserta dan kelancaran alur acara.",
      "Setiap tantangan dan perubahan mendadak di lapangan (on-site) dapat ditangani dengan cepat dan tepat oleh tim manajemen krisis kami yang berpengalaman.",
      "Kami percaya bahwa detail adalah kunci. Dari sambutan tamu di meja registrasi hingga laporan akhir kegiatan, semuanya dikelola secara rapi, sistematis, dan profesional.",
      "Jadikan acara Anda momen yang tak terlupakan dan berdampak maksimal bersama kami, spesialis MICE yang mengerti esensi kesuksesan sebuah perhelatan akbar."
    ]
  },
  { 
    id: '9', category: 'konstruksi', title: 'Overhaul / Maintenance Alat Berat', desc: 'Layanan perawatan, perbaikan mesin berat, dan overhaul untuk memastikan efisiensi dan performa alat berat.', image: '/maintenance.png',
    longDesc: [
      "Guna mendukung kelancaran operasional industri padat modal, Berkah Hidayatullah hadir sebagai mitra strategis dalam penyediaan jasa overhaul dan maintenance alat berat yang komprehensif.",
      "Alat berat yang berfungsi optimal adalah tulang punggung keberhasilan proyek konstruksi dan pertambangan. Kami memastikan aset vital Anda selalu dalam kondisi prima.",
      "Layanan kami mencakup perawatan rutin (preventive maintenance), perbaikan darurat (corrective maintenance), hingga proses overhaul mesin secara menyeluruh.",
      "Kami memiliki tim mekanik bersertifikat dan ahli teknis yang berpengalaman menangani berbagai merek dan tipe alat berat, dari ekskavator, buldoser, hingga dump truck.",
      "Proses overhaul kami dilakukan di fasilitas bengkel (workshop) yang dilengkapi dengan peralatan diagnostik canggih untuk mengidentifikasi kerusakan secara presisi.",
      "Kami hanya menggunakan suku cadang asli (genuine parts) dan pelumas berkualitas tinggi dalam setiap perbaikan untuk menjamin durabilitas dan performa mesin jangka panjang.",
      "Untuk meminimalkan waktu henti (downtime) di lokasi proyek, kami menyediakan layanan perbaikan di tempat (on-site service) dengan respons yang cepat dan solutif.",
      "Setiap unit yang telah kami perbaiki akan melalui serangkaian proses pengujian fungsional dan quality control yang ketat sebelum dikembalikan ke area operasional.",
      "Kami juga menyediakan program kontrak pemeliharaan berkala yang dapat disesuaikan dengan kebutuhan jam kerja alat berat Anda, memberikan ketenangan pikiran bagi manajemen proyek.",
      "Serahkan urusan perawatan alat berat Anda kepada kami, dan raih tingkat produktivitas proyek yang maksimal dengan armada yang selalu andal dan siap kerja."
    ]
  }
];

const categories = [
  { id: 'all', label: 'Semua', icon: Package },
  { id: 'konstruksi', label: 'Konstruksi', icon: Hammer },
  { id: 'eceran', label: 'Perdagangan Umum', icon: Package },
  { id: 'agribisnis', label: 'Agribisnis', icon: Tractor },
  { id: 'perikanan', label: 'Perikanan', icon: Fish },
  { id: 'jasa', label: 'Jasa & Event', icon: Presentation },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tight mb-4">E-Katalog Berkah Hidayatullah</h1>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto uppercase tracking-widest font-medium">
            Daftar kapabilitas, penyedia layanan, dan produk eceran kami mencakup berbagai sektor kritikal di wilayah operasional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 text-[10px] uppercase font-bold tracking-widest transition-all ${
                  isActive 
                    ? 'bg-indigo-900 text-white border border-indigo-900' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Catalog Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-slate-200">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white border-b border-r border-slate-200 flex flex-col group p-6 cursor-pointer hover:shadow-xl transition-shadow relative z-10"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200 mb-6 border border-slate-200 pointer-events-none">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 mix-blend-multiply group-hover:bg-slate-900/10 transition-colors"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-indigo-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pointer-events-none">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wide mb-2 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-indigo-900 border-t border-slate-200 pt-4 hover:text-indigo-700 transition-colors group/btn">
                  <span>Lihat Detail</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-slate-100 group-hover/btn:bg-indigo-900 group-hover/btn:text-white transition-colors">
                    <Check className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 sm:h-80 shrink-0 relative bg-slate-100">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-indigo-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">{selectedItem.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                {selectedItem.longDesc ? (
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                    {selectedItem.longDesc.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                    <p>{selectedItem.desc}</p>
                    <p className="italic text-slate-400 mt-4">Detail informasi lengkap untuk layanan ini belum tersedia. Silakan hubungi kami untuk informasi lebih lanjut.</p>
                  </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <a 
                    href={`https://wa.me/6281245613771?text=${encodeURIComponent(`Halo CV Berkah Hidayatullah, saya ingin bertanya mengenai layanan ${selectedItem.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSelectedItem(null)} 
                    className="inline-flex items-center justify-center bg-[#ff8a00] text-white px-8 py-3 text-[13px] font-bold tracking-wide hover:bg-orange-500 transition-colors rounded-full shadow-md"
                  >
                    Pesan / Tanyakan Harga
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
