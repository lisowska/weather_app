const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const request = require('request');

const router = express.Router();
const axios = require('axios');

const apiKey='66104564a7ae6603e21aad3ae0d8a065'

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs')


app.listen(port)


app.get('/', function(req, res){
    res.render('axios');
});



app.post('/api',urlencodedParser,(req, res, next) => {
    let city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
   
    axios.post(url)
        .then((response) => {
            console.log(response.data)
            let weather = response.data;
        res.render('axios', {weather: weather})
        })
        .catch((err) => {
            console.log(err)
        });
        // res.render('index',{data: req})
        
});

