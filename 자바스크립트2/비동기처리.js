//비동기처리.js 
//require -> 외부모듈을 불러온다 
//import 구문 -> 자바는 모듈을 불러오는게 아님 
//              자바는 이미 모듈이 메모리에 로딩되어 있는데 
//  java.lang.String 써야하지만 귀찮아서 String 쓰면 
// import된 파일에서 찾아보는거 
//노드나 파이썬에서의 import 모듈을 메모리로 가져온다 
let fs = require("fs");

fs.readFile("./멀티스레드.txt", "utf-8", function( error, data){
    //console.log(error);
    console.log( data );
});

let data = fs.readFileSync("./멀티스레드.txt", "utf-8");
console.log( data );

console.log("완료");
