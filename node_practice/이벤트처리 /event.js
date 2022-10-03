// 노드에서 이벤트를 주고 받을 때는 events 모듈에 정의된 EventEmitter을 이용한다 
// 노드의 객체는 EventEmitter을 상속 받을 수 있으면 on()과 emit() 메소드를 사용할 수 있다 
//on(event,listener) - 지정한 이벤트의 리스너를 추가합니다
//once(event,listener) - 지정한 이벤트의 리스너를 추가하지만 한번쓰면 제거됩니다.
//removerListener(event,listener) - 지정한 이벤트에 대한 리스너를 제거합니다. 

//process는 노드에서 언제나 사용할 수 있는 객체 eventEmitter을 상속하도록 만들어짐 
// exit이벤트 지정 
process.on("exit",function(){
    console.log("exit 이벤트 발생");
})

setTimeout(function() {
    console.log("2초후 시스템 종료");
    process.exit();
},2000);
