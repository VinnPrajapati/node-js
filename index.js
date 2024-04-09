const http=require('http');

// const dataControl=(req,resp)=>{
//     resp.write("this is this xfdssfsdfdf");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);


http.createServer((req,resp)=>{
    resp.write("this is this jjjjj");
    resp.end();
}).listen(4500);