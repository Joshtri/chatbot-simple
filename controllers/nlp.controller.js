/* eslint-disable no-useless-catch */
import manager from '../nlpManager.js'; // Mengimpor instance NLPManager


// Fungsi untuk memproses teks dan mengembalikan jawaban NLP
// export const processText = async (req, res) => {
//     const text = req.params.text; // Mendapatkan teks dari parameter URL
//     const response = await manager.process('en', text); // Memproses teks menggunakan model NLP
//     res.json({ answer: response.answer }); // Mengembalikan jawaban sebagai JSON
// };

// Fungsi untuk memproses teks dan mengembalikan jawaban NLP


export const processText = async (req, res) => {
    const text = req.body.text; // Mendapatkan teks dari body permintaan
    const response = await manager.process('id', text); // Memproses teks menggunakan model NLP
    res.json({ answer: response.answer }); // Mengembalikan jawaban sebagai JSON
};

export const chatPage = async(req,res)=>{
    const title = "Chat Bot 🤖"  
    try {
        res.render('index',{
            title
        })
    } catch (error) {
        throw error;
    }
}