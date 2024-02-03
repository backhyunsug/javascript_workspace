const http = require("http");
const host = "127.0.0.1";
const port = 4000;  
const url = require("url");
let callFunc = [
    {path:"/",    func:callProcess, method:"POST"},
    {path:"/add", func:callAdd, method:"POST"}
];

let server = http.createServer((req, res)=>{
    
    console.log( req.method );
    if( req.method =="POST")
    {
        let pathName = url.parse(req.url).pathname;
        console.log( pathName);
        /*
        pathName == "/" =========>  callProcess(req, res);
        pathName =="/add"  =====-> callAdd(req, res)
        */
        index = callFunc.findIndex( item=> item.path == pathName)
        if (index == -1)
        {
            res.writeHead(403, {"Content-Type":"text/html"});
            res.end("<h1>권한이 없습니다</h1>");
            return;
        }

        callFunc[index].func(req, res);
    }
    else 
    {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>This is First Server</h1>");
    }
} );

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});

function callProcess(req, res)
{
    //POST방식은 body에 데이타를 별도로 보내서 GET방식과 별도의 처리를 해야 한다 
    let body = "";
    req.on('data', (data)=>{
        body+=data;
    })

    req.on('end', ()=>{
        var data = new URLSearchParams(body.toString());
        //json구조 아님 
        console.log( data);
        console.log("name " + data.get("name"));
        console.log("age " + data.get("age"));

        res.writeHead(200, {'Content-Type':'text/html'});
        var result = '<h1>이름 : '+data.get("name")+'</h1>';
        result += '<h1>나이 : '+data.get("age")+'</h1>';
        res.end(result);  
    });
}

function callAdd(req, res)
{
    //POST방식은 body에 데이타를 별도로 보내서 GET방식과 별도의 처리를 해야 한다 
    let body = "";
    req.on('data', (data)=>{
        body+=data;
    })

    req.on('end', ()=>{
        var data = new URLSearchParams(body.toString());
        //json구조 아님 
       
    

        res.writeHead(200, {'Content-Type':'text/html'});
        var result = '<h1>x : '+data.get("x")+'</h1>';
        result += '<h1>y : '+data.get("y")+'</h1>';
        res.end(result);  
    });
}