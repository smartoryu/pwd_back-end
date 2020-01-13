const express = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // client sending data to server

const app = express();
const PORT = 3030;
const users = [
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
  console.log("tes");
  return res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
  console.log(req.query);
  const { username, password } = req.query;
  if (username && password) {
    let newUser = users.filter(val => val.username === username && val.password === password);
    newUser.length === 0 ? res.status(404).send("User not found!") : res.status(200).send(newUser);
  } else if (username || password) {
    let newUser = users.filter(val => val.username === username || val.password === password);
    newUser.length === 0 ? res.status(404).send("User not found!") : res.status(200).send(newUser);
  } else {
    return res.status(200).send(users);
  }
});

app.post("/users", (req, res) => {
  console.log(req.body);
  return res.status(200).send("Successful!");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
