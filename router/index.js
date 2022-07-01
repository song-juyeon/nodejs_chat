var express = require('express')
var router = express.Router()   //express의 router를 사용

var main = require('./main/main')   // 첫 화면이 될 부분
var calculator = require('./calculator/calculator') //계산기

router.use('/main', main);  //  /main로 url을 호출하면 main이라는 모듈을 사용
router.use('/calculator', calculator);  // /calculator로 url을 호출하면 calculator 모듈을 사용

module.exports = router;    //외부에서도 해당 모듈을 호출을 가능하게 함