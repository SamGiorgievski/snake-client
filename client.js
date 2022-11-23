const net = require("net");

const connect = function () {
  const conn = net.createConnection({ //establish connection
    host: "165.227.47.243",
    port: "50541",
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Sam");
    //setInterval(() => {conn.write("Move: up")}, 100);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;