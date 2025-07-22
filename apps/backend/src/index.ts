import express from "express";
import {BACKEND_URL} from "@repo/common/config"
const app = express();
const BACKEND_URLReal = BACKEND_URL
app.use(express.json());
const port:number = 3666;

app.get("/" , (req ,res)=>{
    res.json({
        message : "critical issue solved"
    })
});
console.log(BACKEND_URLReal)
console.log(`The web backend is running on ${port}`);

app.listen(port , ()=>{
    `app is running on the port ${port}`
});
