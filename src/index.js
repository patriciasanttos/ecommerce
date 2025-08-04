const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

require("dotenv").config();

const routes = require("./routes");
routes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
