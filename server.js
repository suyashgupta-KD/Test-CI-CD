const express = require("express");
const app = express();

app.get("/health", (req, res) => res.status(200).send("ok"));
app.get("/api/hello", (req, res) =>
  res.json({ message: "hello from bySuyash" }),
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on ${port}`));
