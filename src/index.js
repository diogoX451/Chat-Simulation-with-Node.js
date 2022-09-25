const express = require("express");
const app = express();
const port = 3000;
const routes = require("./route/route");
app.set("view engine", "ejs");
app.set("views", "./src/public");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//config socket.io
const { Server } = require("socket.io");
const onSocket = require("./controller/Socket");
const io = new Server(
  app.listen(port, () => {
    console.log(`Runnig in link http://localhost:${port}`);
  })
);
onSocket(io);
