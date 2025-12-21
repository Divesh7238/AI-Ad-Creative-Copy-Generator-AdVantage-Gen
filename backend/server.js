import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imageRoutes from "./routes/image.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", imageRoutes);

app.get("/health", (req, res) => {
  res.send("Server Running");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on port ${process.env.PORT || 3000}`)
);
