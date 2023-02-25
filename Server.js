import express from "express";
import mongoose from "mongoose";
import { PORT, mongoUrl } from "./Const.js";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

mongoose
    .connect(mongoUrl)
    .then(() => console.log("Database Connection successfully"))

    .catch((err) => console.log("Database Connection Failed", err.message));


app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});