let http = require("http"); //http프로토콜을 지원하는 모듈임 

let server = http.createServer( function(request, response)
{
    response.writeHead(200, {"Content-Type":"text/html"}); 
    response.end("<h1>Hello nodejs</h1>");
});

//createServer 함수는 서버객체를 생성한다. 
//생성된 객체를 이용해 클라이언트가 접속해 오기를 기다린다. 
//클라이언트가 접속해오면 createServer함수에서 콜백함수를 호출한다 

server.listen(3000, ()=>{
    console.log("서버 시작");
});

//서버가 클라이언트로부터 요청을 받을 준비를 한다. listen:대기상태로 들어간다 