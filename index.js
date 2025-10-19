const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0'; // listen on all interfaces

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>✅ Node.js Server is Running!</h1>');
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});
