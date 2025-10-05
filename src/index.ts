import app from "./app.js";
import config from "./config/config.js";
import { connectDb } from "./config/db.js";

app.listen(config.port,()=>{
    console.log(`listening to port: ${config.port}`);
})

connectDb()