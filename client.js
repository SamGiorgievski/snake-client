const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({ //establish connection
    host: IP,
    port: PORT,
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

module.exports = { connect };