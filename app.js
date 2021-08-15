const http = require("http");
const fs = require("fs");

const app = http
  .createServer((req, res) => {
    console.log(`Request is made to ${req.url}`);
    let fileToReturn;
    switch (req.url) {
      case "/":
        fileToReturn = "index";
        break;
      case "/about":
        fileToReturn = "about";
        break;
      case "/contact-me":
        fileToReturn = "contact-me";
        break;
      default:
        fileToReturn = "404";
        break;
    }

    fs.readFile(`./views/${fileToReturn}.html`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, "text/html");
        res.end(data);
      }
    });
  })
  .listen(3000);
