//동기모드 : A, B, C 가 있으면 A를 시작하고 업무를 끝나고 B 를 시작하고 끝내고 C를 시작하고 끝낸다
//비동기모드 : A, B, C 가 있으면 

/* A를 시작하고 업무가 안끝나도 함수를 바로 리턴한다 
   B를 시작하고 업무가 안끝나도 함수를 바로 리턴한다 
   C를 시작하고 업무가 안끝나도 함수를 바로 리턴한다  

   시스템이 백그라운데어 나머지 일들을 끝낸다. 작업이 완료되었음을 알려야 하는데 
   콜백함수로 알려준다. 완료된 일의 결과도 콜백함수를 통해서 알려준다 

   let result=callFunction(); //결과가   반환값으로 전달되도록 구성한다 

   비동기 모드 
   callFunction ( callbackFunc(){
        여기서 일이 완료되었음을 알수있다. 
        여기서 나머지 처리를 해야 한다. 

   } );

   코드
*/

let fs = require("fs");

fs.readFile("비동기모드3.js", "utf-8", (err, data)=>{
    if(err) //err가 null이 아니면 
    {
        console.log(err);
        return; //함수를 끝낸다 
    }
    
    console.log(data);
    console.log("ending ...........");
    
});




