var http = require('http');
var url = require('url');

http.createServer(function (res, res){
res.writeHead(200, {'content-type': 'text/html'});
res.wrire(res.url);
// var q = url.parce(req.url, true).query;
// var txt = "<br>dia:" "+q.dia+" <br> mes "+q.mes+" <br> ano: "+q.ano";
//res.end(txt);
}).listem(80);
