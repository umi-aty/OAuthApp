const { Pool, Client } = require("pg");
const connectionString =
  "postgressql://postgres:umicantik@localhost:2230/skilltest1";
const client = new Client({
  connectionString: connectionString,
});
client.connect();

client.query("SELECT * FROM users", (err, res) => {
  console.log(err, res);
  client.end();
});
