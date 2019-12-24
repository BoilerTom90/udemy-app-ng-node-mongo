## Overview of NodeJS
A Javascript implementation that runs on the server.  
NodeJS processes the API/Services

## Installing NodeJS

## Running your first NodeJS Server
```
var http = require('http');

function onRequest(request, response) {
   console.log("onRequest popped");
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.write('Hello World');
   response.end();
}
http.createServer(onRequest).listen(3000);

## Quick Overview of MongoDB
```
mongodb.com
-- click links to create a cluster
-- Add my IP
-- Add user
   atlasadmin/atlasadmin
-- Connection String for NodeJS
```
mongodb+srv://atlasadmin:atlasadmin@cluster0-ncyhu.mongodb.net/test?retryWrites=true&w=majority
```