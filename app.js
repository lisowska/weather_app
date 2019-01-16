const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const router = express.Router();
const axios = require('axios')

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.send('hello London'))

//app.get('/weather', (req, res) => res.send(req.params))

app.listen(port)

let city='london'
app.get('/',urlencodedParser,(req, res, next) => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=portland&appid=66104564a7ae6603e21aad3ae0d8a065")
        .then((response) => {
            console.log(req)
        })
        .catch((err) => {
            console.log(err)
        });
        res.render('index',{data: req})
});