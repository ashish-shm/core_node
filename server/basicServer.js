var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

var server = http.createServer(handleRequest);
var port = 5555;

function handleRequest(req, res) {
  res.end('Welcome to NodeJS');
}

server.listen(port, () => {
  console.log('Server is running on port ' + port)});

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

var server = http.createServer(handleRequest);
var port = 6666;

function handleRequest(req, res) {
  
  
  res.end(JSON.stringify(req.headers));
}

server.listen(port, () => {
  console.log('Server is running on port ' + port)});

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url);
  console.log( req.method);
  res.end();
}

server.listen(3000, () => {
  console.log('Server is running on port 3000')});

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  var server = http.createServer(handleRequest);

  function handleRequest(req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(`<h2> Hey Yo </h2>`);
  }

  server.listen(6000, () => {
    console.log('Server is running on port 6000')});

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  var fs = require('fs');
  var server = http.createServer(handleRequest);

  function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(__dirname + '/index.html', (err, data) => {

      if(err) {
        return res.end('Error');
        
      } else {
          res.end(data);
      }
    })
  }

  server.listen(3000, () => {
    console.log('Server is running on port 3000')});

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  var server = http.createServer(handleRequest);
  var url = require('url');
  var fs = require('fs');

  function handleRequest(req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    var parsedData = url.parse(req.url);
    
    if(parsedData.pathname === '/') {
      fs.createReadStream('./index.html').pipe(res);
    } else if(parsedData.pathname === '/about') {
        fs.createReadStream('./about.html').pipe(res);
    } else if(parsedData.pathname === '/contact') {
        fs.createReadStream('./contact.html').pipe(res);
    } else {
        res.end('Page Not Found!');
    }
  }

  server.listen(3000, () => {
    console.log('Server is running on port 3000')});

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

  var server = http.createServer();

  server.on('request', (req, res) => {
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      })

      req.on('end', () => {
        res.end(store);
      })
  })
  
  server.listen(3000, () => {
    console.log('Server is running on port 3000')});

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

  var server = http.createServer();

  server.on('request', (req, res) => {
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      })

      req.on('end', () => {
        res.end(store);
      })
  })
  
  server.listen(3000, () => {
    console.log('Server is running on port 3000')});

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

  var server = http.createServer();
  var qs = require('querystring');

  server.on('request', (req, res) => {
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      })

      req.on('end', () => {
        var data = qs.parse(store);
        res.end(JSON.stringify(data));
      })
  })
  
  server.listen(3000, () => {
    console.log('Server is running on port 3000')});

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

  var url = require('url');
  var qs = require('querystring');
  var server = http.createServer();
  
  server.on('request', (req, res) => {
    
    var parsedUrl = url.parse(req.url, true);
    if(parsedUrl.pathname === '/new') {
      
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      }) 
  
      req.on('end', () => {
        
       
        res.end(`Protocol: ${parsedUrl.protocol}, Path: ${parsedUrl.path}, Pathname: ${parsedUrl.pathname}, Query: ${JSON.stringify(parsedUrl.query)} `)
      })
    }
  })

  server.listen(7000, () => {
    console.log('Server is running on port 7000')});

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

  const path = require('path');

  var absolute = path.join(__dirname, 'theory.md');
  var relative = './theory.md';

  console.log(absolute);

