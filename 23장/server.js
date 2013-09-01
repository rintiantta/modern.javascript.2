// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(app.router);

// 웹 서버를 라우트합니다.
app.get('/data.jsonp', function (request, response) {
    // 요청 매개 변수를 추출합니다.
    var callback = request.param('callback');

    // 응답합니다.
    response.send(callback + '(' + JSON.stringify({
        제품명: '7D 건조 망고',
        유형: '당절임',
        성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
        원산지: '필리핀'
    }) + ')');
});

// 웹 서버를 라우트합니다.
app.get('/data.redirect', function (request, response) {
    // 한빛미디어 RSS 페이지에 데이터 요청
    http.get('http://www.hanb.co.kr/sync/rss_newbook.xml', function (web) {
        // 데이터를 읽을 때마다
        web.on('data', function (buffer) {
            response.write(buffer);
        });

        // 데이터를 모두 읽으면
        web.on('end', function () {
            response.end();
        });
    });
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
