// read와 write 파일에서는 한꺼번에 모든 데이터를 읽는 방식을 사용함 
// 이번에는 조금씩 읽거나 쓰는 방식을 사용 
// open 파일 열기 , read 읽기 , write 쓰기, cloase 파일 닫기 
// open 메소드의 플레그 r 읽기, w 쓰기(기존파일 삭제), w+ 읽기와 쓰기 모두(기존파일 삭제), a+ 읽기와 추가 (파일생성 or 기존파일에 추가)
var fs = require("fs");

fs.open("./output.txt","w",function(err,fd){
    if(err) throw err;
    var buf = new ArrayBuffer("안녕\n")
    fs.write(fd,buf,0,buf.Length,null,function(err,written,buffer){
        if (err) throw err;
        console.log(err,written,buffer);
        fs.close(fd, function(){
            console.log("파일 열고 데이터 쓰고 파일 닫기 완료 ");
        })
    })
})