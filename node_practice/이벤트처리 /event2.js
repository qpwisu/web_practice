var util = require("util");
//events 모듈의 EventEmitter 객체 참조 
var EventEmitter = require("events").EventEmitter;
//Calc라는 프로토 타입 객체 생성 
var Calc =  function(){
    var self = this; 
    this.on("stop",function(){
        console.log("calc에 stop event 전달됨");
    });
};
// util 모듈의 inherits 메소드를 이용해 eventemitter을 상속하게 끔함 
util.inherits(Calc,EventEmitter);
// 프로토타입에 메소드 추가 
Calc.prototype.add= function(a,b){
    return a+b;
}

// 다른 곳에서 calc를 참조할 수 있도록 module.exports에 calc 객체를 지정하고 title 속성값으로 calculator을 설정 
module.exports = Calc;
module.exports.title = "calculator"