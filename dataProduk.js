
const dataProduk = {
    // --- Kategori Oksigen ---
    'oksigen-o2': {
        nama: 'Oksigen (O₂)',
        gambar: 'gambar/oksigen.jpg', 
        deskripsi: 'Oksigen adalah gas vital yang digunakan secara luas dalam aplikasi medis, industri pengelasan, pemotongan logam, hingga penyelaman. Kami menyediakan oksigen dengan kemurnian tinggi untuk memastikan kualitas terbaik bagi kebutuhan Anda.',
        spesifikasi: [
            'Kemurnian: 99.5% - 99.99%',
            'Ukuran Tabung: 1 m³, 6 m³',
            'Aplikasi: Medis, Pengelasan, Kimia, Perikanan',
        ],
        harga:[
            '1 m³: Rp 150.000 – Rp 250.000',
            '6 m³: Rp 500.000 – Rp 900.000'
        ],
        kategori: 'Oksigen',
        keywords: ['gas oksigen', 'o2', 'tabung oksigen', 'mcb oxy oksigen']
    },
    'nitrogen-n2': {
        nama: 'Nitrogen (N₂)',
        gambar: 'gambar/nitrogen.jpg',
        deskripsi: 'Nitrogen adalah gas inert yang banyak digunakan untuk menciptakan atmosfer pelindung dalam pengelasan, pengawetan makanan, farmasi, dan elektronik. Tersedia dalam bentuk gas dan cair.',
        spesifikasi: [
            'Kemurnian: 99.9% - 99.999%',
            'Ukuran Tabung: 1 m³, 6 m³',
            'Aplikasi: Pengawetan Makanan, Pendinginan, Laser, Farmasi, Elektronik',
        ],
        harga:[
            '1 m³: Rp 200.000 – Rp 300.000',
            '6 m³: Rp 600.000 – Rp 950.000'
        ],
        kategori: 'Oksigen',
        keywords: ['gas nitrogen', 'n2', 'nitrogen cair', 'nitrogen industri']
    },
    'acetylene-c2h2': {
        nama: 'Acetylene (C₂H₂)',
        gambar: 'gambar/acetylene.jpg',
        deskripsi: 'Asetilena adalah gas yang sangat efisien untuk pengelasan dan pemotongan, menghasilkan suhu api yang tinggi. Penting untuk aplikasi industri berat.',
        spesifikasi: [
            'Kemurnian: Standar Industri',
            'Ukuran Tabung: 1 m³, 6 m³',
            'Aplikasi: Pengelasan Oxy-fuel, Pemotongan Logam, Brazing',
        ],
        harga: [
            '1 m³: Rp 250.000 – Rp 400.000',
            '6 m³: Rp 800.000 – Rp 1.200.000'           
        ],
        kategori: 'Oksigen',
        keywords: ['gas asetilena', 'c2h2', 'asetilin', 'las asetilena']
    },
    'argon-ar': {
        nama: 'Argon (Ar)',
        gambar: 'gambar/argon.jpg',
        deskripsi: 'Argon adalah gas mulia yang digunakan sebagai gas pelindung dalam pengelasan (TIG, MIG) untuk mencegah oksidasi dan kontaminasi. Memberikan hasil las yang bersih dan kuat.',
        spesifikasi: [
            'Kemurnian: 99.99% - 99.999%',
            'Ukuran Tabung: 1 m³, 6 m³',
            'Aplikasi: Pengelasan TIG/MIG, Pemotongan Plasma, Industri Semikonduktor',
        ],
        harga: [
            '1 m³: Rp 180.000 – Rp 250.000',
            '6 m³: Rp 600.000 – Rp 950.000'
        ],

        kategori: 'Oksigen',
        keywords: ['gas argon', 'ar', 'argon las', 'gas mulia']
    },

    // --- Kategori Aqua ---
    'aqua-galon': {
        nama: 'Aqua Galon',
        gambar: 'gambar/galon.jpg',
        deskripsi: 'Aqua Galon adalah pilihan praktis untuk kebutuhan air minum keluarga atau kantor. Air minum berkualitas dari sumber pilihan.',
        spesifikasi: [
            'Volume: 19 Liter',
            'Kemasan: Galon',
            'Sertifikasi: SNI, Halal',
        ],
        harga: 'Rp 22.000', 
        kategori: 'Aqua',
        keywords: ['aqua galon', 'air galon', 'aqua 19L', 'air minum']
    },
    'aqua-gelas': {
        nama: 'Aqua Gelas',
        gambar: 'gambar/aqua-gelas.jpg',
        deskripsi: 'Aqua Gelas adalah pilihan ekonomis dan praktis untuk acara, rapat, atau konsumsi pribadi. Tersedia dalam kemasan isi 48 pcs.',
        spesifikasi: [
            'Volume per gelas: 240 ml',
            'Isi per dus: 48 Pcs',
            'Kemasan: Gelas Plastik',
        ],
        harga: 'Rp 40.500',
        kategori: 'Aqua',
        keywords: ['aqua gelas', 'air minum gelas', 'aqua 240ml', 'aqua dus']
    },
    'aqua-botol': {
        nama: 'Aqua Botol',
        gambar: 'gambar/aqua-botol.jpg',
        deskripsi: 'Aqua Botol tersedia dalam berbagai ukuran, cocok untuk dibawa bepergian atau konsumsi sehari-hari. Praktis dan higienis.',
        spesifikasi: [
            'Volume: 330ml, 600ml, 1500ml',
            'Isi per dus: 24 Pcs (tergantung ukuran)',
            'Kemasan: Botol Plastik',
        ],
        harga: 'Rp 40.000',
        kategori: 'Aqua',
        keywords: ['aqua botol', 'air minum botol', 'aqua 600ml', 'aqua 1500ml']
    },

    // --- Kategori Gas ---
    'gas-3kg': {
        nama: 'Gas LPG 3kg',
        gambar: 'gambar/gas.jpg',
        deskripsi: 'Gas LPG 3kg subsidi, solusi praktis dan ekonomis untuk kebutuhan memasak sehari-hari rumah tangga Anda. Tersedia untuk pembelian eceran atau grosir.',
        spesifikasi: [
            'Berat Bersih: 3 Kg',
            'Kemasan: Tabung Melon Hijau',
            'Tipe: Subsidi',
        ],
        harga: 'Rp. 18.000',
        kategori: 'Gas',
        keywords: ['gas 3kg', 'lpg 3kg', 'gas melon', 'gas subsidi']
    },
    'bright-gas-12kg': {
        nama: 'Bright Gas 12kg',
        gambar: 'gambar/bright-gas.jpg',
        deskripsi: 'Bright Gas 12kg adalah pilihan non-subsidi dari Pertamina, dengan kemasan tabung berwarna pink yang lebih modern dan dilengkapi katup ganda untuk keamanan ekstra. Cocok untuk rumah tangga menengah ke atas dan usaha kecil.',
        spesifikasi: [
            'Berat Bersih: 12 Kg',
            'Kemasan: Tabung Pink',
            'Fitur: Katup Ganda',
        ],
        harga: 'Rp. 145.000',
        kategori: 'Gas',
        keywords: ['bright gas', 'lpg 12kg', 'gas pertamina', 'gas non subsidi']
    },
    'blue-gas-12kg': {
        nama: 'Blue Gas 12kg',
        gambar: 'gambar/blue-gas.jpg',
        deskripsi: 'Blue Gas 12kg menawarkan solusi gas LPG berkualitas dengan tabung biru khas. Produk ini dikenal dengan kemurnian dan performanya yang stabil untuk berbagai kebutuhan rumah tangga dan komersial.',
        spesifikasi: [
            'Berat Bersih: 12 Kg',
            'Kemasan: Tabung Biru',
            'Kualitas: Standar Komersial',
        ],
        harga: 'Rp. 130.000',
        kategori: 'Gas',
        keywords: ['blue gas', 'lpg 12kg', 'gas biru', 'gas komersial']

    }
};