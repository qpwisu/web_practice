var Calc = require("./event2");
var calc = new Calc();
// 이벤트 리스너를 호출 
calc.emit("stop");

var c= calc.add(1,2)
console.log(c);
console.log(Calc.title); 