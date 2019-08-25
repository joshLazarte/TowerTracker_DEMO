module.exports = {
  database: process.env.DATABASE,
  secret: process.env.DATABASESECRET,
  params: {
      useNewUrlParser: true,
      useFindAndModify: false
  }
};