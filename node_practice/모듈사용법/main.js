var a= require("./1");
console.log(a.ad(1,2));

//외장 모듈 가져오기 
// npm install 외장모듈명 
var nconf = require("nconf");
nconf.env();
console.log("os 환경 변수의 값: %s",nconf.get("OS"));