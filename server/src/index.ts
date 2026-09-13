import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import prisma from "./lib/prisma";
import vinylRoutes from "./routes/vinyl.routes";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "cache-control",
      "Pragma",
      "X-Requested-With",
    ],
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/vinyls", vinylRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "ok",
      db: "connected",
      message: "Vinyl Club API & DB are running!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "DB connection failed", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
