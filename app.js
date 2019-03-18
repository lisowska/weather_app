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
    res.render('index');
})

app.get('/five', function(req,res){
    res.render('five');
})

app.post('/api', function(req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    request(url, function(err, response, body){
        if(err){
            res.render('index', {weather: null, error: 'Try again'});
        } else {
        let weather = JSON.parse(body)
        //console.log(weather.main.temp_min)
        //res.render('index',{weather: weather})
        res.json({weather: weather});
        }
    })
})

app.post('/fivedaysapp', function(req,res){
    let city = req.body.city.name;
    let country = req.body.city.country;
    let url = `api.openweathermap.org/data/2.5/forecast?q=${city,country}${apiKey}`

    request(url, function(err, response, body){
        if(err){
            res.render('five', {weather:null, error: 'Try again'});
        } else {

            let weather = JSON.parse(body)
            console.log(list.dt)
            res.json({weather:weather});
        }
    })
})