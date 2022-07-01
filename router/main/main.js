var express = require('express')
var router = express.Router()
var path = require('path')  //경로 이동을 위해?있는것

router.get('/', function(req, res){
    console.log('main.js connect success');
    res.sendFile(path.join(__dirname, "../../public/main.html"));   //res.sendFile을 통해 response로 지정한 파일로 향하도록 함
});

module.exports = router;