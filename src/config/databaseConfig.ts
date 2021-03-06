export default () => ({
  port: parseInt(process.env.PORT || '3000', 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '3306', 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '1234',
    dbName: process.env.DATABASE_DB_NAME || 'nest',
  },
});
