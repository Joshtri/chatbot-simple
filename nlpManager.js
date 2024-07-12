import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['id'] }); // Mengatur bahasa yang digunakan adalah bahasa Indonesia ('id')

// Menambahkan dokumen untuk data pelatihan dalam bahasa Indonesia
manager.addDocument('id', 'siang', 'salam');
manager.addDocument('id', 'malam', 'salam');
manager.addDocument('id', 'halo', 'salam');
manager.addDocument('id', 'yuhu', 'salam');
manager.addDocument('id', 'hey', 'salam');
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
