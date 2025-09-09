const express = require('express');

const app = express();

const PORT = 3000;

 
app.get('/', (req, res) => {

    res.send('Tervetuloa Express-palvelimeen!');

});

 
app.get('/kukkuu', (req, res) => {

    res.send('kukkuluuruu');

});

 
app.listen(PORT, () => {

    console.log(`Palvelin käynnissä: http://localhost:${PORT}`);

});