import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactsRouter from "./routes/contacts";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send({ ok: true, name: "Pranexity Contacts API" }));

app.use("/api/contacts", contactsRouter);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(+port, () => {
  console.log(`Contacts API listening on http://localhost:${port}`);
});
