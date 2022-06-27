var express = require('express')
var router = express.Router()

router.get('/calculatorPop', function(req,res){     //get으로 받아 calculatorPop이라는 호출이 들어오면
                                                    //res.render 메서드를 통해 calculator.ejs로 보낸다.
    console.log('calculator.js connect success');
    res.render('calculator.ejs')
    // ejs: Embedded JavaScript
    // 자바 스크립트가 내장되어있는 html파일로
    // html 태그처럼 자바스크립트 내용을 삽입할 수 있다.
})

module.exports = router;        //module.exports를 통해 router폴더 외부에서도 사용(호출? 이동?)가능