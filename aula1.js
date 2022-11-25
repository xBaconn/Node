var http = require('http');
var dia = require('./biblioteca');  
//const { DiaDaSemana } = require('./biblioteca');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('<h2>Brasil 2 x 1 suiça</h2> \n');
    res.write('<p style=color:green>'+Date().substring(16, 24)+'<br>');
    res.write(dia.DiaDaSemana()+'</p><br><br>');

    res.write('gemido da bbw! <br>');
    res.end('niiannnnnnnnnnnnnnnnnnnnnn!');
}).listen(3000);