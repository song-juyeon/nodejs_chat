var express = require('express') // require로 express 모듈을 가져온다.
var app = express() // 가져온 모듈을 app이라는 변수로 사용한다.

//연결을 위한 listening을 시작(listening 이벤트 발생)
app.listen(8008, function() { // 8008 포트로 서버 확인
    console.log("start! express server on port 8008");
});
