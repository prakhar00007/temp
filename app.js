import express from "express";
import {config} from "dotenv"
import ErrorMiddleware  from "./middlewares/Error.js"
import cookieParser from "cookie-parser";

config({
    path:"./config/config.env",
})

const app=express();

//using middlewares

app.use(express.json());
app.use(express.urlencoded(
    {
        extended:true,
    }
));
app.use(cookieParser());

import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
import mongoose from "mongoose";
import other from "./routes/otherRoutes.js"


mongoose.set('strictQuery',false)
// mongoose.set('strictQuery',false)
app.use("/api/v1",course);
app.use("/api/v1",other);
app.use("/api/v1",user);
app.use("/api/v1",payment);
// app.use("/api/v1",other);


export default app;

app.use(ErrorMiddleware)