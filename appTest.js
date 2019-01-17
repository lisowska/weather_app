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
//const urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.send('hello London'))

//app.get('/weather/:city', (req, res) => res.send(req.params))

app.listen(port)

// app.get('/', (req, res) => res.json({key: "value"}))

// Use middleware to set the default Content-Type
// app.use(function (req, res, next) {
//     res.header('Content-Type', 'application/json');
//     next();
// });

// res.end(JSON.stringify());


// app.get('/weather/:city',urlencodedParser,(req, res, next) => {
//     axios.get("api.openweathermap.org/data/2.5/forecast?id=524901&APPID=66104564a7ae6603e21aad3ae0d8a065")
//         .then((response) => {
//             //console.log(res.json)
//             res.json(req)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
//         // res.render('index',{data: req})
//         res.render('index', {plan: req.params.city, api:req.data})
// });

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/', function(req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    request(url, function(err, response, body){
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
        res.render('index',{weather: weather})
        }
    })
})