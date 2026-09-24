import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import healthRouter from "./routes/health.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/health", healthRouter);

app.use(errorMiddleware);

export default app;