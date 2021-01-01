const express = require('express')
const app = express()
const fs = require('fs');
const port = 65000

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', function(err, data) { //read file index.html in public folder
        if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
                return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
        res.write(data); //write data from index.html
        return res.end();
    });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})