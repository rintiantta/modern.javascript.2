// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var mysql = require('mysql');

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    user: 'root',
    password: '비밀번호',
    database: 'Company'
});

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.get('/products', function (request, response) {
    // 데이터베이스 요청을 수행합니다.
    client.query('SELECT * FROM products', function (error, data) {
        response.send(data);
    });
});

app.get('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));

    // 데이터베이스 요청을 수행합니다.
    client.query('SELECT * FROM products WHERE id=?', [
        id
    ], function (error, data) {
        response.send(data);
    })
});

app.post('/products', function (request, response) {
    // 변수를 선언합니다.
    var name = request.param('name');
    var modelnumber = request.param('modelnumber');
    var series = request.param('series');

    // 데이터베이스 요청을 수행합니다.
    client.query('INSERT INTO products (name, modelnumber, series) VALUES(?,?,?)', [
        name, modelnumber, series
    ], function (error, data) {
        response.send(data);
    });
});

app.put('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));
    var name = request.param('name');
    var modelnumber = request.param('modelnumber');
    var series = request.param('series');
    var query = 'UPDATE products SET '

    // 쿼리를 생성합니다.
    if (name) query += 'name="' + name + '" ';
    if (modelnumber) query += 'modelnumber="' + modelnumber + '" ';
    if (series) query += 'series="' + series + '" ';

    // 데이터베이스 요청을 수행합니다.
    client.query(query, function (error, data) {
        response.send(data);
    });
});

app.del('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));

    // 데이터베이스 요청을 수행합니다.
    client.query('DELETE FROM products WHERE id=', [
        id
    ], function (error, data) {
        response.send(data);
    });
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
