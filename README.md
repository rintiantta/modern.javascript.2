#모던 웹을 위한 JavaScript + jQuery 입문 개정판
모던 웹을 위한 JavaScript + jQuery 입문 개정판과 관련된 정보입니다!

페이스북 페이지
+ https://www.facebook.com/modern.web.korea

##참고 사항
개인적으로 모든 프로그래밍 언어를 사랑한답니다.... 책 본문에서는 Node.js Express를 사용하지만 다음과 같은 프레임워크를 사용하시면 다른 프로그래밍 언어에서도 비슷한 방법으로 구현이 가능합니다.
+ C#: http://nancyfx.org/
+ Ruby: http://www.sinatrarb.com/
+ Python: http://flask.pocoo.org/
+ Node.js: http://expressjs.com/

##오탈자
###1쇄 오탈자
책을 거의 갈아 엎은 수준이다보니.... 새로운 오탈자가 대거 등장했군요.... 윤인성 저자의 1쇄는 베타라는 말도 있는데.... 재현되다니.... (근데 사실 다른 도서와 비교해서 많은 편은 아니랍니다. 후후.... ;ㅁ;)

####서문: 이예찬님 발견
페이지 번호가 따로 없어서 찾기 힘드실 수 있겠군요 ㅠㅜ.... "함수 부분을 제회"하고는 을 "함수 부분을 제외"하고로 변경해주세요.

####207페이지: 이예찬님 발견
그림 8-10에 그림이 없습니다. 'ㅁ' .... (헐.... 이건 어떻게 처리해야지....)
다음과 같은 그림입니다. ;ㅁ;

![ScreenShot](https://raw.github.com/rintiantta/modern.javascript.2/master/github%20%EC%9D%B4%EB%AF%B8%EC%A7%80/8-10.PNG)

####307페이지
코드 10-28
```html
<h1 id="earth</h1>
```
을 다음으로 변경합니다.
```html
<h1 id="earth">O</h1>
```

####384페이지
코드 13-26
```javascript
$('tr:first').css('background', '#000000').css('color', #FFFFFF);
```
에서 #FFFFFF이 따옴표로 감싸져야 합니다.
```javascript
$('tr:first').css('background', '#000000').css('color', '#FFFFFF');
```

####479페이지
코드 17-4
```html
<ul id="inner_fade">
```
inner_fade를 inner-fade로 변경해주세요.
```html
<ul id="inner-fade">
```

####509페이지: 이예찬님 발견
표 20-2의 4XX - 설명이 "클라이런트 오류"로 되어있습니다. "클라이언트 오류"로 변경해주세요. ;ㅁ;

###582페이지
중간 코드에는 문제가 없는데 전체 코드 부분에 문제가 있답니다. 'ㅁ'
코드 19-43
```javascript
app.all('/data.xml', function (request, response) {
    var output = '';
    output += '<?xml version="1.0" encoding="UTF-8" ?>';
    output += '<products>';
    items.forEach(function (item) {
        output += '<product>';
        output += '    <name>' + item.name + '</name>';
        output += '    <price>' + item.price + '</price>';
        output += '</product>';
    });
    output += '</products>';
    response.send(output);
});
```
위의 코드에서 아래 주석 부분을 추가해주세요 'ㅁ'
```javascript
app.all('/data.xml', function (request, response) {
    var output = '';
    output += '<?xml version="1.0" encoding="UTF-8" ?>';
    output += '<products>';
    items.forEach(function (item) {
        output += '<product>';
        output += '    <name>' + item.name + '</name>';
        output += '    <price>' + item.price + '</price>';
        output += '</product>';
    });
    output += '</products>';
    response.type('text/xml'); // 여기가 변경되었습니다.
    response.send(output);
});

```
####632페이지
코드 21-27
'data.json 문자열의 따옴표가 닫히지 않았습니다.
'data.json'으로 변경해주세요.
####XXX페이지
코드 24-5
```javascript
// Ajax를 수행합니다.
$.post('/message', $(this).serialize());
```
/message를 /messages로 변경합니다. 'ㅁ'
```javascript
// Ajax를 수행합니다.
$.post('/messages', $(this).serialize());
```
####688페이지
코드 24-6
```javascript
$.each(data, function (index, item) {
    var output = '';
    output += '<h2>' + data[i].name + '</h2>';
    output += '<p>' + data[i].content + '</p>';
    $('<div></div>').html(output).prependTo('#output');
});
```
data[i]를 item으로 변경해주세요. 
```javascript
$.each(data, function (index, item) {
    var output = '';
    output += '<h2>' + item.name + '</h2>';
    output += '<p>' + item.content + '</p>';
    $('<div></div>').html(output).prependTo('#output');
});
```
####712페이지
코드 25-16
```css
<style>
    .box { padding: 5px; }
    .box p { margin: 0px; padding: 5px; text-align: center; }
</style>
```
클래스 이름이 잘못들어가있지요. .box를 .button으로 변경해주세요.
```css
<style>
    .button { padding: 5px; }
    .button p { margin: 0px; padding: 5px; text-align: center; }
</style>
```
####876페이지
미세 버전에 따라서 작동하지 않는 경우가 있습니다.
코드 30-62
```javascript
$('a[class=ui-btn-right]').click(function () { /* 생략 */ });
```
'a[class=ui-btn-right]'를 'a.ui-btn-right'로 변경해주세요 'ㅁ'
```javascript
$('a.ui-btn-right').click(function () { /* 생략 */ });
```
