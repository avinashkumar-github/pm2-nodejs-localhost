const http = require("http");

const server = http.createServer((req, res) => {
  const payload = JSON.stringify({
    app: "Node js App with PM2",
    "process manager": "pm2",
    "process Id": process.pid
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(payload);
});
server.listen(80);
