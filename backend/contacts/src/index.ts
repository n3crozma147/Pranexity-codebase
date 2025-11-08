import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/contactRouter";
import morgan from 'morgan'
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(morgan('dev'))
app.get("/", (_req, res) => res.send({ ok: true, name: "Pranexity Contacts API" }));

app.use("/api/contactUs", router);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(+port, () => {
  console.log(`Contacts API listening on http://localhost:${port}`);
});
