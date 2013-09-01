// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var _ = require('underscore');

// 변수를 선언합니다.
var books = [{
    id: 1,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'
}, {
    id: 2,
    name: '모던 웹을 위한 JavaScript + jQuery 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979148749',
    page: '880'
}, {
    id: 3,
    name: '모던 웹을 위한 Node.js 프로그래밍',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979148886',
    page: '384'
}, {
    id: 4,
    name: '모던 웹을 위한 HTML5 웹소켓 프로그래밍',
    author: '바네사 왕,프랭크 살림,피터 모스코비츠',
    publisher: '한빛미디어',
    isbn: '9788968480317',
    page: '232'
}, {
    id: 5,
    name: '모던 웹을 위한 실시간 사용자 경험(UX) 프로그래밍',
    author: '테드 로덴',
    publisher: '한빛미디어',
    isbn: '9788979149159',
    page: '368'
}, {
    id: 6,
    name: '만들면서 배우는 CodeIgniter 프레임워크',
    author: '변종월',
    publisher: '한빛미디어',
    isbn: '9788968480263',
    page: '432'
}, {
    id: 7,
    name: '만들면서 배우는 HTML5 + CSS3 + jQuery',
    author: '야무',
    publisher: '한빛미디어',
    isbn: '9788979149104',
    page: '416'
}, {
    id: 8,
    name: '만들면서 배우는 HTML5 게임 프로그래밍',
    author: '황동윤',
    publisher: '한빛미디어',
    isbn: '9788968480225',
    page: '716'
}, {
    id: 9,
    name: '만들면서 배우는 기계 학습',
    author: '오다카 토모히로',
    publisher: '한빛미디어',
    isbn: '9788979149234',
    page: '228'
}, {
    id: 10,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'
}, {
    id: 11,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'
}, {
    id: 12,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'
}, {
    id: 13,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'
}, {
    id: 14,
    name: '모던 웹 디자인을 위한 HTML5 + CSS3 입문',
    author: '윤인성',
    publisher: '한빛미디어',
    isbn: '9788979149555',
    page: '600'    
}];

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

// 라우트합니다.
app.all('/books/get', function (request, response) {
    // 변수를 선언합니다.
    var output = null;

    // 요청 매개 변수 sidx를 처리합니다.
    var sidx = request.param('sidx');
    console.log(sidx)
    if (sidx == '') { sidx = 'id'; } else { sidx = sidx.replace('grid_', ''); }

    // 요청 매개 변수 sord를 처리합니다.
    var sord = request.param('sord');
    output = _.sortBy(books, function (item) {
        return item[sidx];
    });
    if (sord == 'desc') { output = output.reverse(); }

    // 요청 매개 변수 _search를 처리합니다.
    var _search = request.param('_search');
    if (_search == 'true') {
        var searchField = request.param('searchField');
        var searchString = request.param('searchString');

        output = _.filter(output, function (item) {
            if (searchField == 'id') {
                return item.id == Number(searchString);
            } else {
                return item[searchField].indexOf(searchString) != -1;
            }
        });
    }

    // 요청 매개 변수 page와 rows를 처리합니다.
    var page = Number(request.param('page'));
    var rows = Number(request.param('rows'));
    var totalRecords = books.length;
    var totalPages = Math.ceil(totalRecords / rows);
    var start = rows * page - rows;
    
    // 응답합니다.
    output = output.slice(start, start + rows)
    response.send({
        page: page,
        total: totalPages,
        records: totalRecords,
        rows: _.map(output, function (item) {
            return {
                id: item.id,
                cell: _.toArray(item)
            };
        })
    });
});
app.post('/books/edit', function (request, response) {
    // 요청 매개 변수 oper를 처리합니다.
    switch (request.param('oper')) {
        case 'add':
            books.push({
                id: books.length + 1,
                name: request.param('name'),
                author: request.param('author'),
                publisher: request.param('publisher'),
                isbn: request.param('isbn'),
                page: request.param('page')
            });
            break;
        case 'del':
            var id = Number(request.param('id'));
            books = _.reject(books, function (item) {
                return item.id == id;
            });
            break;
        case 'edit':
            var id = Number(request.param('id'));
            book = _.find(books, function (item) {
                return item.id == id;
            });
            book.name = request.param('name');
            book.author = request.param('author');
            book.publisher = request.param('publisher');
            book.isbn = request.param('isbn');
            book.page = request.param('page');
            break;
    }

    // 응답합니다.
    response.send();
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});