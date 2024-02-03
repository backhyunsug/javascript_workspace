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
    if( req.method=="GET" && pathName=="/")
    {
        //GET방식일때는 이렇게 
        let query =  url.parse(req.url, true).query;  //string
       
        console.log( query["name"]);
        console.log( query["age"]);
        
        res.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1>${query.name} ${query.age}</h1>`);
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