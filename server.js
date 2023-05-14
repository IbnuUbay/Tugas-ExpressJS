const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Endpoint GET untuk mendapatkan biodata
app.get('/biodata', (req, res) => {
    const { name, 'tempat-lahir': tempatLahir, 'tanggal-lahir': tanggalLahir, alamat } = req.query;

    const biodata = {
        nama: name,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        alamat
    };

    res.send(JSON.stringify(biodata, null, 2));
});

// Endpoint POST untuk mendapatkan biodata
app.post('/biodata', (req, res) => {
    const { name, 'tempat-lahir': tempatLahir, 'tanggal-lahir': tanggalLahir, alamat } = req.body;

    const biodata = {
        nama: name,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        alamat
    };

    res.send(JSON.stringify(biodata, null, 2));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
