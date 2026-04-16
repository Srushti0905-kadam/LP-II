const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());


connectDB();


app.use("/users", require("./routes/userroutes"));


app.get("/", (req, res) => {
  res.send("Server Running...");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});