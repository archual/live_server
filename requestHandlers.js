/**
 * Created by Archual on 17.08.2014.
 */

var exec = require("child_process").exec;

function set_cell(response) {
    console.log("Request handler 'set' was called.");
    var content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });

}

function drop_cell(response) {
    console.log("Request handler 'drop' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello drop");
    response.end();
}

exports.set_cell = set_cell;
exports.drop_cell = drop_cell;