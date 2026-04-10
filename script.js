// Data Awal (Array of Objects)
let books = [
    { id: 1, judul: "Pemrograman JS", kategori: "Teknologi" },
    { id: 2, judul: "Struktur Data", kategori: "Teknologi" },
    { id: 3, judul: "Fisika Dasar", kategori: "Sains" },
    { id: 4, judul: "Algoritma Pemrograman", kategori: "Teknologi" }
];

const container = document.getElementById('book-container');
const loanForm = document.getElementById('loanForm');

// Fungsi Menampilkan Koleksi (DOM Dinamis)
function renderBooks() {
    container.innerHTML = ""; // Bersihkan kontainer
    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${book.judul}</h3>
            <p>Kategori: ${book.kategori}</p>
            <button onclick="deleteBook(${index})">Hapus</button>
        `;
        container.appendChild(card);
    });
}

// Fungsi Hapus Item (Tanpa Reload)
function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Validasi Form JavaScript
loanForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const qty = document.getElementById('quantity').value;

    // Validasi Nama (Wajib isi)
    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "Nama tidak boleh kosong!";
        isValid = false;
    }

    // Validasi Email (Format Valid)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Format email tidak valid!";
        isValid = false;
    }

    // Validasi Angka (Positif)
    if (qty <= 0) {
        document.getElementById('qtyError').innerText = "Jumlah harus angka positif!";
        isValid = false;
    }

    if (isValid) {
        alert("Peminjaman berhasil diajukan!");
        loanForm.reset();
    }
});

// Jalankan fungsi render saat pertama kali load
renderBooks();