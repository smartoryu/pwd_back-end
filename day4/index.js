const express = require("express");
const app = express();
const port = 3030;

const users = [
  {
    id: 1,
    username: "agus",
    email: "agus@email.com",
    password: "1234"
  },
  {
    id: 1,
    username: "agus",
    email: "agus@email.com",
    password: "1234"
  },
  {
    id: 2,
    username: "bedu",
    email: "bedu@email.com",
    password: "1234"
  },
  {
    id: 3,
    username: "cantika",
    email: "cantika@email.com",
    password: "1234"
  },
  {
    id: 4,
    username: "daryl",
    email: "daryl@email.com",
    password: "1234"
  }
];

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
