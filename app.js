// NODE.JS-POHJAINEN WEB-PALVELIN EXPRESS KIRJASTOLLA TOTEUTUTTENA

// KIRJASTOT

const express = require('express');
const {engine} = require('express-handlebars');

// luodaan palvelin
const app = express();

// määritellään TCP-portti, jota palvelin kuuntelee
// se luetaan ympäristömuuttujasta PORT tai jos sitä ei ole käytetään
// porttia 8080
const PORT = process.env.PORT || 8080; 

// Määritellään polut kansioihin
app.use(express.static('puplic'));

// määritellään polku sivujen näkymiin
app.set('view', './views');

// Tehdään palvelimen express-asetukset
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


// Määritetään URL-reitit'
// ´-------------------------

// kotisivu, so. URL pelkästään palvelimen osoite
app.get('/',(reg, res) => {

    // tämä on leikisti dynaamista dataa, joka on tullut tietokannasta
    let today = 'keskiviikko'
    let food = 'nakit ja muusi'

    // muodostetaan JSON-objekti, joka voidaan lähettää sivulle
    //  korvaamaan  {{}}-muuttujat

    let dataToSend = {
    'dayName': today, 
    'menu': food,
    };

    // Renderöidään kotisivu lähettämällä sinne data
    res.render('index', dataToSend);
})

// URL-reitti About-sivuille
app.get('/about',(reg, res) => {
    // Simuloidaan dunaamista dataa

    let aboutData = {
        'team': 'TiVi20oa'
    }
    res.render('about', aboutData); 

});

// Käynnistetään palvelin
app.listen(PORT);
Console.log('Palvelin käynnistetty portissa', PORT);
