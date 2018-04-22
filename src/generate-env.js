#! /usr/bin/env node
var fs = require('fs');
fs.writeFile("./public/env.js", "const ENV_API_ROOT='"+process.env.API_ROOT+"';\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("./public/env.js contains "+process.env.API_ROOT);
});