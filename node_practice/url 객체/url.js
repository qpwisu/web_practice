//url 모듈 로딩 
var url = require("url");

//주소 문자열을 url 객체로 만들기
var curURL = url.parse("https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty");
// url 객체를 주소 문자열로 만들기 
var curStr = url.format(curURL);

console.log(curStr);
console.dir(curURL);

//query 문은 &로 구분되는데 이름 querystring 모듈로 요청 파라미터를 분리한다 

// querystring 모듈 로딩 
var querystring = require("querystring");
//parse 명령어는 요청 파라미터 문자열을 파싱하여 객체로 만들어준다 
var param = querystring.parse(curURL.query);

console.log("요청 파라미터 중 query의 값 %s ", param.query);
//stringify()는 요청 파라미터 객체를 문자열로 변환 
console.log("원본요청파라미터 %s", querystring.stringify(param));