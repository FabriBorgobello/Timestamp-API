const http = require('http');

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const params = new URLSearchParams(url.search);
  if (url.pathname === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ currentTime: new Date() }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
