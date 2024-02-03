const http = require("http");
const host = "127.0.0.1";
const port = 4000;  
const fs = require("fs");
const url = require("url"); 
//GET방식으로 전달된 문자열을 parsing해서 json으로 만들어준다 

let server = http.createServer((req, res)=>{
    
    console.log( req.method );
    console.log( req.url );
    console.log( url.parse( req.url) );
    
    //  url  /?name=TOM&age=12
    /* 
         /
         name
         age

    */
    let pathName = url.parse(req.url).pathname;
    if( req.method=="GET" )
    {
        let query =  url.parse(req.url, true).query;
        if(pathName=="/")
        {
            //GET방식일때는 이렇게 string
            //JSON -> 요소에 접근할때  ob["키값"] 또는 ob.키값
            //키값에 하이픈 들어있으면 자바 변수에 - 못 쓴다. 이때는 무조건 대괄호로 
            // ob["name"] or ob.name 둘다 가능 
            // ob["user-name"]만 가능하다.   ob.user-name 은 불가능
            console.log( query["name"]);  
            console.log( query["age"]);
            
            res.statusCode=200;
            res.setHeader("Content-Type", "text/html");
            res.end(`<h1>${query.name} ${query.age}</h1>`);
        }
        else if(pathName=="/add") //Spring->DispatchServlet 라는 클래스 
        {   //http://127.0.0.1:4000/add?x=4&y=5
            let x = parseInt(query.x);
            let y = parseInt(query.y);
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(`<h1>${x} + ${y} = ${x+y}</h1>`);
        }//http://127.0.0.1:4000/gugu?dan=4 (함수로 만들기)
        else if( pathName == "/gugu")
            gugu(req, res);
    }
    else
    {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>post</h1>");
    }
} );

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});


function gugu( req, res)
{
    let query = url.parse(req.url, true).query;
    let dan = query.dan; 

    let result ="";
    for(i=1; i<=9; i++)
    {
        result += `${dan} X ${i} = ${dan*i}<br/>`;
    }
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(result);
}



/*
node : npm, yarn
python : pip 

라이브러리를 설치할때 시스템을 건드리는 라이브러리가 있을때가 있다. 
이때는 관리자 권한이 있어야 제대로 설치가 된다. 

cmd -> 마우스오른쪽 -> 관리자권한  
visual studio code의 터미널 창도 visual studio code 를 관리자권한으로 실행하면 
관리자권한이되어서 설치 가능 
*/