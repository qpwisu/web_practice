function add(a,b,callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(result){
    console.log("파라미터로 전달된 콜백 함수 호출됨")
   console.log(result); 
});

// 반환 값을 값이 아닌 함수로 반환 
function add2(a,b,callback){
    var result = a+b;
    callback(result)

    var count = 0 ;
    var history = function(){
        count++;
        return count + ':' + result;
    };
    return history
}

var add_history = add2(10,10,function(result){
    console.log("콜백함수 호출");
    console.log(result);
});

console.log(add_history());
console.log(add_history());
console.log(add_history());