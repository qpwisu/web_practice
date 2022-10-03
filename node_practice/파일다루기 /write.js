// writeFile은 비동기로 파일 쓰기 writeFileSync는 동기식으로 파일 쓰기 
var fs = require("fs");
fs.writeFile("./웹 개발 연습/nodePractice/output.txt","hello",function(err,data){
    if(err){
        console.log("err: "+err);
    }
    console.log("쓰기 완료");
})
//위에서 i/o 처리가 끝나기 전에 밑에 코드가 먼저 비동기적으로 실행 
console.log("쓰는 중입니다 ");