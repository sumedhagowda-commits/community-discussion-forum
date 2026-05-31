const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/discussions", require("./routes/discussion"));

const server = app.listen(5000, () =>
  console.log("Server running on 5000")
);

/* SOCKET.IO (REAL TIME) */
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("join", (room) => {
    socket.join(room);
  });

  socket.on("message", (data) => {
    io.to(data.room).emit("message", data);
  });
});