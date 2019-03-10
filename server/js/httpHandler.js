const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  var random = Math.floor(Math.random() * 4)
  var directions = ['left', 'right', 'up', 'down']
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    if (req.url === '/background.js') {
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
          res.end();
          return
        }
        res.writeHead(200, headers);
        res.end(data);
        next();
      })
    }
    res.writeHead(200, headers);
    res.end(directions[random]);
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  next();
};
