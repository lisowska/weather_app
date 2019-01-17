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

app.get('/', function(req, res){
    res.render('index');
});



app.post('/',urlencodedParser,(req, res, next) => {
    let city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=66104564a7ae6603e21aad3ae0d8a065`;
   
    axios.post(url)
        .then((response) => {
            console.log(response.data)
            let weather = response.data
        res.render('axios', {weather: weather})
        })
        .catch((err) => {
            console.log(err)
        });
        // res.render('index',{data: req})
        
});



// DZIALA //
// app.get('/', function(req, res) {
//     res.render('index');
// })

// app.post('/', function(req, res) {
//     let city = req.body.city;
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

//     request(url, function(err, response, body){
//         if(err){
//             res.render('index', {weather: null, error: 'Error, please try again'});
//         } else {
//             let weather = JSON.parse(body)
//         res.render('index',{weather: weather})
//         }
//     })
// })