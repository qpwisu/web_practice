// http 모듈을 사용해 사용자로부터 요청을 받았을때 파일의 내용을 읽어 응답을 보내는 코드 
// 읽기 스트림 객체와 쓰기 스트림객체를 연결해서 보내줌 
var fs = require("fs");
var http = require("http")
var server = http.createServer(function(req,res){
    var instream = fs.createReadStream("./output.txt");
    instream.pipe(res);
});
server.listen(7001,"127.0.0.1")