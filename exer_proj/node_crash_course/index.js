const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
  // console.log(reg.url);
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });//application/json
  //       res.end(content);
  //     }
  //   );
  // }

  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  )

  let extname = path.extname(filePath);

  let contentType = "text/html";

 // Check ext and set content type
 switch (extname) {
   case ".js":
     contentType = "text/javascript";
     break;
   case ".css":
     contentType = "text/css";
     break;
   case ".json":
     contentType = "application/json";
     break;
   case ".png":
     contentType = "image/png";
     break;
 }

 if (contentType == "text/html" && extname == "") filePath += ".html";

 fs.readFile(filePath, (err, content) => {
     // if (err) {
     //   if (err.code == "ENOENT") {
     //     fs.readFile(
     //       path.join(__dirname, "public", "404.html"),
     //       (err, content) => {
     //         res.writeHead(404, { "Content-Type": "text/html" });
     //         res.end(content, "utf8");
     //       }
     //     );
     //   } else {
     //     //  Some server error
     //     res.writeHead(500);
     //     res.end(`Server Error: ${err.code}`);
     //   }
     // } else {
       res.writeHead(200, { "Content-Type": contentType });
       res.end(content, "utf8");
     // }
   });


});

const PORT = process.env.PORT || 5000;

server.listen (PORT, ()=>console.log(`Server running on port ${PORT}`));
