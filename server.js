const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));