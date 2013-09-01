// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

// 변수를 선언합니다.
var messages = [];

// 웹 서버를 라우트합니다.
app.get('/messages', function (request, response) {
    response.send(messages);
});

app.post('/messages', function (request, response) {
    // 변수를 선언합니다.
    var name = request.param('name');
    var content = request.param('content');
    var message = {
        name: name,
        content: content
    };

    // 데이터를 추가합니다.
    messages.push(message);

    // 응답합니다.
    response.send({
        message: '데이터를 추가했습니다.',
        data: message
    });
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
