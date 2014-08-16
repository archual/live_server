/**
 * Created by Archual on 16.08.2014.
 */

var http = require("http");

function start(){
    //server function
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    //create and run server and listener
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

//export function with server code in module
exports.start = start;