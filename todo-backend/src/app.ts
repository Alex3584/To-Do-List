import express, { Application } from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API is running. Use /tasks for CRUD.");
});

export default app;
