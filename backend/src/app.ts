import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import messageRoutes from "./routes/messageRoutes";

dontenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", messageRoutes);

export default app;
