// server.mjs
// import { createServer } from 'node:http';
var http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if(req.url === '/'){
    res.write('{"title":"Welcome to My Website","description":"This is the home page where you can find the latest updates.","featured":true,"links":[{"label":"About Us","url":"/about"},{"label":"Services","url":"/services"},{"label":"Contact","url":"/contact"}]}')
    res.end();
  }

  if(req.url === '/product'){
    res.write('{"orderId":101,"items":[{"product":"Laptop","quantity":1,"price":1200.99},{"product":"Mouse","quantity":2,"price":25.5}],"total":1251.99,"status":"Processing","deliveryDate":"2025-01-25"}')
    res.end();
  }

  if(req.url === '/order'){
    res.write('{"id": 1, "type": "Credit Card","holderName": "John Doe", "number": "1234-5678-9012-3456", "expiry": "12/28", "cvv": "123"}')
    res.end();
  }

  if(req.url === '/profile'){
    res.write('{"userId":202,"name":"Michael Johnson","email":"michael.johnson@example.com","username":"michaelj","bio":"Software developer and tech enthusiast.","preferences":{"theme":"dark","notifications":true}}')
    res.end();
  }

  if(req.url === '/contact'){
    res.write('{"name":"Jane Smith","email":"jane.smith@example.com","phone":"+1234567890","message":"Looking forward to learning more about your services.","preferredContactMethod":"email"}')
    res.end();
  }

});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
