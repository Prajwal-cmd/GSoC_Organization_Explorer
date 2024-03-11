import connectDB from "./db/index.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { Organisation } from "./models/organisations.model.js";
import { updateDB } from "./controllers/update.js";
import { search } from "./controllers/Search.js";
import { detail } from "./controllers/Detail.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);
app.use(express.json());


app.get('/update-organizations', updateDB );

app.get('/search',search);

app.get('/detail',detail)


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MondoDB connection failed ", err);
  });


