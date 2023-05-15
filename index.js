require("dotenv");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get API Works!");
});

app.post("/", (req, res) => {
  if(req.body.query) {
    res.send(`This is what you send to me: ${req.body.query}`);
  } else {
    res.send(`Try to put 'query' on urlencoded with your value`)
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
