import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['id'] }); // Mengatur bahasa yang digunakan adalah bahasa Indonesia ('id')

// Menambahkan dokumen untuk data pelatihan dalam bahasa Indonesia
manager.addDocument('id', 'ciao', 'salam');
manager.addDocument('id', 'apa kabar', 'salam');
manager.addDocument('id', 'selamat pagi', 'salam');
manager.addDocument('id', 'selamat siang', 'salam');
manager.addDocument('id', 'selamat malam', 'salam');
manager.addDocument('id', 'yaa', 'salam');
manager.addDocument('id', 'hey', 'salam');
manager.addDocument('id', 'halo', 'salam');
manager.addDocument('id', 'apa', 'salam');
manager.addDocument('id', 'kabar', 'salam');
manager.addDocument('id', 'sabar', 'salam');
manager.addDocument('id', 'selamat', 'salam');
manager.addDocument('id', 'selamat tinggal', 'salam');
manager.addDocument('id', 'selamat jalan', 'salam');
manager.addDocument('id', 'cuk', 'salam');
manager.addDocument('id', 'kak', 'salam');
manager.addDocument('id', 'dude', 'salam');
manager.addDocument('id', 'bro', 'salam');
manager.addDocument('id', 'hai bro', 'salam');
manager.addDocument('id', 'apa kabar nih', 'tanya_kabar');
manager.addDocument('id', 'gimana kabarnya', 'tanya_kabar');
manager.addDocument('id', 'terima kasih banyak', 'ucapan_terima_kasih');
manager.addDocument('id', 'makasih ya', 'ucapan_terima_kasih');
manager.addDocument('id', 'sudah dulu ya', 'perpisahan');
manager.addDocument('id', 'sampe ketemu lagi', 'perpisahan');

// Menambahkan dokumen untuk data pelatihan dalam bahasa Indonesia
manager.addDocument('id', 'tidak baik', 'respons_kabar_tidak_baik');
manager.addDocument('id', 'sedang sakit', 'respons_kabar_tidak_baik');
manager.addDocument('id', 'saya sakit', 'respons_kabar_tidak_baik');
manager.addDocument('id', 'kurang baik', 'respons_kabar_tidak_baik');
manager.addDocument('id', 'tidak enak badan', 'respons_kabar_tidak_baik');

// Menambahkan jawaban untuk intent tertentu
manager.addAnswer('id', 'salam', 'Halo!');
manager.addAnswer('id', 'salam', 'Hai!');
manager.addAnswer('id', 'salam', 'Halo, apa kabar?');

manager.addAnswer('id', 'salam', 'Hey, apa baru?');
manager.addAnswer('id', 'salam', 'Yo, salam kenal!');
manager.addAnswer('id', 'salam', 'Hai, apa mau?');
manager.addAnswer('id', 'salam', 'Salam, apa kabar?');
manager.addAnswer('id', 'salam', 'Hey, apa baru?');
manager.addAnswer('id', 'salam', 'Yo, salam kenal!');

manager.addAnswer('id', 'tanya_kabar', 'Kabar baik, terima kasih!');
manager.addAnswer('id', 'tanya_kabar', 'Saya sedang baik, bagaimana dengan Anda?');

manager.addAnswer('id', 'ucapan_terima_kasih', 'Sama-sama!');
manager.addAnswer('id', 'ucapan_terima_kasih', 'Tidak masalah.');

manager.addAnswer('id', 'perpisahan', 'Sampai jumpa!');
manager.addAnswer('id', 'perpisahan', 'Selamat tinggal!');


// Menambahkan jawaban untuk intent tertentu
manager.addAnswer('id', 'respons_kabar_tidak_baik', 'Oh, semoga cepat pulih!');
manager.addAnswer('id', 'respons_kabar_tidak_baik', 'Mudah-mudahan segera membaik.');

// Melatih model NLP
async function trainNlp() {
    await manager.train();
    manager.save();
    console.log('Model trained and saved.');
}

trainNlp(); // Melatih model NLP saat aplikasi dimulai

export default manager; // Mengekspor instance NLPManager
