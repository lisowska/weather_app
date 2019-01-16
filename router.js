const express = require('express')
const router = express.Router();

const axios = require('axios');

router.get('/', (req,res,next) => {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={66104564a7ae6603e21aad3ae0d8a065}")
        .then((response) => {
            console.log(response);
        })
        .catch((err) =>{
           console.log(err)
        });
        res.render('posts')
});

module.exports = router;