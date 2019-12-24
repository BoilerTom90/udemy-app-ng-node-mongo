// function sayHello(name) {
//    console.log("Hello " + name);
// }

// sayHello("Bob");

var http = require('http');

function onRequest(request, response) {
   console.log("onRequest popped");
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.write('Hello World');
   response.end();
}
http.createServer(onRequest).listen(3000);