import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Online!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server Started!`);
});
