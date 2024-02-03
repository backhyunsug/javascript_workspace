const http = require("http");
const host = "127.0.0.1";
const port = 4000;  

let server = http.createServer((req, res)=>{
    
    console.log( req );
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is First Server</h1>");
    
} );

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});