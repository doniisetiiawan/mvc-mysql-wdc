const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./server/controllers/index');
const bands = require('./server/controllers/Band');
const users = require('./server/controllers/User');

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', index.show);
app.get('/bands', bands.list);
app.get('/band/:id', bands.byId);
app.post('/bands', bands.create);
app.put('/band/:id', bands.update);
app.delete('/band/:id', bands.delete);
app.get('/users', users.list);
app.post('/users', users.create);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
