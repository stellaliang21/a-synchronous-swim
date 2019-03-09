const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  var random = Math.floor(Math.random() * 4)
  var directions = ['left', 'right', 'up', 'down']

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(directions[random]);
  }

  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.end();
};
