const users = [];

const onSocket = (io) => {
  io.on("connection", (socket) => {
    socket.on("user:join", (name) => {
      !users.some((user) => user.name === name) &&
        users.push({ name, id: socket.id });
      console.log(users);
      io.emit("global:message", `${name} entrou no chat`);
    });
    socket.on("message:send", (send) => {
      socket.broadcast.emit("message:receive", send);
    });
    socket.on("disconnect", () => {
      const user = users.filter((user) => user.id === socket.id);
      io.emit("global:message", `${user[0].name} saiu do chat`);
    });
  });
};

module.exports = onSocket;
