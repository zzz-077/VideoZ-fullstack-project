import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./src/Router/router.js";
const BACK_PORT = process.env.BACK_PORT || 3000;
const app = express();
const server = http.createServer(app);
// Enable CORS & Middleware
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(express.json());
app.use(express.text());
app.use(cookieParser());
app.use("/", router);

//soketIo
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);
  socket.on("JoinedInCall", () => {
    console.log("joined in call");
  });
});
server.listen(BACK_PORT, () => {
  console.log(`Server is running on port ${BACK_PORT}`);
});
