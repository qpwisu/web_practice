// exports 전역 객체 - 다른 파일에서 require해서 가져다 쓸 수 있다 
exports.ad = function(a,b){
    return a+b
}

exports.mul = function(a,b){
    return a*b
}
//module.exports 도 비슷하게 사용 
