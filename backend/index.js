const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const {router:signRouter}=require("./sign.js");
app.use(express.json());
app.use("/",signRouter);
app.listen(3000);