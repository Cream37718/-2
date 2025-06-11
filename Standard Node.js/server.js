let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');

const { eventEmitter } = require('events');

let eventEmitter = new events.EventEmitter();//เรียกใช้งาน events

let myEventHandler = function(){//สร้างตัวจัดการ eventHandler
    console.log('I here screem');
}

eventEmitter.on('scream', myEventHandler);//กำหนดการจัดการeventให้กับevent

eventEmitter.emit('scream');//การเรียกใช้งานevent

/*rs.on('open', function(){
    console.log('The file is open1');
})*/
/*let adr = "http://localhost:8000/default.html?year=2025&month=may";
let q = url.parse(adr,true);

console.log(q.host); //returns localhost:8000;
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);*/

/*http.createServer(function(req, res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'index.html'});
        res.write(data);
        return res.end();
    })
}).listen(8000);*/

/*fs.appendFile('mynewfile.txt','Hello Cream',function(err){
    if(err) throw err;
    console.log('Saved!');
    
});*/

/*fs.open('mynewfile2.txt','w', function(err,file){
    if(err) throw err;
    console.log('Saved!');
});*/

/*fs.writeFile('mynewfile3.txt','This is replace new file',function(err){
    if(err) throw err;
    console.log('Saved!'); 
});*/

/*fs.unlink('mynewfile3.txt',function(err){
    if(err) throw err;
    console.log('Deleted!')
});*/

/*fs.rename('mynewfile2.txt','myrenamefile.txt',function(err){
    if(err) throw err;
    console.log('Changename Success!')
});*/

/*http.createServer(function(req,res){
    let q = url.parse(req.url,true);
    let filename = "."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'contact-type':'index.html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'contact-type':'index.html'});
        res.write(data);
        return res.end();
    });
}).listen(8000);*/

/*http.createServer(function(req,res){
    res.writeHead(200,{'contact-type':'index.html'});
    res.write(uc.upperCase('panida vaicharoen'));
    res.end();
}).listen(8000);*/