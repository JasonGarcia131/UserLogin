module.exports = {
  development: {
    url: "postgres://uafjzsjmcojgpf:53ca9538256f6368965c85ea9d2c228e1d33d8f098105138900b8cc363ad8dd4@ec2-54-160-200-167.compute-1.amazonaws.com:5432/d494q7tc1uptvk",
    dialect: postgres
  },
  test: {
    url: "127.0.0.1",
    dialect: postgres
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: postgres
  }
}
//remove quotes, remove username password and database replace it with heroku postgres url
