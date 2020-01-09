const http = require('http');
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.writeHead(200);
        response.end('Hello World !!');
    } else if(request.url === '/goodbye') {
        response.writeHead(200);
        response.end('Goodbye World !!');
    } else {
        response.writeHead(500);
        response.end(JSON.stringify({ error: "server error" }));
    }
});

const port = 3000;

server.listen(port);