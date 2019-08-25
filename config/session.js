const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = session({
  secret: process.env.SESSIONSECRET,
  name: 'session',
  resave: true,
  cookie: {
    maxAge: 60000 * 60
  },
  store: new MongoStore({
    url: process.env.MONGOSESSION,
    autoRemove: 'native'
  }),
  saveUninitialized: true
});
