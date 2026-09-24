import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.use(errorMiddleware);

export default app;