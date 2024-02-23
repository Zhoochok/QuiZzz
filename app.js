require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');
const app = express();
const PORT = 3000;
const indexRouter = require('./routes/index.router');


app.use(express.urlencoded({ extended: true }));

app.use(ssr);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404);
  res.sendFile(__dirname + '/404.html');
});

app.listen(PORT, () => {
  console.log(`Serever has been started!`);
});