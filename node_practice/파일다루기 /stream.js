// 데이터 단위가 아닌 스트림 단위로 파일을 읽고 쓸 수 있다
//stream은 데이터가 전달되는 통로와 같은 개념 
// 읽기는 createReadStream(path,옵션) , 쓰기는 createWriteStream(path,옵션)

var fs = require("fs");
var infile = fs.createReadStream("./output.txt",{flag:"r"});

var outfile = fs.createWriteStream("./output.txt",{flag:"w"});

infile.on("data",function(data){
    console.log("읽어드린 데이터",data);
    outfile.write(data);
});

infile.on("end",function(){
    console.log("파일 읽기 종료");
    outfile.end(function(){
        console.log("파일 쓰기 종료");
    });
});