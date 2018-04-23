#! /usr/bin/env node
var fs = require('fs');
fs.writeFile("./public/env.js", "window.env={'API_ROOT':'"+process.env.API_ROOT+"'}\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("./public/env.js is updated with "+process.env.API_ROOT);
});