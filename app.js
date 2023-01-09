const http = require('http');

const port = 'https://api.render.com/deploy/srv-cet5b902i3mj6ph3icj0?key=Xe_mHWJCg8k';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Dianery Mejia');
});

server.listen(port, () => {
  console.log(`Server running at https://api.render.com/deploy/srv-cet5b902i3mj6ph3icj0?key=Xe_mHWJCg8k`);
});