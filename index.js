const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, response) => {
    if (req.url === "/") {
        let filePath = path.join(__dirname, 'views', "home.html")
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err);
            }
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    } 
    if (req.url === "/about") {
        let filePath = path.join(__dirname, 'views', "about.html")
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err);
            }
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    } 
    if (req.url === "/contact") {
        let filePath = path.join(__dirname, 'views', "contact.html")
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err);
            }
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    } else{
        let filePath = path.join(__dirname, 'views', "404.html")
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err);
            }
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
    })
}
})

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
})


