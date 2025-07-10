
// Fungsi untuk mendapatkan parameter dari URL (misal: ?id=oksigen-o2)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Fungsi yang dijalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Cek apakah halaman saat ini adalah detail-produk.html
    // Ini penting agar script ini hanya berjalan di halaman yang tepat
    if (window.location.pathname.includes('detail-produk.html')) {
        const productId = getUrlParameter('id'); // Ambil ID produk dari URL
        
        // Pastikan dataProduk sudah terdefinisi (dari dataProduk.js yang dipanggil sebelum ini)
        if (typeof dataProduk === 'undefined') {
            console.error("Error: dataProduk.js tidak dimuat atau dataProduk tidak ditemukan.");
            alert('Terjadi kesalahan memuat data produk. Kembali ke daftar produk.');
            window.location.href = 'produk.html';
            return;
        }

        const produk = dataProduk[productId]; // Cari data produk berdasarkan ID di objek dataProduk

        if (produk) {
            // Jika produk ditemukan, isi elemen HTML dengan data produk
            document.getElementById('page-title').textContent = `${produk.nama} - MCB OXY`;
            document.getElementById('detail-nama-produk').textContent = produk.nama;
            document.getElementById('detail-gambar-produk').src = produk.gambar;
            document.getElementById('detail-gambar-produk').alt = `Gambar ${produk.nama}`;
            document.getElementById('detail-deskripsi-produk').textContent = produk.deskripsi;
            document.getElementById('detail-harga-produk').textContent = produk.harga;

            // Isi daftar spesifikasi (jika ada)
            const spesifikasiList = document.getElementById('detail-spesifikasi-list');
            spesifikasiList.innerHTML = ''; // Kosongkan list sebelumnya
            if (produk.spesifikasi && produk.spesifikasi.length > 0) {
                produk.spesifikasi.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    spesifikasiList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'Tidak ada spesifikasi detail yang tersedia.';
                spesifikasiList.appendChild(li);
            }

        } else {
            // Jika produk tidak ditemukan (misal ID salah di URL), arahkan kembali ke halaman produk
            alert('Produk tidak ditemukan atau ID tidak valid!');
            window.location.href = 'produk.html';
        }
    }
});