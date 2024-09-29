// https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49
const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

const publicURLPath = process.env.PUBLIC_URL_PATH || "/mern";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    credentials: true,
    methods: "GET, PUT, POST, DELETE",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get(publicURLPath + "/healthz", (req, res) => {
  // console.log(req);
  return res.status(200).json({ message: "ok" });
});

app.use(publicURLPath, express.static(path.join(__dirname, "public")));
app.use(publicURLPath + "/api", routes);

app.get(publicURLPath + "*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((err, req, res, next) => {
  return res
    .status(400)
    .json({ message: "Error in processing Request", description: err.message });
});

const uri= process.env.uri || 'mongodb://localhost:27017/users'

mongoose
  .connect(uri)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`Listening at port on ${port}`);
});
