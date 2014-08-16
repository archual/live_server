/**
 * Created by Archual on 16.08.2014.
 */

var http = require("http");
var url = require("url");

function start(route, handle){
    //server function
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        //call route module
        route(handle, pathname, response);

    }

    //create and run server and listener
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

//export function with server code in module
exports.start = start;