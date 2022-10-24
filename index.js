const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Testando sincronia com GitHub')
});

app.listen(3000, () => {
  console.log('server started');
});
