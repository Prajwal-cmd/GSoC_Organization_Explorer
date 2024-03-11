import connectDB from "../db/index.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { Organisation } from "../models/organisations.model.js";
import { updateDB } from "../controllers/update.js";
import { search } from "../controllers/Search.js";
import { detail } from "../controllers/Detail.js";

const app = express();

app.use(
  cors({
    origin: ["https://gsoc-frontend.vercel.app"],
    methods: ["POST","GET"],
    credential: true,
  })
);
app.use(express.json());


app.get('/update-organizations', updateDB );

app.get('/search',search);

app.get('/detail',detail)

app.get('/' ,(req,res)=>{
  res.json("Hi");
})


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MondoDB connection failed ", err);
  });


