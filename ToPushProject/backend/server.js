const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "././config.env" });

const app = require("./app");

//LOCAL DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_LOCAL).then(() =>
  // console.log(con.connection);
  console.log("DB connection successfull !!(localhost)")
);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});



