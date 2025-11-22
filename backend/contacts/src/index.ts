
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/contactRouter";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Test Route
app.get("/", (_req, res) =>
  res.send({ ok: true, name: "Pranexity Contacts API" })
);

// Only enable CORS for contact form route
app.use(
  "/api/contactUs",
  cors({
    origin: "http://localhost:5173", 
    methods: ["POST"],                   
  }),
  router
);

// Error Handler
app.use(errorHandler);

// Server Boot
const port = process.env.PORT || 4000;
app.listen(+port, () => {
  console.log(`Contacts API running on http://localhost:${port}`);
});
