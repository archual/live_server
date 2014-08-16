/**
 * Created by Archual on 16.08.2014.
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.set_cell;
handle["/set_cell"] = requestHandlers.set_cell;
handle["/drop_cell"] = requestHandlers.drop_cell;

server.start(router.route, handle);
