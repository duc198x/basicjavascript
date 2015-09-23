var hosts = ("192.168.1.1\n127.0.0.1\n255.255.255.0");
var users = ("hemanth, lenord\nmonkey\ncat");

var fs = require('fs');

var contents = fs.readFileSync('users','utf8');

console.log(contents);

console.log("Hello Node\n");

var contents = fs.readFileSync('hosts','utf8');

console.log(contents);

console.log("Hello again!");