const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const request = require('request');

const router = express.Router();
const axios = require('axios');

const apiKey='66104564a7ae6603e21aad3ae0d8a065'

//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.listen(port)

app.get('/', function(req, res) {
    res.render('index_ok');
})

app.post('/', function(req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    request(url, function(err, response, body){
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
        res.render('index_ok',{weather: weather})
        //res.json({weather: weather});
        }
    })
})