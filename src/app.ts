import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use("/api/users", userRouter);

export default app;