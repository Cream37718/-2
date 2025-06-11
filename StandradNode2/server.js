let formidable = require('formidable');
let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let oldpath = files.fileupload.filepath;
            let newpath = '/Users/This/Desktop/code/StandradNode2/img/' + files.fileupload.originalFilename ;
            fs.rename(oldpath, newpath, function(err){
                if(err) throw err;
                console.log(files);
                res.write('File upload and moved')
                res.end();
            })
        });
    }
    else {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);