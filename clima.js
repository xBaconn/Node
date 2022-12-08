var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req,res){
var q = url.parse (req.url, true);
var filename = " . " + q.pathname;
fs.readFile(filaname, function (err, data) {

    if(err) {
      res.whileHead(404, {'content-type': 'text/html'});
      return res.end("PAGINA INVALIDA!");}

      res.writeHead(200, {'Content-type': 'text/html'});
      res.white(data);
      return res.end();
    });

}).listen(80);
