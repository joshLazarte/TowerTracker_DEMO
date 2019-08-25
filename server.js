require('dotenv').config();
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  { database, params } = require('./config/database'),
  sessionConfig = require('./config/session'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'),
  messages = require('./config/messages');

mongoose.connect(database, params);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(sessionConfig);
app.use(flash());
app.use(messages);

app.use((req, res, next) => {
  res.locals.root = process.env.APP_ROOT;
  next();
});

app.use('/api/towers', require('./routes/api/towers'));
app.use('/api/email', require('./routes/api/email'));
app.use('/api/excel', require('./routes/api/excel'));
app.use('/setup/tech', require('./routes/setup/tech'));
app.use('/setup/market', require('./routes/setup/market'));
app.use(require('./routes/auth/auth'));
app.use(require('./routes/pages/pages'));

app.listen(process.env.PORT, () => console.log('server started!'));
