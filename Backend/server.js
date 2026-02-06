const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter");
const connectDB = require("./config/db");

dotenv.config();          // load env variables

const app = express();   // ✅ create app FIRST

// middlewares
app.use(cors());
app.use(express.json());

// database
connectDB();

// routes
app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);

// port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});