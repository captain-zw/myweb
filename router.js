var express = require('express')
var data = require('./public/js/artical')

var router =  express.Router()

router.get('/',function (req,res) {
    res.render('index.html')
})

router.get('/login',function (req,res) {
    res.render('login.html')
})
router.get('/swiper',function (req,res) {
    res.render('swiper.html',{
        data
    });
})

router.get('/game',function (req,res) {
    res.render('game.html')
})
module.exports = router