var express = require('express') // require로 express 모듈을 가져온다.
var app = express() // 가져온 모듈을 app이라는 변수로 사용한다.
var bodyParser = require('body-parser') //미들웨어에서 파싱해주는 기능을 수행

var router = require('./router') //Express 모듈의 Router : 기능들을 모듈별로 나눌 수 있음(모듈별 분리)

//연결을 위한 listening을 시작(listening 이벤트 발생)
app.listen(8008, function() { // 8008 포트로 서버 확인
    console.log("start! express server on port 8008");
});

app.use(express.static('public'))  //해당 경로의 폴더 밑의 파일들을 정적인(static) 파일로 만들어 줌
app.use(bodyParser.json())  //request를 json형태로 리턴
app.use(bodyParser.urlencoded({extended:true})) //중첩된 객체를 json형태로 변환
app.set('view engine', 'ejs') //ejs라는 템플릿 엔진 사용

app.use(router); //router를 사용
