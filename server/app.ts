import express, { Express } from "express";
import morgan from "morgan"
import dotenv from 'dotenv';
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use('/',router);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});