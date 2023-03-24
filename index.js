const http = require("http")
const fs = require("fs")

Name = process.argv[2]

fileName = "index.html"

fileContent = `<h1>Hello World</h1>
<p>This is ${Name}....</p>`


fs.writeFile(fileName, fileContent, (error) => {
    if (error) return callback("the file can not be created")
})


http.createServer((request,response)=>{
    console.log("server is running")
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err){console.log("error" + err);
        return;
        }
        else{
            response.writeHead(200);
            response.end(data)
        }
    })
;

}).listen(8000)
