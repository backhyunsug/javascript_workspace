const http = require("http");
const host = "127.0.0.1";
const port = 4000;  
const url = require("url");
const fs = require("fs"); //html 파일을 읽어서 ejs엔진을 통해 
//자바스크립트 객체와 html 을 결합해서 새로운 html을 만들어 보내야한다 
//npm install ejs -- 별도의 설치를 해야 한다 
const ejs = require("ejs");

let server = http.createServer((req, res)=>{
    
    fs.readFile("./html/index.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");
            return;
        }

        res.writeHead(200, {"Content-Type":"text/html"});

        //data = data.replace("{{title}}", "Hello");
        //ejs엔진이 동적인 웹페이지를 만든다. 
        data = ejs.render(data,{
                                title:"Hello", 
                                contents:"안녕하세요",
                                foods:["사과", "배", "오렌지", "메론"]
                               } )
        res.end( data );
    });
    
} );

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});