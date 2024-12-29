import express from "express";
import { createServer } from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./src/Router/router.js";
import dotenv from "dotenv";
import { Server } from "socket.io";
dotenv.config();
const BACK_PORT = process.env.BACK_PORT || 3000;
const FRONT_PORT = process.env.FRONT_PORT || 4200;
const app = express();
const server = createServer(app);
// WEB SOCKET
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${FRONT_PORT}`,
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});
// Enable CORS & Middleware
app.use(
  cors({
    origin: `http://localhost:${FRONT_PORT}`,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.text());
app.use(cookieParser());
app.use("/", router);

// createing server
server
  .listen(BACK_PORT, () => {
    console.log(`Server is running on port ${BACK_PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error starting the server: ${err.message}`);
  });
