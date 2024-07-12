import express from 'express';
import nlpRoutes from './routes/nlp.route.js'; // Mengimpor route NLP
import { fileURLToPath } from 'url';
import path from 'path';


const app = express(); // Membuat instance dari aplikasi Express

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gunakan middleware untuk membaca JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Menggunakan route NLP
app.use('/', nlpRoutes);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, ''));

app.use(express.static(path.join(__dirname, '/public')));


//use this as top path for accessing package.


// Menjalankan server Express pada port 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});