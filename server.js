const app = require('./src/app');
const port = process.env.PORT || 3000;

const server= app.listen(port, function () {
  console.log(' In Server JS..................' + port)
});

server.timeout = 300000;
