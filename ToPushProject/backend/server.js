const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "././config.env" });

const app = require("./app");


const dbURI = 'mongodb+srv://eyanleroy:1234567890@cluster1.0m9bzmq.mongodb.net/miniProject?retryWrites=true&w=majority&appName=Cluster1';
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});



