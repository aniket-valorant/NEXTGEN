
const http = require('http');
const fs = require('fs');
const os = require('os');

console.log("normal Log")
console.warn('Danger')
console.assert(true, "tracsaction complate")
console.assert(false, "tracsaction failed")
console.assert("ctracsaction failed")


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if(req.url === '/'){
    fs.readFile('notes.txt',(error,data) => {

        res.write(data)
        res.end();
    })

  }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
