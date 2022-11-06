module.exports = {
  development: {
    url: "postgres://dzhnqdvdkmhqot:cc2068076c86590c0b628f188faaff8f1a5286b51b75e2360bc879027e257c72@ec2-18-215-115-186.compute-1.amazonaws.com:5432/dejolifenb3j9f",
    dialect: "postgres",
    dialectOptions: {
      ssl:{
        rejectUnauthorized: false
      }
      
    }
  },
  test: {
    url: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URI,
    dialect: "postgres"
  }
}

